const TimesController = require("../controllers/times.controllers");

module.exports = (app) =>{
    app.get("/api/times", TimesController.findAllTime)
    app.get("/api/times/:id", TimesController.findOneTime)
    app.post("/api/times", TimesController.createNewTime)
    app.put("/api/times/:id", TimesController.updateOneTime)
    app.delete("/api/times/:id", TimesController.deleteTime)
    app.delete("/api/times", TimesController.deleteAllTime)
}