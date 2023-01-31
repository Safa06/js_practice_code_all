//practice problem 1

var momMoney=1000;
var cost=700;
var returnMoney=momMoney-cost;
//console.log(returnMoney);

//practice problem 2

var math = 75.25;
var bio = 65;
var chem = 80;
var phy = 35.45;
var bangla = 99.50;

var avg = (math+bangla+bio+chem+phy)/5;

//avg = avg.toFixed(2);
//console.log(avg.toFixed(2));
avg1 = parseFloat(avg);
//console.log(avg1);


//practice problem 3

var str1 ='I am going to be';
var str2 = 'an awesome web developer';
var result = str1 + ' '+ str2 ;
//console.log(result);

//practice problem 4

var num = 119;
var result = 119%5;
//console.log(result);

var arr = [2,5,8,9,10];
arr.push(3);
arr.push([2]);
//console.log(arr);

arr.splice(2,2,90);
//console.log(arr);

// practice problem 5 (module 18)
var fruits = ['apple' , 'banana' , 'orange'];
var infruits = fruits.indexOf('banana');
console.log(infruits);
fruits[1]='mango';
console.log(fruits);

//practice problem 6

//practice problem 7
// 1.

var num1 = 13;
var num2 = 79;
var num3 = 45;
if(num1>num2 && num1>num3)
{
    console.log(num1);
}
else if(num2>num1 && num2>num3)
{
    console.log(num2);
}
else 
{
    console.log(num3);
}




//  2.
var side1 = 9;
var side2 = 8;
var side3 = 9;
if(side1==side2 || side1== side3||side2==side3)
{
    console.log("Isosceles")
}
else
{
    console.log("Not")
}


// Array in loop

var num = [45,18,20,15];
for(var i=0;i<num.length;i++)
{
    num[i];
    console.log(num[i]);
}