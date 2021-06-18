/*Assignment_02 - Ugur Pekunsal - 301158229 - 6/18/2021*/

import express from "express";
const router = express.Router();
export default router;

// create a contacts controller instance
import {
  DisplayContactsListPage,
  DisplayEditPage,
} from "../controllers/contacts";

/* GET contacts-list page - with /contacts-list */
router.get("/", DisplayContactsListPage);

/* display edit/:id page - with /contacts-list/edit:id */
router.get("/edit/:id", DisplayEditPage);
