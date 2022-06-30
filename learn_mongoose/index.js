const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/movieApp");
    const movieSchema = new mongoose.Schema({
        title: String,
        price: Number
    });
    const movieModel = mongoose.model('movies', movieSchema);
    const data = new movieModel({title:"fata", price: 10000});
    const result  = await data.save();
    console.log(result);
}
main(); 