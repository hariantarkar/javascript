let rate,qty,total;
	function acceptQty()
	{
		qty=parseInt(document.getElementById("qty").value);
	}
	function acceptRate()
	{

		rate=parseInt(document.getElementById("rate").value);
		total=qty*rate;
		document.getElementById("total").value=""+total;
	}