// import database

// membuat class Employee
class Employee {
  static all() {
    return new Promise((resolve, reject) => {
      // lakukan query ke db untuk ambil data
      const sql = "SELECT * FROM employees";
      db.query(sql, (sql, results) => {
        resolve(results);
      });
    });
  }

  /**
  * TODO 1: Buat fungsi untuk insert data.
  * Method menerima parameter data yang akan diinsert.
  * Method mengembalikan data student yang baru diinsert.
  */
  static async create(Employee) {
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO employees SET ?";
      db.query(sql, Employee, (err, results) => {
        resolve(this.show(results.insertId));
      });
    });


    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO employees SET ?";
      db.query(sql, Employee, (err, results) => {
        resolve(this.show(result.insertId));
      });
    });
  }

  static show(id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM employees WHERE id = ${id} `;
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE employees SET ? WHERE id = ?";
      db.query(sql, [data.id], (err, results) => {
        resolve(results);
      });

    });

    const student = await this.find(id);
    return student;
  }

  static async delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM employees WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results)
      });
    });
  }
}

// export class Employee
module.exports = Employee;
