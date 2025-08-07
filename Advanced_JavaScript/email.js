function validateEmail(str)
	{		
		const dot = str.lastIndexOf(".");
		const domain= dot>0 ? str.slice(dot+1): "";
				console.log("domain: ",dot, domain);
			let index=str.indexOf("@");
				let index1=str.lastIndexOf("@");
				let span=document.getElementById("s");
					if(index <= 0 || index!= index1)
					{
						span.innerHTML="Invalid Email";
						span.style.color="red";
						input.style.borderColor="red";
					}
					else
					{
						let as=str.substring((index+1));
							index=as.indexOf(".");
							index1=as.lastIndexOf(".");
								
							if((index==-1 || index!=index1) || (index!=(as.length-4) && index!=(as.length-3) ) && domain.length>3)
							{
								span.innerText="Invalid Email";
								span.style.color="red";	
							}
							else
							{
								span.innerHTML="";
								span.style.color="green";
							}
					}
						
	}
			
