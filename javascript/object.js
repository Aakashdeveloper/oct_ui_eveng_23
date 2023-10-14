var a = [] //array
var b = {} //object

var moviename = "Jab We Met";
var movieRating = 4.7
var movInd = "Bollywood";


var moviename1 = "Avengers";
var movieRating1 = 4.3
var movInd1 = "Hollywood";

var movie = {
    name:'Jab We Met',
    rating:4.7,
    ind:"Bollywood"
}
undefined
movie.name
'Jab We Met'
movie.rating
4.7
movie.rating = 4.7
4.7
movie
{name: 'Jab We Met', rating: 4.7, ind: 'Bollywood'}
movie.type="Romantic"
'Romantic'
movie
{name: 'Jab We Met', rating: 4.7, ind: 'Bollywood', type: 'Romantic'}
delete movie.ind
true
movie['name']
'Jab We Met'
movie['rating']
4.7

var movie = {
    name:'Jab We Met',
    rating:4.7,
    ind:"Bollywood"
}

for(key in movie){
    console.log(key)
}

for(key in movie){
    console.log(movie[key])
}

var movie = {
    name:'Jab We Met',
    rating:4.7,
    ind:"Bollywood"
}

for(key in movie){
    console.log(key)
}
VM113:8 name
VM113:8 rating
VM113:8 ind
undefined
for(key in movie){
    console.log(movie[key])
}
VM117:2 Jab We Met
VM117:2 4.7
VM117:2 Bollywood
undefined