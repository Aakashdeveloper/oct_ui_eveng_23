var a = 10;
var b = 20;
a+b
30

keyword nameoffunction(parameter){
    return output
}

function add(a,b){
    return a+b
}


add(1,2)
3
add(4,8)
12
add(4242,8324)
12566
add("hii","test")
'hiitest'
add(3,4,5)
7

function add(a,b,c){
    return a+b+c
}

add(1,2,3)
6
add(1,2)
NaN


function myCity(city,state){
    let out = `From City ${city} and state ${state}`
    return out
}
undefined
myCity('Panipat','Haryana')
'From City Panipat and state Haryana'


//es6  arrow function
let add = (a,b) => {return a+b}
add(2,3)
5

//restes6
function add(...args){
    console.log(args)
}


add(1,2,3)
VM1138:2 (3) [1, 2, 3]

add(4,5,8,4)
VM1138:2 (4) [4, 5, 8, 4]

