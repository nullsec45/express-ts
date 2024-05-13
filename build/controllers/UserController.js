"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.index = function (req, res) {
        return res.send("Ini adalah endpoint index users");
    };
    UserController.prototype.create = function (req, res) {
        return res.send(req.body);
    };
    UserController.prototype.show = function (req, res) {
        throw new Error("Method not implemented.");
    };
    UserController.prototype.update = function (req, res) {
        throw new Error("Method not implemented.");
    };
    UserController.prototype.delete = function (req, res) {
        throw new Error("Method not implemented.");
    };
    return UserController;
}());
exports.default = new UserController();
