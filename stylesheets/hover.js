$( ".thumbnail-content" ).hover(
  function() {
  	$('.thumbnail img').css({
        "-webkit-filter": "none",
        "filter": "none"
    });

  }, function() {
  	$('.thumbnail img').css({
        "-webkit-filter": "blur("+4+"px)",
    	"filter": "blur("+4+"px)"
    });
  }
);
