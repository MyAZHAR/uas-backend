// import Model employees
const Employee =require("../models/Employee");


// buat class employeesController
class employeesController {
  // buat fungsi
  async index(req, res) {
    const employees = await Employee.all();

    const data = {
      message : "Menampilkan data employees",
      data : employees
    }

    res.status(200).json(data);
  }

  async store(req, res) {

    const employees = await Employee.create(req,body);
    const data = {
      message : "Menambahkan data employees",
      data : employees
    }

    res.status(200).json(data);

  }


  async update(res, req) {
    const{id} = req.params;

    const employees = await Employee.find(id);

    if (employees) {
      const EmployeeUpdated = await Employee.update(id, req, res);
      const data = {
        message : "Mengubah data employees",
        data : EmployeeUpdated,
      };

      res.status(200).json(data);
    }

    else  {
      const data ={
        message : "Tidak ada data",
        
      };

      res.status(404).json(data);
    }
  }


  async destroy(req,res) {
    const {id } = req.params;

    const employees = await Employee.find(id);

    if (employees) {
      await employees.delete(id);
      const data = {
        message : "Menhapus data employees",
      }

      res.status(200).json(data);
    }

    else {
      const data ={
        message: "Tidak ada data"
      }

      res.status(404).json(data);
    }
  }

}

// membuat object employeesController
const object = new employeesController();

// export object employeesController
module.exports = object;
