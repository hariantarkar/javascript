class Test
{
	contructor(x,y)
	{
		this.x=x;
		this.y=y;
	}
	showMul()
	{
		console.log("output: "+(this.x*this.y));	
	}
}
let t=new Test(10,10);
t.showMul();
