const mongoose = require('mongoose'),
          path = require('path'),
            fs = require('fs'),
        db_uri = 'mongodb://localhost:27017/cakes',
   models_path = path.join(__dirname, './../models');

mongoose.connect(db_uri, { useNewUrlParser: true });

fs.readdirSync(models_path).forEach(function(file) {
    if(file.endsWith('.js')) {
        require(models_path + '/' + file);
    }
});