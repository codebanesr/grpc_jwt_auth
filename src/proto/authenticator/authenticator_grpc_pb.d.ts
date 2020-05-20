// package: authenticator
// file: authenticator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as authenticator_pb from "./authenticator_pb";

interface IAuthenticatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    authenticate: IAuthenticatorService_Iauthenticate;
}

interface IAuthenticatorService_Iauthenticate extends grpc.MethodDefinition<authenticator_pb.AuthenticatorRequest, authenticator_pb.AuthenticatorResponse> {
    path: string; // "/authenticator.Authenticator/authenticate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<authenticator_pb.AuthenticatorRequest>;
    requestDeserialize: grpc.deserialize<authenticator_pb.AuthenticatorRequest>;
    responseSerialize: grpc.serialize<authenticator_pb.AuthenticatorResponse>;
    responseDeserialize: grpc.deserialize<authenticator_pb.AuthenticatorResponse>;
}

export const AuthenticatorService: IAuthenticatorService;

export interface IAuthenticatorServer {
    authenticate: grpc.handleUnaryCall<authenticator_pb.AuthenticatorRequest, authenticator_pb.AuthenticatorResponse>;
}

export interface IAuthenticatorClient {
    authenticate(request: authenticator_pb.AuthenticatorRequest, callback: (error: grpc.ServiceError | null, response: authenticator_pb.AuthenticatorResponse) => void): grpc.ClientUnaryCall;
    authenticate(request: authenticator_pb.AuthenticatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authenticator_pb.AuthenticatorResponse) => void): grpc.ClientUnaryCall;
    authenticate(request: authenticator_pb.AuthenticatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authenticator_pb.AuthenticatorResponse) => void): grpc.ClientUnaryCall;
}

export class AuthenticatorClient extends grpc.Client implements IAuthenticatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public authenticate(request: authenticator_pb.AuthenticatorRequest, callback: (error: grpc.ServiceError | null, response: authenticator_pb.AuthenticatorResponse) => void): grpc.ClientUnaryCall;
    public authenticate(request: authenticator_pb.AuthenticatorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authenticator_pb.AuthenticatorResponse) => void): grpc.ClientUnaryCall;
    public authenticate(request: authenticator_pb.AuthenticatorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authenticator_pb.AuthenticatorResponse) => void): grpc.ClientUnaryCall;
}
