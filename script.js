var b1 =document.getElementById("b1");
var b2 =document.getElementById("b2");
var b3 =document.getElementById("b3");
var b4 =document.getElementById("b4");
var b5 =document.getElementById("b5");
var b6 =document.getElementById("b6");
var b7 =document.getElementById("b7");
var b8 =document.getElementById("b8");
var b9 =document.getElementById("b9");
var win =document.getElementById("win");
var i=1;
function resete()
{
	window.location.reload();
}



function check(ch)
{
if((b1.innerHTML==ch&&b2.innerHTML==ch&&b3.innerHTML==ch)||
	(b4.innerHTML==ch&&b5.innerHTML==ch&&b6.innerHTML==ch)||
	(b7.innerHTML==ch&&b8.innerHTML==ch&&b9.innerHTML==ch)||
	(b1.innerHTML==ch&&b4.innerHTML==ch&&b7.innerHTML==ch)||
	(b2.innerHTML==ch&&b5.innerHTML==ch&&b8.innerHTML==ch)||
	(b3.innerHTML==ch&&b6.innerHTML==ch&&b9.innerHTML==ch)||
	(b1.innerHTML==ch&&b5.innerHTML==ch&&b9.innerHTML==ch)||
	(b3.innerHTML==ch&&b5.innerHTML==ch&&b7.innerHTML==ch)

	)
{
	i=0;
	if(ch=="o"){
		win.innerHTML="Player 2 Wins";
	}

			else {win.innerHTML="Player 1 Wins";}
			return 1;
}


else{
	return -1;
}
}
function val(event){
	if(i!==0)
	{
		console.log(i)
	const a= event.target;
	console.log(event.target.id);
	
	if (a.innerHTML!="o" && a.innerHTML!="x"){
		if(i%2==1){
			a.innerHTML="x";
			i++;
			check('x')
			
			if (i==10&&check('o')==-1)  
			win.innerHTML="No one Wins";
		}
		else{
			a.innerHTML="o";
			i++;
			check('o')
			
			if (i==10&&check('o')==-1)  
			win.innerHTML="No one Wins";
	
		}
	}

	}
	



}
