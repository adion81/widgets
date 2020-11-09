const Widget = require('../models/widget.model'),
    mongoose = require('mongoose');

module.exports = {
    index : (req,res) => {
        Widget.find()
            .then( data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    create : (req,res) => {

        Widget.create(req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    }
}