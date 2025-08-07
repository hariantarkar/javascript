class Value
{
	constructor()
	{
		console.log("I am parent constructor");
	}
	
}
class ABC extends Value
{	
	constructor()
	{	super();
		console.log("I am child constructor");
	}
}
let ad=new ABC()
