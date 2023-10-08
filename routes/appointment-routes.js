const express = require("express");

// karena pool sudah tidak terpakai bisa di hapus saja
// const { pool } = require("../db/database");
const appointmentController = require("../controllers/appointment-controllers");

const appointmentRoute = express.Router();

appointmentRoute.get("/appointment", appointmentController.getAllAppointment);
appointmentRoute.post("/appointment", appointmentController.createAppointment);

module.exports = { appointmentRoute };
