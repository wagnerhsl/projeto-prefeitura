const fs = require('fs');
const path = require('path');
const dataBase = require('../models/DataBase');
const auto = require('../models/Auto');
const crypto = require('../models/Crypto');

module.exports = new (class{
  init(req, res) {
    res.sendFile(path.join(__dirname, '../../..', 'client', 'build', 'index.html'));
  }

  async getimage(req, res) {
    const {link, name} = req.body;
    const newNameFile = (name+link).replace(/[^\w\-]+/g, new String('')).slice(1, 25)+".png";

    const dirImage = path.join(__dirname, "/..", "..", "public", "prints", newNameFile);
    fs.access(dirImage, fs.constants.F_OK, async err => {
      if(err) await auto.screenshot(dirImage, link);
      console.log(err ? "image não existe!" : "image existe!!");
    });
    res.sendFile(dirImage);
  }

  async getpages(req, res) {
    const pages = await dataBase.getpages();
    res.end(pages);
  }

  get(req, res) {
    console.log("Working");
  }
  
})();


