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