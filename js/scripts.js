//Buisness logic:

//User Interface:
$(document).ready(function() {
  $("form").submit(function(event) {
  var reptile = $("#reptile").val();
  var newReptile = parseInt(reptile);

    if ( newReptile === 1 ) {
      $( "#turtle" ).hide();
      $( "#beetle" ).hide();
      $( "#snake" ).show();
    }
    else if ( newReptile === 2) {
      $( "#snake" ).hide();
      $( "#turtle" ).hide();
      $( "#beetle" ).show();
    }
    else if ( newReptile === 3) {
      $( "#beetle" ).hide();
      $( "#snake" ).hide();
      $( "#turtle" ).show();
    }
    else {
      alert("Please select something");
    }
    event.preventDefault();
  });
});
