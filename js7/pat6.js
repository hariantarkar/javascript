let i,j;
for(i=1;i<=5;i++)
{	let str='';
	for(j=1;j<=5;j++)
	{
		if(i==1 || j==1 || i==5 || j==5)
		{
			str+="*";
		}
		else
		{
			str+=" ";
		}
	}
	console.log(str);
}
