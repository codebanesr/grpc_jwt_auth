"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const authenticator_pb_1 = require("../proto/authenticator/authenticator_pb");
const authenticator_grpc_pb_1 = require("../proto/authenticator/authenticator_grpc_pb");
class AuthenticatorHandler {
    constructor() {
        /**
         * Greet the user nicely
         * @param call
         * @param callback
         */
        this.authenticate = (call, callback) => __awaiter(this, void 0, void 0, function* () {
            const reply = new authenticator_pb_1.AuthenticatorResponse();
            console.log(call);
            reply.setMessage("yo this is some message for you");
            reply.setId("12345");
            reply.setIat("IAT123");
            reply.setName("shanur");
            callback(null, reply);
        });
        this.decode = (token) => __awaiter(this, void 0, void 0, function* () {
            var decoded = jwt.verify(token, 'shhhhh');
            console.log(decoded);
        });
    }
}
exports.default = {
    service: authenticator_grpc_pb_1.AuthenticatorService,
    handler: new AuthenticatorHandler(),
};
//# sourceMappingURL=authenticator.js.map