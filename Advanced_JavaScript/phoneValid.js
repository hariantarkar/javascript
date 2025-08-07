function PhoneValid(phone)
{
	const result=document.getElementById("p");
		for(let i=0;i<phone.length;i++)
		{
			const digit=phone.charCodeAt(i);
			if( digit < 48 || digit > 57)
			{
				result.innerHTML="only digit";
				result.style.color="red";
				return;
			}
			if ( phone.length!==10)
			{
				result.innerHTML="exactly 10 digit";
				return;
			}
			else{
				
				result.innerHTML="";
			}
		}
}


	