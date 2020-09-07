var x;

$(document).ready(function(){

	$("#day").change(function() {
		$("#dy").show();
		$("#hr").show();
		$("#mi").show();
		$("#se").show();
	});

	$("#hrs").change(function() {
		$("#dy").hide();
		$("#hr").show();
		$("#mi").show();
		$("#se").show();
	});

	$("#min").change(function() {
		$("#dy").hide();
		$("#hr").hide();
		$("#mi").show();
		$("#se").show();
	});

	$("#sec").change(function() {
		$("#dy").hide();
		$("#hr").hide();
		$("#mi").hide();
		$("#se").show();
	});

	$("#start").click(function() {
		counter();
	});

	$("#reset").click(function() {
		clearTimeout(x);
		$("#day").val("00");
		$("#hrs").val("00");
		$("#min").val("00");
		$("#sec").val("00");
		$("#dy").show();
		$("#hr").show();
		$("#mi").show();
		$("#se").show();
	});
});

function counter()
{
	var d = document.getElementById("day").value;
	var h = document.getElementById("hrs").value;
	var m = document.getElementById("min").value;
	var s = document.getElementById("sec").value;

	x = setInterval(function() {

		s--;

		if(s <= 0 && m > 0)
		{
			m--;
			s = 60;
		}
		if(m <=0 && h > 0)
		{
			h--;
			m = 60;
			s = 60;
		}
		if(h<=0 && d>0)
		{
			d--;
			h = 24;
			m  = 60;
			s = 60;
		}
		if(d<0 || h< 0 || m<0 || s< 1 )
		{
			document.getElementById("day").value = "00";
			document.getElementById("hrs").value = "00";
			document.getElementById("min").value = "00";
			document.getElementById("sec").value = "00";
			clearTimeout(x);
		}

		if(s<10)
		document.getElementById("sec").value = "0"+ s;
		else
		document.getElementById("sec").value = s;

		if(m<10)
		document.getElementById("min").value = "0" + m;
		else
		document.getElementById("min").value = m;

		if(h<10)
		document.getElementById("hrs").value = "0" + h;
		else
		document.getElementById("hrs").value = h;

		if(d<10)
			document.getElementById("day").value = "0" + d;
		else
			document.getElementById("day").value = d;


	}, 1000);

}