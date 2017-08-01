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
    
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//characters - taken from the unicode charset
var code = "11010010001 00101011 ";
//converting the string into an array of single characters
code = code.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    
    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = code[Math.floor(Math.random()*code.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        
        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        
        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 33);

