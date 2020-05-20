import * as grpc from 'grpc';

import { IAuthenticatorServer } from '../proto/authenticator/authenticator_grpc_pb';
import { AuthenticatorRequest, AuthenticatorResponse } from '../proto/authenticator/authenticator_pb';
import { AuthenticatorService } from '../proto/authenticator/authenticator_grpc_pb';
import {verify} from "jsonwebtoken"


class AuthenticatorHandler implements IAuthenticatorServer {
    /**
     * Greet the user nicely
     * @param call
     * @param callback
     */
    authenticate = async(call: grpc.ServerUnaryCall<AuthenticatorRequest>, callback: grpc.sendUnaryData<AuthenticatorResponse>): Promise<void> => {
        const reply: AuthenticatorResponse = new AuthenticatorResponse();
        const decoded = await decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiMTIzNDU2Nzg5MCIsIl9pZCI6IjEyMzQ1IiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Rw4pKrJxcLfXIhcdjpkDpm6L5pV5PyVRI50IaVBn-bk');

        reply.setMessage(decoded.message);
        reply.setId(decoded._id);
        reply.setIat(decoded.iat.toString());
        reply.setName(decoded.name);

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
    const decoded:IDecoded = verify(token, "supersecretkey");
    return decoded;
}
export default {
    service: AuthenticatorService,                // Service interface
    handler: new AuthenticatorHandler(),          // Service interface definitions
};