/*Assignment_02 - Ugur Pekunsal - 301158229 - 6/18/2021*/

import express from "express";
const router = express.Router();
export default router;

// instantiate an object of type contact controller
import {
  DisplayAddPage,
  DisplayContactListPage,
  DisplayEditPage,
  ProcessAddPage,
  ProcessDeletePage,
  ProcessEditPage,
} from "../controllers/contact";

// import Util functions
import { AuthGuard } from "../util/index";

/* GET /clothing-list page. */
router.get("/", AuthGuard, DisplayContactListPage);

/* GET - display /clothing-list/add page. */
router.get("/add", AuthGuard, DisplayAddPage);

/* GET - display /clothing-list/edit/:id page. */
router.get("/edit/:id", AuthGuard, DisplayEditPage);

/* POST - process /clothing-list/add page */
router.post("/add", AuthGuard, ProcessAddPage);

/* POST - process /clothing-list/edit/:id page */
router.post("/edit/:id", AuthGuard, ProcessEditPage);

/* GET - process /clothing-list/delete/:id */
router.get("/delete/:id", AuthGuard, ProcessDeletePage);
