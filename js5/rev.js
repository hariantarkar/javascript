let no=1234;
	let rev=0;
	
	while(no > 0)
	{
		let rem = no%10;
		no=parseInt(no/10);
	    rev=rev*10+rem;
	}
	console.log(" Rev num is:"+rev);
	
	