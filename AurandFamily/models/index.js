if (!global.hasOwnProperty('db')) {
    
    var fs = require("fs");
    var path = require("path");
    
    var Sequelize = require('sequelize'), 
        sequelize = null;
    
    if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
        // the application is executed on Heroku ... use the postgres database
        //var match = process.env.HEROKU_POSTGRESQL_VIOLET_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
        
        sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_VIOLET_URL);
    } else {
        // the application is executed on the local machine ... use mysql
        sequelize = new Sequelize('aurand', 'postgres', 'password', { host: 'localhost', dialect: 'postgres' });
    }
    
    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
    };
    
    fs.readdirSync(__dirname).filter(function (file) 
        {
            return (file.indexOf(".") !== 0) && (file !== "index.js");
        }).forEach(function (file) 
        {
            var model = sequelize["import"](path.join(__dirname, file));
            global.db[model.name] = model;
        });

 

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */
}

module.exports = global.db;