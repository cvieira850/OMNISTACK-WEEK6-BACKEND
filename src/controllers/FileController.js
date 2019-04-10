const File = require("../models/Box");

class FileController {
  async store(req, res) {
    // Criar um arquivo
    console.log(req.file);

    return res.send("OK");
  }
}

module.exports = new FileController();
