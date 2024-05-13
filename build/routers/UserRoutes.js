"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// Controllers
var UserController_1 = __importDefault(require("../controllers/UserController"));
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    UserRoutes.prototype.routes = function () {
        this.router.get("/", UserController_1.default.index);
        this.router.post("/", UserController_1.default.create);
    };
    return UserRoutes;
}());
exports.default = new UserRoutes().router;
