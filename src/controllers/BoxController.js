const Box = require("../models/Box");

class BoxCOntroller {
  async store(req, res) {
    const box = await Box.create(req.body);

    return res.json(box);
  }
}

module.exports = new BoxCOntroller();
