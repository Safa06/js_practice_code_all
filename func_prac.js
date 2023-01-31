// //problem 1
function multiply(num)
{
for(var i=1;i<=10;i++)
{
    console.log(num*i);
}
}

multiply(13);

// //module 21

// //problem 1

function hours(hour)
{
console.log(hour*60 + ' '+ 'minutes');
}

hours(4);



//problem 3


function findOddSum(number)
{
    let sum=0;
    for(let i=0;i<number.length;i++)
    {
        if((number[i]%2)!=0){
            sum=sum+number[i];
            console.log(sum);
        }
        // else{
        //     console.log("Not found");
        // }
    }
    //return sum;
}
const number=[1,8,4,2,1,9,5];
findOddSum(number);


//inch to feet

function finch(inch)
{
    const feet = inch/12;
    return feet;
}
const value = 30;
var result = finch(value);
console.log(result);



//leap year problem

function findLeapYear(year)
{
    for(var i=0;i<year.length;i++)
    {
        if(year[i]%4==0)

        {
            console.log('Leap year',year[i]);
        }
        else if((year[i]%400==0) && (year[i]/100!=0))
        {
            console.log(year[i],'Leap year also');
        }
        else
        {
            console.log(year[i],'Not a leap year');
        }
    }

}
const year=[2023,2024,2025,2028,2030,1980];
findLeapYear(year);



//factorial (decrementing loop)

function fact(number){
    var result=1;
for (var i=number;i>=1;i--)
{
result=result*i;
// console.log(result);
}
return result;
}

const result=fact(5);
console.log(result);



//factorial (incrementing loop)

function fact(number){
    var result=1;
for (var i=1;i<=number;i++)
{
result=result*i;
// console.log(result);
}
return result;
}

const result=fact(5);
console.log(result);



//factorial by while loop

function fact(number)
{
    var result=1;
    var num=1;
    while(num<=5)
    {
        result=result*num;
        num++;
    }
    return result;
}
const result=fact(5);
console.log(result);

