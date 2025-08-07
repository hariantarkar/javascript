class Value
{
	show()
	{
		console.log("I am parent method");
	}
	
}
class ABC extends Value
{	
	show()
	{
		console.log("I am child method");
	}
}
let ad=new ABC()
ad.show();
