const mongoose = require('mongoose');


const csvSchema = new mongoose.Schema({

Mailsubject:{
    type:String
},
Mailbody:{
    type:String
},
Recepients:{
    type:String
},
Frequency:{
    type:String
},
Custom:{
    type:String
},
Startingdate:{
    type:String
},
});

module.exports = mongoose.model('mailing_details', csvSchema);