"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const contacts_1 = require("../controllers/contacts");
router.get("/", contacts_1.DisplayContactsListPage);
router.get("/edit/:id", contacts_1.DisplayEditPage);
//# sourceMappingURL=contacts.js.map