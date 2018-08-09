const cakes = require("../controllers/cakes.js");

module.exports = function(app){
    app.get("/cake", cakes.index);
    app.get("/cake/:_id", cakes.getOne);
    app.post("/cake", cakes.create);
    app.post("/rate/:_id", cakes.rate);
    app.put("/cake/:_id", cakes.update);
    app.delete("/cake/:_id", cakes.delete);
}