
chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
  
  if(details.url.indexOf("?google") == -1 )
  {
   return {redirectUrl: details.url.concat("?google")};
	}
   },
  {urls: ["<all_urls>"]},
  ["blocking"]);