let a=[10,3,5,2,8];

let newArr=a.map(square);
  function square(value,index,a)
  {
   return value*value;
  }
newArr.forEach(function(value,index,a)
{
   console.log(value);
}
);

