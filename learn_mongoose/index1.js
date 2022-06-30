//crud in mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/movieApp");

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});


const saveInDB = async ()=>{
    
    const Movie = mongoose.model('movies', movieSchema);
    const data = new Movie({
        title:"uyta",
        year: 2036,
        score: 5.8,
        rating: "k"
    });
    const result  = await data.save();
    console.log(result);
}
//saveInDB();

const updateInDB = async ()=>{
    
    const Movie = mongoose.model('movies', movieSchema);
    const data = await Movie.updateOne(
        {title: "uyta"},
        {$set:{score:10}}
    )
    console.log(data);
}

// updateInDB();

const deleteInDB = async ()=>{
    
    const Movie = mongoose.model('movies', movieSchema);
    const data = await Movie.deleteOne(
        {title: "uyta"}
    )
    console.log(data);
}

//deleteInDB();

const findInDB = async ()=>{
    
    const Movie = mongoose.model('movies', movieSchema);

    const data = await Movie.find();//this shows all the record of document in terminal
    //const data = await Movie.find({title:"jeju"});//this shows exact details of title jeju
    console.log(data);
}

findInDB();


