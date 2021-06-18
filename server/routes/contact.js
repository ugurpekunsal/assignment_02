"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const contact_1 = require("../controllers/contact");
router.get("/", contact_1.DisplayContactListPage);
router.get("/add", contact_1.DisplayAddPage);
router.get("/edit/:id", contact_1.DisplayEditPage);
router.post("/add", contact_1.ProcessAddPage);
router.post("/edit/:id", contact_1.ProcessEditPage);
router.get("/delete/:id", contact_1.ProcessDeletePage);
//# sourceMappingURL=contact.js.map