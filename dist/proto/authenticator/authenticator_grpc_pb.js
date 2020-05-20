// GENERATED CODE -- DO NOT EDIT!
'use strict';
var grpc = require('grpc');
var authenticator_pb = require('./authenticator_pb.js');
function serialize_authenticator_AuthenticatorRequest(arg) {
    if (!(arg instanceof authenticator_pb.AuthenticatorRequest)) {
        throw new Error('Expected argument of type authenticator.AuthenticatorRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_authenticator_AuthenticatorRequest(buffer_arg) {
    return authenticator_pb.AuthenticatorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_authenticator_AuthenticatorResponse(arg) {
    if (!(arg instanceof authenticator_pb.AuthenticatorResponse)) {
        throw new Error('Expected argument of type authenticator.AuthenticatorResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_authenticator_AuthenticatorResponse(buffer_arg) {
    return authenticator_pb.AuthenticatorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
// The greeting service definition.
var AuthenticatorService = exports.AuthenticatorService = {
    // Sends a greeting
    authenticate: {
        path: '/authenticator.Authenticator/authenticate',
        requestStream: false,
        responseStream: false,
        requestType: authenticator_pb.AuthenticatorRequest,
        responseType: authenticator_pb.AuthenticatorResponse,
        requestSerialize: serialize_authenticator_AuthenticatorRequest,
        requestDeserialize: deserialize_authenticator_AuthenticatorRequest,
        responseSerialize: serialize_authenticator_AuthenticatorResponse,
        responseDeserialize: deserialize_authenticator_AuthenticatorResponse,
    },
};
exports.AuthenticatorClient = grpc.makeGenericClientConstructor(AuthenticatorService);
//# sourceMappingURL=authenticator_grpc_pb.js.map