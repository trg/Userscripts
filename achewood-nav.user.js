// ==UserScript==
// @match http://*.achewood.com/*
// @match http://achewood.com/*
// ==/UserScript==

// jQuery loading code via http://erikvold.com/blog/index.cfm/2010/6/14/using-jquery-with-a-user-script

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// the guts of this userscript
function main() {

    KEYCODE_LEFT = 37;
    KEYCODE_RIGHT = 39;

    $(document).keydown(function(e){
        
        if (e.keyCode == KEYCODE_LEFT || e.keyCode == KEYCODE_RIGHT) {
            
            var link;
            
            if (e.keyCode == KEYCODE_LEFT) {
                link = $("#comic_navigation .left a")[0];
            } else {
                link = $("#comic_navigation .right a")[0];
            }
            
            window.location.href = $(link).attr('href');
            
            return false;
        }
        
    });
    
    $('#comic_body').append( "<i style='font-size:10px;color:#ccc'>" + $('#comic_body img').attr('title') + "</i>"  );

}

// load jQuery and execute the main function
addJQuery(main);