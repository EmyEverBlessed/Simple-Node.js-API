const fs = require('fs');
const path = require('path');

const logger = (req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  fs.appendFileSync(path.join(__dirname, '../../logs.txt'), log);
  console.log(log.trim());
  next();
};

module.exports = logger;