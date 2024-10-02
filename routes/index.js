var express = require('express');
var router = express.Router();
require('dotenv').config()


router.get("/movies" , (req,res)=>{
    fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_MOVIE}`)
    .then(response=>response.json())
    .then(data => {
        console.log(data.results.length)
        res.json({movies : data.results})})
    
})

module.exports = router;
