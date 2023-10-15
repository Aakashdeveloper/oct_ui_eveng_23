var city = "aMSterDAm"

city.toUpperCase()
'AMSTERDAM'
city.toLowerCase()
'amsterdam'
city[0]
'a'
city[1]
'M'
city.charAt(0)
'a'
city.charAt(1)
'M'

var a = "john"
var b = "John"
undefined
 a == b
false
a.toUpperCase() == a.toUpperCase()
true
city.slice(1)
'MSterDAm'
city.slice(2)
'SterDAm'
city.slice(-1)
'm'
city.slice(-2)
'Am'
city.slice(0,1)
'a'
city.slice(0,-1)
'aMSterDA'

var city = "aMSterDAm"

city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'

var city = "paRiS"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'


var uname = "   Nikita  "

uname.length
11
uname.trim()
'Nikita'