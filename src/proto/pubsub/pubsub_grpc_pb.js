// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pubsub_pb = require('./pubsub_pb.js');

function serialize_pubsub_PublishRequest(arg) {
  if (!(arg instanceof pubsub_pb.PublishRequest)) {
    throw new Error('Expected argument of type pubsub.PublishRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pubsub_PublishRequest(buffer_arg) {
  return pubsub_pb.PublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pubsub_PublishResponse(arg) {
  if (!(arg instanceof pubsub_pb.PublishResponse)) {
    throw new Error('Expected argument of type pubsub.PublishResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pubsub_PublishResponse(buffer_arg) {
  return pubsub_pb.PublishResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var pubsubService = exports.pubsubService = {
  subscribe: {
    path: '/pubsub.pubsub/subscribe',
    requestStream: false,
    responseStream: false,
    requestType: pubsub_pb.PublishRequest,
    responseType: pubsub_pb.PublishResponse,
    requestSerialize: serialize_pubsub_PublishRequest,
    requestDeserialize: deserialize_pubsub_PublishRequest,
    responseSerialize: serialize_pubsub_PublishResponse,
    responseDeserialize: deserialize_pubsub_PublishResponse,
  },
  subscribeStreamRequest: {
    path: '/pubsub.pubsub/subscribeStreamRequest',
    requestStream: true,
    responseStream: false,
    requestType: pubsub_pb.PublishRequest,
    responseType: pubsub_pb.PublishResponse,
    requestSerialize: serialize_pubsub_PublishRequest,
    requestDeserialize: deserialize_pubsub_PublishRequest,
    responseSerialize: serialize_pubsub_PublishResponse,
    responseDeserialize: deserialize_pubsub_PublishResponse,
  },
  subscribeStreamResponse: {
    path: '/pubsub.pubsub/subscribeStreamResponse',
    requestStream: false,
    responseStream: true,
    requestType: pubsub_pb.PublishRequest,
    responseType: pubsub_pb.PublishResponse,
    requestSerialize: serialize_pubsub_PublishRequest,
    requestDeserialize: deserialize_pubsub_PublishRequest,
    responseSerialize: serialize_pubsub_PublishResponse,
    responseDeserialize: deserialize_pubsub_PublishResponse,
  },
  subscribeBidiStream: {
    path: '/pubsub.pubsub/subscribeBidiStream',
    requestStream: true,
    responseStream: true,
    requestType: pubsub_pb.PublishRequest,
    responseType: pubsub_pb.PublishResponse,
    requestSerialize: serialize_pubsub_PublishRequest,
    requestDeserialize: deserialize_pubsub_PublishRequest,
    responseSerialize: serialize_pubsub_PublishResponse,
    responseDeserialize: deserialize_pubsub_PublishResponse,
  },
};

exports.pubsubClient = grpc.makeGenericClientConstructor(pubsubService);
