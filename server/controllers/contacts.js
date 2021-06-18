"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactsListPage = void 0;
const contacts_1 = __importDefault(require("../models/contacts"));
function DisplayContactsListPage(req, res, next) {
    contacts_1.default.find(function (err, contactsCollection) {
        if (err) {
            return console.log(err);
        }
        res.render("index", {
            title: "Contacts List",
            page: "contacts-list",
            contacts: contactsCollection,
        });
    });
}
exports.DisplayContactsListPage = DisplayContactsListPage;
//# sourceMappingURL=contacts.js.map