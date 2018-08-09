const express = require('express'),
           bp = require('body-parser'),
          app = express(),
         port = 1701;

app.use(express.static(__dirname + "/client/keiki/dist/keiki"));
app.use(bp.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});