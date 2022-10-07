require('dotenv').config();
const mongoose = require('mongoose');
const modelPages = require('./model.Pages');

module.exports = new (class{
  constructor() {
    mongoose.connect(process.env.CONNSTR);
  }

  async getpages() {
    const strjson = JSON.stringify(await modelPages.find({}));
    return strjson;
  }
})();

