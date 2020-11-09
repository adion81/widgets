const mongoose = require('mongoose'),
    uri = "widget-demo";

mongoose.connect(`mongodb://localhost/${uri}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("You're now in the mainframe . . ."))
    .catch((err) => console.log("MELTDOWN! MELTDOWN! MELTDOWN!",err))