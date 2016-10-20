//Buisness logic:


//User Interface:
$(document).ready(function() {
  $("form").submit(function(event) {
  var reptile = $("#reptile").val();
  var newReptile = parseInt(reptile);

    if ( newReptile === 1 ) {
      $("#snake").show();
    }
    else if (newReptile === 2) {
      $("#beetle").show();
    }
    else if (newReptile === 3) {
      $("#turtle").show();
    }
    else {
      alert("Please select something");
    }
    event.preventDefault();
  });
});
