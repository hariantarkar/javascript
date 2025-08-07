app.get('/viewemp',(req,res)=>{
    let emp=[{ 
               "id":1,
               "name":"ABC",
               "sal":10000
	          },
	         {
                "id":2,
               "name":"MNO",
               "sal":20000

            },
            {
		       "id":3,
               "name":"PQR",
               "sal":30000
            }
             ,
            {  "id":4,
               "name":"XYZ",
               "sal":50000

            }]
			res.json(emp);
 
});
  
app.listen(3000,()=>{
  console.log("Server started on 3000 port");
});
