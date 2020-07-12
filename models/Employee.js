const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  middleName: { type: String },
  employeeID: { type: Number, required: true },
  employeeType: { type: String, required: true },
  password: { type: String, required: true },
  dateOfHire: { type: Date, required: true },
  email: { type: String, required: true },
  payRate: { type: Date, required: true },
  carNumber: { type: String },
  assignments: [],
});

module.exports = Employees = mongoose.model("employee", EmployeeSchema);
