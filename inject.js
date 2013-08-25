//chrome.extension.sendRequest({redirect: "http://www.google.com"});
console.log("running");
function main(array) {
	for(var i = 0 ; i < array.length; i++)
	{
		if(array[i].href.indexOf('?') === -1 )
		{
			array[i].setAttribute("href",array[i].href.concat("?google") );		
		}
		else
		{
			array[i].setAttribute("href",array[i].href.concat("&google") );
		}
	
	}
}

var css = document.getElementsByTagName('link');
var links = document.getElementsByTagName('a');
var js = document.getElementsByTagName('script');

main(css);
main(links);
main(js);

var img  = document.getElementsByTagName('img');
for(var i = 0; i < img.length; i++)
{
	img[i].setAttribute('src',img[i].src.concat("?google"));
}
