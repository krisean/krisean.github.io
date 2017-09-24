function openNavMenu(){
	document.getElementById("sidebar").style.width = "250px";
	document.getElementById("content").style.marginLeft = "250px";
}
function closeNavMenu(){
	document.getElementById("sidebar").style.width = "0";
	document.getElementById("content").style.marginLeft = "0";	
}
function clickNavMenu(){
	if (document.getElementById("sidebar").style.width !== "250px"){
		document.getElementById("sidebar").style.width = "250px";
		document.getElementById("content").style.marginLeft = "250px";
	}
	else{
		document.getElementById("sidebar").style.width = "0";
		document.getElementById("content").style.marginLeft = "0";	
	}
}