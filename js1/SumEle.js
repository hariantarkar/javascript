let a=[10,20,30,40,50];

let result=a.reduce(function(total,value,index,a)
{
return total+value;
});

console.log("array element sum is"+result);
