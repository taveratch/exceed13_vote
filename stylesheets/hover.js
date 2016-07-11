$(document).ready(function(){
  console.log("Loaded hover.js");
  $(".thumbnail-wrapper").hover(
    function() {
      console.log("HOVERED");
    	$('.thumbnail img').css({
          "-webkit-filter": "none",
          "filter": "none"
      });

    }, function() {
      console.log("XXX");
    	$('.thumbnail img').css({
          "-webkit-filter": "blur("+4+"px)",
      	"filter": "blur("+4+"px)"
      });
    }
  );
});
