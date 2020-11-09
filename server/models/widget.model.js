const mongoose = require('mongoose');


const WidgetSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true,"Title is required"],
        minlength: [5,"Title must be at least 5 characcters" ]
    },
    cogs : {
        type: Number,
        required:[true,"Number of cogs is required"],
        max:[10,"Too many cogs."]
    }
},{timestamps:true})

const Widget = mongoose.model("Widget",WidgetSchema);

module.exports = Widget;