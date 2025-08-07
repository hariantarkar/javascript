class ABC
{
	setValue=(x,y)=>{
		this.x=x;
		this.y=y;
	}
	ShowAdd=()=>{
		console.log("Addtion is:"+(this.x+this.y));
	}
}

let ad=new ABC();
ad.setValue(100,200);
ad.ShowAdd();
