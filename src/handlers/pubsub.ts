import { IpubsubServer, pubsubService } from "../proto/pubsub/pubsub_grpc_pb";
import { PublishRequest, PublishResponse } from "../proto/pubsub/pubsub_pb";
import { randomBytes } from 'crypto';
import * as grpc from 'grpc';
import { ServiceError } from "../utils/ServiceError";

class PubSubHandler implements IpubsubServer {

    /** Unary request, unary response ; similar to api requests; takes in data and returns a json response*/
    subscribe = (call: grpc.ServerUnaryCall<PublishRequest>, callback: grpc.sendUnaryData<PublishResponse>) => {
        const reply: PublishResponse = new PublishResponse();

        // do something here
        console.log(call.request.getData(), call.request.getSubject());
        reply.setSubject("Shanur");
        reply.setData("Yo setting some data here and sending it back");
        callback(null, reply);
    }

    /** stream request, unary response, like a file upload; you send a binary payload in request and receive a json response
     * Half duplex stream
     * waits for stream to finish before sending back the response
    */
    subscribeStreamRequest = (call: grpc.ServerReadableStream<PublishRequest>, callback: grpc.sendUnaryData<PublishResponse>) => {
        console.log('sayHelloStreamRequest:', call.getPeer());

        const data: string[] = [];
        call.on('data', (req: PublishRequest) => {
            data.push(`${req.getData()} - ${randomBytes(5).toString('hex')}`);
        }).on('end', () => {
            const res: PublishResponse = new PublishResponse();
            res.setData(data.join('\n'));

            callback(null, res);
        }).on('error', (err: Error) => {
            callback(new ServiceError(grpc.status.INTERNAL, err.message), null);
        });
    }

    /** Request file; File download for example 
     * Half duplex stream
    */
    subscribeStreamResponse = (call: grpc.ServerWritableStream<PublishRequest>) => {
        console.log('sayHelloStreamResponse:', call.request.toObject());

        const name: string = call.request.getSubject();

        for (const text of Array(10).fill('').map(() => randomBytes(5).toString('hex'))) {
            const res: PublishResponse = new PublishResponse();
            res.setData(`${name} - ${text}`);
            call.write(res);
        }
        call.end();
    }

    /** Chat server for example where both sides are communication over a full duplex stream */
    subscribeBidiStream = (call: grpc.ServerDuplexStream<PublishRequest, PublishResponse>) => {
        console.log('sayHelloStream:', call.getPeer());

        call.on('data', (req: PublishRequest) => {
            const res: PublishResponse = new PublishResponse();
            res.setSubject(`${req.getSubject()} - ${randomBytes(5).toString('hex')}`);
            res.setData(`${req.getData()} - ${randomBytes(5).toString('hex')}`);
            call.write(res);
        }).on('end', () => {
            call.end();
        }).on('error', (err: Error) => {
            console.log('sayHelloStream:', err);
        });
    }
}

export const pubsub = {
    service: pubsubService,                // Service interface
    handler: new PubSubHandler(),          // Service interface definitions
};