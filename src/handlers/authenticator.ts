import * as grpc from 'grpc';

import { IAuthenticatorServer } from '../proto/authenticator/authenticator_grpc_pb';
import { AuthenticatorRequest, AuthenticatorResponse } from '../proto/authenticator/authenticator_pb';
import { AuthenticatorService } from '../proto/authenticator/authenticator_grpc_pb';
import {verify} from "jsonwebtoken"


class AuthenticatorHandler implements IAuthenticatorServer {
    /**
     * @param call
     * @param callback
     */
    authenticate = async(call: grpc.ServerUnaryCall<AuthenticatorRequest>, callback: grpc.sendUnaryData<AuthenticatorResponse>): Promise<void> => {
        const reply: AuthenticatorResponse = new AuthenticatorResponse();

        const token = (call.metadata.get("authorization")[0] as string).split(" ")[1];

        let decoded = {} as IDecoded;
        try {
            decoded = await decode(token);
            reply.setMessage(decoded.message);
            reply.setId(decoded._id);
            reply.setIat(decoded.iat.toString());
            reply.setName(decoded.name);
        }catch(e) {
            console.log(e)
            callback(e, reply);
        }
        callback(null, reply);
    };
}


interface IDecoded {
    message: string,
    name: string,
    iat: string,
    _id: string
}

function decode(token: string) {
    const decoded:IDecoded = verify(token, "supersecretkey") as IDecoded;
    return decoded;
}


export default {
    service: AuthenticatorService,                // Service interface
    handler: new AuthenticatorHandler(),          // Service interface definitions
};