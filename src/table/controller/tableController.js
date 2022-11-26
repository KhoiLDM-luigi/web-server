const path = require('path');

module.exports = (req, res) => {
    res.render("tables", {title: "table"});
};