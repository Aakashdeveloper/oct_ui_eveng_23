es5 > Ecam Script 5
es6 > Ecam Script 6

String > "Hii"  'Hey' `Hello` "test" '10' "true"
Number > 12 5465 646456745 76.76 .78
Boolean > true false

//es5
var a = "Hiii"
var b = 10
var c = true
undefined
typeof(a)
'string'
typeof(b)
'number'
typeof(c)
'boolean'
var d = "10"
undefined
typeof(d)
'string'
var e = 10.11
undefined
typeof(e)
'number'


var a = 10
var b = 20
a+b (addition)
30
a-b
-10
b-a
10
a*b
200
a/b
0.5
b/a
2

var a = "Hii"
var b = "JavaScript"

a+b (concat)
'HiiJavaScript'
a-b
NaN (Not a number)
a*b
NaN
a/b
NaN

var a = "Hii"
var b = 10
a+b
'Hii10'
b+a
'10Hii'
a-b
NaN

string + string = string
string + number = string
number + string = string
number + number = number

"10"+20+30
"1020"+30
'102030'

10+"20"+30
"1020"+30
'102030'

10+20+"30"
30+"30"
'3030'


"10"+20+30-1
102029
10+"20"+30-1
102029
10+20+"30"-1
3029

"Hii"-1
NaN
"10"-1
9
"10a"-1
NaN
10*"2"
20
10*"2a"
NaN
82/"4"
20.5
"82"/4
20.5
"82a"/4
NaN
"10"+1
'101'
10+"1"
'101'

true is equal to 1
false is equal to 0


true+true
2
true+false
1

10+true
11
10/false
Infinity
"10"+true
'10true'
"true"+"true"
'truetrue'

var a = "10"
var b = "20"
undefined
a+b
'1020'
parseInt(a)+parseInt(b)
30
var a = "10.11"
var b = "20.23"
undefined
parseInt(a)+parseInt(b)
30
parseFloat(a)+parseFloat(b)
30.34

//es6
var a = "10.11"
var b = "20.23"
undefined
Number(a)+Number(b)
30.34