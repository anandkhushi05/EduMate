const mongoose = require('mongoose');

const url = `mongodb+srv://anandkhushi05:12345@cluster0.hbsptiu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))