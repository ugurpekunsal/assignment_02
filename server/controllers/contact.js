"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayContactListPage = void 0;
const contact_1 = __importDefault(require("../models/contact"));
const util_1 = require("../util");
function DisplayContactListPage(req, res, next) {
    contact_1.default.find((err, contactCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render("index", {
            title: "Contact List",
            page: "contact-list",
            contact: contactCollection,
            displayName: util_1.UserDisplayName(req),
        });
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contact_1.default.findById(id, {}, {}, (err, contactItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render("index", {
            title: "Edit",
            page: "update",
            contact: contactItemToEdit,
            displayName: util_1.UserDisplayName(req),
        });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render("index", {
        title: "Add",
        page: "update",
        contact: "",
        displayName: util_1.UserDisplayName(req),
    });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedContactItem = new contact_1.default({
        _id: id,
        name: req.body.name,
        brand: req.body.brand,
        category: req.body.category,
        colour: req.body.colour,
        size: req.body.size,
        price: req.body.price,
    });
    contact_1.default.updateOne({ _id: id }, updatedContactItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect("/contact-list");
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newContact = new contact_1.default({
        name: req.body.name,
        brand: req.body.brand,
        category: req.body.category,
        colour: req.body.colour,
        size: req.body.size,
        price: req.body.price,
    });
    contact_1.default.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect("/contact-list");
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contact_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect("/contact-list");
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contact.js.map