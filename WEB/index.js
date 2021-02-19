console.log("gowthami");

//alert("wow!...");

//comment line

//variables
var g="gowthami";
console.log(g);
var number=35;
console.log(number);
document.getElementById("text").innerHTML="hello world";
//var name=prompt("what is ur name??");
document.getElementById("text").innerHTML= name;
//numbers in javascript
var num1=10.07;
console.log(num1*10);
//increment by 1
var num2=20;
num2++;
//decrement by 1
num2--;
console.log(num2);
//functions
function fun() {
    console.log("hello function");
}
fun();

//creating a function

function wishing(urName) {
    var result="hiii.." + urName;
    console.log(result);
}
//var name=prompt('what is ur name:');
wishing(name);

//arguments in function

function sumNumber(n1,n2){
    var result=n1 + n2;
    console.log(result);
}
sumNumber(25,10);
//loops
//while loop
/*var n3=80;
while(n3<100){
    n3+=1;
    console.log(n3);
}
*/
//for loop
for(n=90;n<100;n++){
    if(n==95){
    break;
    }
    console.log(n);
}
//data types
let id=35;//number
//let name="gowthu...";//string
//let name={first:"kammannagari",last:"gowthami"}//object
let truth=false;//boolean
let groceries=['fruits','flowers','frnds']//array
let random;//undefiend
let nothing=null;//value null

//strings
let name1="gowthami,abc,xyz";
let moreNames="gowthami\n frnd";
console.log(moreNames);
console.log(name1.length);
console.log(name1.indexOf('mi'));
console.log(name1.slice(4,8));
console.log(name1.replace("gow","535"));
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.charAt(2));
console.log(name1[4]);
console.log(name1.split(','));
console.log(name1.split(""));
//arrays
let fruits=['apple','guava','orange','grapes'];
fruits=new Array('apple','guava','orange','grapes');

alert(fruits[3]);
console.log(fruits);
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
console.log('toString',fruits.toString());
