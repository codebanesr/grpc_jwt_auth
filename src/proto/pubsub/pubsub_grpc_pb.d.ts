// package: pubsub
// file: pubsub.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as pubsub_pb from "./pubsub_pb";

interface IpubsubService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    subscribe: IpubsubService_Isubscribe;
    subscribeStreamRequest: IpubsubService_IsubscribeStreamRequest;
    subscribeStreamResponse: IpubsubService_IsubscribeStreamResponse;
    subscribeBidiStream: IpubsubService_IsubscribeBidiStream;
}

interface IpubsubService_Isubscribe extends grpc.MethodDefinition<pubsub_pb.PublishRequest, pubsub_pb.PublishResponse> {
    path: string; // "/pubsub.pubsub/subscribe"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<pubsub_pb.PublishRequest>;
    requestDeserialize: grpc.deserialize<pubsub_pb.PublishRequest>;
    responseSerialize: grpc.serialize<pubsub_pb.PublishResponse>;
    responseDeserialize: grpc.deserialize<pubsub_pb.PublishResponse>;
}
interface IpubsubService_IsubscribeStreamRequest extends grpc.MethodDefinition<pubsub_pb.PublishRequest, pubsub_pb.PublishResponse> {
    path: string; // "/pubsub.pubsub/subscribeStreamRequest"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<pubsub_pb.PublishRequest>;
    requestDeserialize: grpc.deserialize<pubsub_pb.PublishRequest>;
    responseSerialize: grpc.serialize<pubsub_pb.PublishResponse>;
    responseDeserialize: grpc.deserialize<pubsub_pb.PublishResponse>;
}
interface IpubsubService_IsubscribeStreamResponse extends grpc.MethodDefinition<pubsub_pb.PublishRequest, pubsub_pb.PublishResponse> {
    path: string; // "/pubsub.pubsub/subscribeStreamResponse"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<pubsub_pb.PublishRequest>;
    requestDeserialize: grpc.deserialize<pubsub_pb.PublishRequest>;
    responseSerialize: grpc.serialize<pubsub_pb.PublishResponse>;
    responseDeserialize: grpc.deserialize<pubsub_pb.PublishResponse>;
}
interface IpubsubService_IsubscribeBidiStream extends grpc.MethodDefinition<pubsub_pb.PublishRequest, pubsub_pb.PublishResponse> {
    path: string; // "/pubsub.pubsub/subscribeBidiStream"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<pubsub_pb.PublishRequest>;
    requestDeserialize: grpc.deserialize<pubsub_pb.PublishRequest>;
    responseSerialize: grpc.serialize<pubsub_pb.PublishResponse>;
    responseDeserialize: grpc.deserialize<pubsub_pb.PublishResponse>;
}

export const pubsubService: IpubsubService;

export interface IpubsubServer {
    subscribe: grpc.handleUnaryCall<pubsub_pb.PublishRequest, pubsub_pb.PublishResponse>;
    subscribeStreamRequest: grpc.handleClientStreamingCall<pubsub_pb.PublishRequest, pubsub_pb.PublishResponse>;
    subscribeStreamResponse: grpc.handleServerStreamingCall<pubsub_pb.PublishRequest, pubsub_pb.PublishResponse>;
    subscribeBidiStream: grpc.handleBidiStreamingCall<pubsub_pb.PublishRequest, pubsub_pb.PublishResponse>;
}

export interface IpubsubClient {
    subscribe(request: pubsub_pb.PublishRequest, callback: (error: grpc.ServiceError | null, response: pubsub_pb.PublishResponse) => void): grpc.ClientUnaryCall;
    subscribe(request: pubsub_pb.PublishRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pubsub_pb.PublishResponse) => void): grpc.ClientUnaryCall;
    subscribe(request: pubsub_pb.PublishRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pubsub_pb.PublishResponse) => void): grpc.ClientUnaryCall;
    subscribeStreamRequest(callback: (error: grpc.ServiceError | null, response: pubsub_pb.PublishResponse) => void): grpc.ClientWritableStream<pubsub_pb.PublishRequest>;
    subscribeStreamRequest(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pubsub_pb.PublishResponse) => void): grpc.ClientWritableStream<pubsub_pb.PublishRequest>;
    subscribeStreamRequest(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pubsub_pb.PublishResponse) => void): grpc.ClientWritableStream<pubsub_pb.PublishRequest>;
    subscribeStreamRequest(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pubsub_pb.PublishResponse) => void): grpc.ClientWritableStream<pubsub_pb.PublishRequest>;
    subscribeStreamResponse(request: pubsub_pb.PublishRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pubsub_pb.PublishResponse>;
    subscribeStreamResponse(request: pubsub_pb.PublishRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pubsub_pb.PublishResponse>;
    subscribeBidiStream(): grpc.ClientDuplexStream<pubsub_pb.PublishRequest, pubsub_pb.PublishResponse>;
    subscribeBidiStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pubsub_pb.PublishRequest, pubsub_pb.PublishResponse>;
    subscribeBidiStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pubsub_pb.PublishRequest, pubsub_pb.PublishResponse>;
}

export class pubsubClient extends grpc.Client implements IpubsubClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public subscribe(request: pubsub_pb.PublishRequest, callback: (error: grpc.ServiceError | null, response: pubsub_pb.PublishResponse) => void): grpc.ClientUnaryCall;
    public subscribe(request: pubsub_pb.PublishRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pubsub_pb.PublishResponse) => void): grpc.ClientUnaryCall;
    public subscribe(request: pubsub_pb.PublishRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pubsub_pb.PublishResponse) => void): grpc.ClientUnaryCall;
    public subscribeStreamRequest(callback: (error: grpc.ServiceError | null, response: pubsub_pb.PublishResponse) => void): grpc.ClientWritableStream<pubsub_pb.PublishRequest>;
    public subscribeStreamRequest(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pubsub_pb.PublishResponse) => void): grpc.ClientWritableStream<pubsub_pb.PublishRequest>;
    public subscribeStreamRequest(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pubsub_pb.PublishResponse) => void): grpc.ClientWritableStream<pubsub_pb.PublishRequest>;
    public subscribeStreamRequest(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pubsub_pb.PublishResponse) => void): grpc.ClientWritableStream<pubsub_pb.PublishRequest>;
    public subscribeStreamResponse(request: pubsub_pb.PublishRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pubsub_pb.PublishResponse>;
    public subscribeStreamResponse(request: pubsub_pb.PublishRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pubsub_pb.PublishResponse>;
    public subscribeBidiStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pubsub_pb.PublishRequest, pubsub_pb.PublishResponse>;
    public subscribeBidiStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pubsub_pb.PublishRequest, pubsub_pb.PublishResponse>;
}
