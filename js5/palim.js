let no=121;
let rem,rev=0;
var temp=no;
	while(no>0)
	{
		rem=no%10;
		
		rev=rev*10+rem;
		no=Math.floor(no/10);
	}
	if(rev == temp)
	{
		console.log(" is palidrome:");
	}
	else
	{
		console.log("no is not palidrome:");
	}
	
		