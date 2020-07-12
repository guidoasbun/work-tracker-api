const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Employees = require("../../models/Employee");

//POST api/employees
//Register an Employee
//Private
router.get(
  "/",
  [
    auth,
    [
      check("firstName", "First Name is required").not().isEmpty(),
      check("lastName", "Last Name is required").not().isEmpty(),
      check("employeeID", "Employee ID is required").not().isEmpty,
      check("employeeType", "Employee type is required").not().isEmpty,
      check(
        "password",
        "Please enter a password with 6 or more characters"
      ).isLength({ min: 6 }),
      check("dateOfHire", "Enter a valid date of hire").not().isEmpty(),
      check("email", "Please include a valid email").isEmail().isEmpty(),
      check("payRate", "Enter a valid pay rate").not().isEmpty(),
    ],
  ],
  async (req, res) => {}
);

module.exports = router;
