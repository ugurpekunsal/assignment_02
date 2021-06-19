/*Assignment_02 - Ugur Pekunsal - 301158229 - 6/18/2021*/

import express, { Request, Response, NextFunction } from "express";

import Contact from "../models/contact";

// import Util Functions
import { UserDisplayName } from "../util";

// Display Functions

//(R)ead in CRUD
export function DisplayContactListPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // db.contact.find()
  Contact.find((err, contactCollection) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.render("index", {
      title: "Contact List",
      page: "contact-list",
      contact: contactCollection,
      displayName: UserDisplayName(req),
    });
  });
}

// Display (E)dit page
export function DisplayEditPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.params.id;

  // pass the id to the db

  // db.contact.find({"_id": id})

  Contact.findById(id, {}, {}, (err, contactItemToEdit) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    // show the edit view
    res.render("index", {
      title: "Edit",
      page: "update",
      contact: contactItemToEdit,
      displayName: UserDisplayName(req),
    });
  });
}

// Display (C)reate page
export function DisplayAddPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // show the edit view
  res.render("index", {
    title: "Add",
    page: "update",
    contact: "",
    displayName: UserDisplayName(req),
  });
}

// Process Functions

// Process (E)dit page
export function ProcessEditPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.params.id;

  // instantiate a new Contact Item
  let updatedContactItem = new Contact({
    _id: id,
    FullName: req.body.FullName,
    EmailAddress: req.body.EmailAddress,
    ContactNumber: req.body.ContactNumber,
  });

  // find the contact item via db.contact.update({"_id":id}) and then update
  Contact.updateOne({ _id: id }, updatedContactItem, {}, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/contact-list");
  });
}

// Process (C)reate page
export function ProcessAddPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // instantiate a new Contact
  let newContact = new Contact({
    FullName: req.body.FullName,
    EmailAddress: req.body.EmailAddress,
    ContactNumber: req.body.ContactNumber,
  });

  // db.Contact.insert({contact data is here...})
  Contact.create(newContact, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/contact-list");
  });
}

// Process (D)elete page
export function ProcessDeletePage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.params.id;

  // db.contact.remove({"_id: id"})
  Contact.remove({ _id: id }, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/contact-list");
  });
}
