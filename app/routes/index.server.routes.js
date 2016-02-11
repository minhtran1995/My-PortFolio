module.exports = function(app){
    var index = require('../controllers/index.server.controller.js');
    app.get('/', index.render);
    
    var contact = require('../controllers/contact.server.controller.js');
    app.get('/contact', contact.render);
};