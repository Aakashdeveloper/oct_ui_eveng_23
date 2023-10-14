let a = [1,4,55,43,78,12] > Array of Number
let b = ["Hiii","Biee","Test"] >> Array of String
let c = [true,false,true,true] >> Array of Boolean

Array is a collection of homogenious data type as well as hetrogenious
let a = [1,2,3,"fdf","Dvsd",true,false,10]

let city = ["Delhi","Mumbai","Pune","Venice"];
undefined
city.length
4
city[0]
'Delhi'
city[1]
'Mumbai'
city[city.length-1]
'Venice'
city[city.length-2]


let city = ["Delhi","Mumbai","Pune","Venice"];
undefined
city.push("Innsburg")
5
city
(5) ['Delhi', 'Mumbai', 'Pune', 'Venice', 'Innsburg']
city.push("Amsterdam")
6
city
(6) ['Delhi', 'Mumbai', 'Pune', 'Venice', 'Innsburg', 'Amsterdam']
city.pop()
'Amsterdam'
city
(5) ['Delhi', 'Mumbai', 'Pune', 'Venice', 'Innsburg']
city.pop(2)
'Innsburg'

let city = ['Delhi', 'Mumbai', 'Pune', 'Venice', 'Innsburg', 'Amsterdam']
undefined
city.shift()
'Delhi'
city.unshift('London')
6
city
(6) ['London', 'Mumbai', 'Pune', 'Venice', 'Innsburg', 'Amsterdam']

push > add in the end of array
pop > Remove the last value of array
shift > Remove the first value of array
unshift > Add as a first value to array

let city = ['London', 'Mumbai', 'Pune', 'Venice', 'Innsburg', 'Amsterdam']
undefined
city.slice(2,5)
(3) ['Pune', 'Venice', 'Innsburg']
city.slice(1)
(5) ['Mumbai', 'Pune', 'Venice', 'Innsburg', 'Amsterdam']
city.slice(-1)
['Amsterdam']
city.slice(0,-1)
(5) ['London', 'Mumbai', 'Pune', 'Venice', 'Innsburg']

//splice(startIndex,deletecount,values)
let city = ['London', 'Mumbai', 'Pune', 'Venice', 'Innsburg', 'Amsterdam']

// remove 2 value on index 2
city.splice(2,2)
(2) ['Pune', 'Venice']
city
(4) ['London', 'Mumbai', 'Innsburg', 'Amsterdam']

// do not remove value but add on index 1
city.splice(1,0,'Helsinki','Boston')
[]
city
(6) ['London', 'Helsinki', 'Boston', 'Mumbai', 'Innsburg', 'Amsterdam']

// on index 3 remove 1 value and add 2
city.splice(3,1,'Indore','Keev')
['Mumbai']
city
(7) ['London', 'Helsinki', 'Boston', 'Indore', 'Keev', 'Innsburg', 'Amsterdam']


let city = ['Mumbai', 'Pune', 'Venice', 'Innsburg', 'Amsterdam']

city.indexOf('Delhi')
-1
city.indexOf('Mumbai')
0
city.indexOf('Amsterdam')
4
city.indexOf('Boston')
-1