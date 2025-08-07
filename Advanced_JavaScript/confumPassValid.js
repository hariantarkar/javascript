function ConfumPassword()
{
	const pass=document.getElementById("pass").value;
	const confirm=document.getElementById("confirmPass").value;
	const result=document.getElementById("confirmMessage");
	
	if(pass==confirm)
	{
		result.innerHTML="";
		result.style.color="green";
	}
	else
	{
		result.innerHTML="Password Not match";
		result.style.color="red";
	}
	
}

	