/*Assignment_02 - Ugur Pekunsal - 301158229 - 6/18/2021*/

import express, { Request, Response, NextFunction } from "express";

import Contact from "../models/contacts";

export function DisplayContactsListPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  Contact.find(function (err, contactsCollection) {
    if (err) {
      return console.log(err);
    }

    // render the contacts-list content partial page
    res.render("index", {
      title: "Contacts List",
      page: "contacts-list",
      contacts: contactsCollection,
    });
  });
}
