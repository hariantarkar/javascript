let student={
	"id":1,
	"name":"sham",
	"marks":[90,90,90,90,90,90,]
	};
	console.log("id "+student.id);
	console.log("name "+student.name);
	let m=student.marks;
	let sum=0;
	m.forEach((val)=>{
	sum=sum+val;
	});
	console.log("percentag "+sum/m.length);
	
