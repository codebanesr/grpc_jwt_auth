// package: pubsub
// file: pubsub.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PublishRequest extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): void;

    getData(): string;
    setData(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PublishRequest): PublishRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishRequest;
    static deserializeBinaryFromReader(message: PublishRequest, reader: jspb.BinaryReader): PublishRequest;
}

export namespace PublishRequest {
    export type AsObject = {
        subject: string,
        data: string,
    }
}

export class PublishResponse extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): void;

    getData(): string;
    setData(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PublishResponse): PublishResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishResponse;
    static deserializeBinaryFromReader(message: PublishResponse, reader: jspb.BinaryReader): PublishResponse;
}

export namespace PublishResponse {
    export type AsObject = {
        subject: string,
        data: string,
    }
}
