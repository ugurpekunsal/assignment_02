/*Assignment_02 - Ugur Pekunsal - 301158229 - 6/18/2021*/

import express, { Request, Response, NextFunction } from "express";

import passport from "passport";

// create an instance of the User model
import User from "../models/user";

export function DisplayHomePage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Home", page: "home" });
}

export function DisplayAboutPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "About Me", page: "about" });
}

export function DisplayProjectsPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "My Projects", page: "projects" });
}

export function DisplayServicesPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "My Services", page: "services" });
}

export function DisplayContactPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Contact Me", page: "contact" });
}

export function DisplayLoginPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.user) {
    res.render("index", {
      title: "Login",
      page: "login",
      messages: req.flash("loginMessage"),
    });
  }
}

export function ProcessLoginPage(
  req: Request,
  res: Response,
  next: NextFunction
) {}

export function DisplayRegisterPage(
  req: Request,
  res: Response,
  next: NextFunction
) {}

export function ProcessRegisterPage(
  req: Request,
  res: Response,
  next: NextFunction
) {}

export function ProcessLogoutPage(
  req: Request,
  res: Response,
  next: NextFunction
) {}
