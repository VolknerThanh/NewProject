window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("Scroll-to-top-button").style.display = "block";
    } else {
        document.getElementById("Scroll-to-top-button").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function SearchKeyWordByInput(){
	var URLstring = 'https://www.facebook.com/groups/j2team.community/search/?query=';
	var content = document.getElementById('search-text').value;
	if(content == '')
		alert('Please fill in the textarea !');
	else
		window.open(URLstring + content);
}

function HideArea1(){
	document.getElementById('area1').style.display = "none";
	document.getElementById('area2').style.display = "block";
}
function HideArea2(){
	document.getElementById('area2').style.display = "none";
	document.getElementById('area1').style.display = "block";
}

/*
function Dem() {
	var n = 5;
	var dem = 0;
	for (var i = 1; i <= n; i++) {
		for(var j = i + 1; j <= n; j++) {
			for (var k = 1; k <= j; k++) {
				dem++;
			}
		}
	}
	console.log(dem);
}*/