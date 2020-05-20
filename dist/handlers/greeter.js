"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greeter_pb_1 = require("../proto/greeter/greeter_pb");
const greeter_grpc_pb_1 = require("../proto/greeter/greeter_grpc_pb");
class GreeterHandler {
    constructor() {
        /**
         * Greet the user nicely
         * @param call
         * @param callback
         */
        this.sayHello = (call, callback) => {
            const reply = new greeter_pb_1.HelloResponse();
            reply.setMessage(`Hello, ${call.request.getName()}`);
            callback(null, reply);
        };
    }
}
exports.default = {
    service: greeter_grpc_pb_1.GreeterService,
    handler: new GreeterHandler(),
};
//# sourceMappingURL=greeter.js.map