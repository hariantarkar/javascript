class Value
{
	setValue(x,y)
	{
		this.x=x;
		this.y=y;
	}
}
class ABC extends Value
{
	getAdd()
	{
		return this.x+this.y;
	}
}
let ad=new ABC()
ad.setValue(10,30);
let result=ad.getAdd();
console.log("addtion is"+result);
