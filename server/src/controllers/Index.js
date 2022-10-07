const fs = require('fs');
const path = require('path');
const dataBase = require('../models/DataBase');
const auto = require('../models/Auto');

module.exports = new (class{
  init(req, res) {
    res.sendFile(path.join(__dirname, '../../..', 'client', 'build', 'index.html'));
  }

  async getimage(req, res) {
    const {link, pageId} = req.body;
    const dirImage = path.join(__dirname, "/..", "..", "public", "prints", pageId+".png");
    fs.access(dirImage, fs.constants.F_OK, async err => {
      if(err) await auto.screenshot(dirImage);
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


