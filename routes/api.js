// import EmployeeController
const EmployeeController = require("../controllers/EmloyeeController");
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello HRD API Express");
});

// Membuat routing employee
router.get("/empiloyees", employeeController.index);
router.post("/employees", employeeController.store);
router.put("/employees/:id", employeeController.update);
router.delete("/employees/:id", employeeController.destroy);
router.get("/employee/:id", employeeController.show);

// export router
module.exports = router;
