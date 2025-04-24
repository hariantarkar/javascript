 var a=[10,2,4,3,5,7,20];
var newArray=a.filter(function(value,index,a)
{
return value%2==0;
});
newArray.forEach(function(value,index,a)
{
console.log(value);
});
