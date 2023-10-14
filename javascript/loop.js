for
while
do while
for of >> Array
for in >> Object

////////////////////////////////////////////////////////////////
> help to generate the series as well as iterate over the array

for(let i =0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

for(let i =0;i<10;i+=2){
    console.log(i)
}
0
2
4
6
8

let city = ['London', 'Helsinki', 'Boston', 'Mumbai', 'Innsburg', 'Amsterdam']
for(i=0;i<city.length;i++){
    console.log(city[i])
}
London
Helsinki
Boston
Mumbai
Innsburg
Amsterdam
/////////////////
var i = 10;
while(i<5){
    console.log(i);
    i++
}

var i = 10
do{
    console.log(i);
    i++ 
}
while(i<5)


let city = ['London', 'Helsinki', 'Boston', 'Mumbai']
for(mycity of city){
    console.log(mycity)
}