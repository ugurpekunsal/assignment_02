/*Assignment_02 - Ugur Pekunsal - 301158229 - 6/18/2021*/

import express from "express";

const router = express.Router();
export default router;

// create an index controller instance
import {
  DisplayAboutPage,
  DisplayContactPage,
  DisplayHomePage,
  DisplayLoginPage,
  DisplayProjectsPage,
  DisplayRegisterPage,
  DisplayServicesPage,
  ProcessLoginPage,
  ProcessLogoutPage,
  ProcessRegisterPage,
} from "../controllers/index";

/* GET home page. */
router.get("/", DisplayHomePage);

/* GET home page. */
router.get("/home", DisplayHomePage);

/* GET about page. */
router.get("/about", DisplayAboutPage);

/* GET projects page. */
router.get("/projects", DisplayProjectsPage);

/* GET services page. */
router.get("/services", DisplayServicesPage);

/* GET contact page. */
router.get("/contact", DisplayContactPage);

/* GET - display login page - with /login . */
router.get("/login", DisplayLoginPage);

/* POST - process login page when user clicks Login Button */
router.post("/login", ProcessLoginPage);

/* GET - display register page - with /register . */
router.get("/register", DisplayRegisterPage);

/* POST - process register page when user clicks register Button */
router.post("/register", ProcessRegisterPage);

/* GET - process the logout page - with /logout . */
router.get("/logout", ProcessLogoutPage);
