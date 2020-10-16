const dbconnect = () => {

    //dB connection//////////
    const mongoose = require("mongoose");
    const uri = "mongodb+srv://javiAdmin:6XJtqXc89xGxRGw7@cluster0.acx3v.mongodb.net/ClinicaDental?retryWrites=true&w=majority";

    mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(() => {
            console.log('CONNECTION TO mDB ESTABLISHED');
        })
        .catch(error => console.log('Error connecting to the dB' + error));
    ////////////////////////

}

module.exports = dbconnect;