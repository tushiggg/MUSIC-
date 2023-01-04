const mongoose = require(`mongoose`);

const url = "mongodb+srv://tushig5555:Tushig2005@cluster0.cpabp0j.mongodb.net/?retryWrites=true&w=majority"

const connect = async () => { 
    try { 
        await mongoose.connect(url);
        console.log("successfully")
    }
    catch (error) { 
        console.log(error)
    }
}

module.exports = connect;

