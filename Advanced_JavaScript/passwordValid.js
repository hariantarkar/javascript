function Passwordvalidate(str)
{
		let flag=false;
		let span=document.getElementById("passwordMessage");
		const allowSymbol=['@','#','$','&','_'];
	if(str.length < 8)
	{
			span.innerHTML="password at list 8 char";
			span.style.color="red";
			return;
	}
			let digit=false;
			let upper=false;
			let lower=false;
			let symbol=false;
			let isvalid=true;
		for(var i=0;i<str.length;i++)
		{
			const Char=str[i];
			
			const ascii=str.charCodeAt(i);
			
			if(ascii>=48 && ascii<=57) 
			{
				digit=true;
			}
			else if(ascii >=65 && ascii<=90)
			{
				upper=true;
			}
			else if(ascii>=97 && ascii <=122)
			{
				lower=true;
			}
			else if(allowSymbol.indexOf(Char)!==-1)
			{
				symbol=true;
			}
			else
			{
				isvalid=false;
				break;
			}
		}
		
		if(!isvalid)
		{
			span.innerHTML="password contain invalid ";
			span.style.color="red";
			return;
		}
		if(digit && upper && lower && symbol )
		{
			span.innerHTML="";
			span.style.color="white";
			return;
		}
		else
		{
			span.innerHTML="include upper,lower digit,symbol";
			span.style.color="red";
		}
}
		
	
