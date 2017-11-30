$(document).ready(function() {
  var folder = "./sounds";
      $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(wav|mp3)$/) ) {
                    $("body").append( "<img src='"+ folder + val +"'>" );
                }
            });
        }
      });


})
