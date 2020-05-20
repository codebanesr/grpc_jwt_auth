// package: authenticator
// file: authenticator.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AuthenticatorRequest extends jspb.Message { 
    getHeader(): string;
    setHeader(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticatorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticatorRequest): AuthenticatorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticatorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticatorRequest;
    static deserializeBinaryFromReader(message: AuthenticatorRequest, reader: jspb.BinaryReader): AuthenticatorRequest;
}

export namespace AuthenticatorRequest {
    export type AsObject = {
        header: string,
    }
}

export class AuthenticatorResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): void;

    getName(): string;
    setName(value: string): void;

    getIat(): string;
    setIat(value: string): void;

    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticatorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticatorResponse): AuthenticatorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticatorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticatorResponse;
    static deserializeBinaryFromReader(message: AuthenticatorResponse, reader: jspb.BinaryReader): AuthenticatorResponse;
}

export namespace AuthenticatorResponse {
    export type AsObject = {
        message: string,
        name: string,
        iat: string,
        Id: string,
    }
}
