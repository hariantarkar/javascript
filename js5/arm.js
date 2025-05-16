let no=153;
let arm=0;
var rem,temp=no;
	while(no>0)
	{
		rem=no%10;
		arm=arm+(rem*rem*rem);
		no=Math.floor(no/10);
	}
	if(arm == temp)
	{
		console.log(" is armstrong ");
	}
	else
	{
		console.log("not armstrong:");
	}
	
		