const Time = require("../models/times.models")

module.exports.findAllTime = (req, res) => {
    Time.find()
        .then(allTimes =>{
            res.json({results: allTimes})
        })
        .catch(err =>{
            res.json(err)
        })
}

module.exports.findOneTime = (req, res) => {
    Time.findOne({_id: req.params.id})
        .then(time =>{
            res.json({results: time})
        })
        .catch(err =>{
            res.json(err)
        })
}

module.exports.createNewTime = (req, res) => {
    Time.create(req.body)
        .then(time =>{
            res.json({results: time})
        })
        .catch(err =>{
            res.json(err)
        })
}

module.exports.updateOneTime = (req, res) => {
    Time.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true}
    )
        .then(updateTime =>{
            res.json({results: updateTime})
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.deleteTime = (req, res) => {
    Time.deleteOne({_id: req.params.id})
        .then(time =>{
            res.json({results: time})
        })
        .catch(err =>{
            res.json(err)
        })
}

module.exports.deleteAllTime = (req, res) => {
    Time.deleteMany()
        .then(time =>{
            res.json({results: time})
        })
        .catch(err =>{
            res.json(err)
        })
}

