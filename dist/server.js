"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
require("dotenv/config");
const grpc = __importStar(require("grpc"));
const proto_1 = require("./proto");
const greeter_1 = __importDefault(require("./handlers/greeter"));
const authenticator_1 = __importDefault(require("./handlers/authenticator"));
proto_1.protoIndex();
const port = process.env.PORT || 50051;
exports.startServer = () => {
    // create a new gRPC server
    const server = new grpc.Server();
    // register all the handler here...
    server.addService(greeter_1.default.service, greeter_1.default.handler);
    server.addService(authenticator_1.default.service, authenticator_1.default.handler);
    // define the host/port for server
    server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err != null) {
            return console.error(err);
        }
        console.log(`gRPC listening on ${port}`);
    });
    // start the gRPC server
    server.start();
};
exports.startServer();
//# sourceMappingURL=server.js.map