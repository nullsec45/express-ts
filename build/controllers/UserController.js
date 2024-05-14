"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = [
    { id: 1, name: "Rama" },
    { id: 2, name: "Fajar" },
    { id: 3, name: "Fadhillah" }
];
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.index = function (req, res) {
        return res.send(data);
    };
    UserController.prototype.create = function (req, res) {
        var _a = req.body, id = _a.id, name = _a.name;
        data.push({ id: id, name: name });
        return res.send({
            message: "Created Success",
            data: data
        });
    };
    UserController.prototype.show = function (req, res) {
        var id = req.params.id;
        var person = data.find(function (item) { return item.id == id; });
        if (!person) {
            return res.send({
                message: "Person id ".concat(id, " not found"),
                data: []
            });
        }
        return res.send(person);
    };
    UserController.prototype.update = function (req, res) {
        var id = req.params.id;
        var name = req.body.name;
        var person = data.find(function (item) { return item.id == id; });
        if (!person) {
            return res.send({
                message: "Person id ".concat(id, " not found"),
            });
        }
        person.name = name;
        return res.send({
            message: "Updated Success",
            person: person
        });
    };
    UserController.prototype.delete = function (req, res) {
        var id = req.params.id;
        var person = data.find(function (item) { return item.id == id; });
        if (!person) {
            return res.send({
                message: "Person id ".concat(id, " not found"),
            });
        }
        var user = data.find(function (user) { return user.id === Number(id); });
        // person=data.filter(item => item.id !== id);
        data.splice(data.indexOf(user), 1);
        return res.send({
            message: "Deleted Success",
            data: data
        });
    };
    return UserController;
}());
exports.default = new UserController();
