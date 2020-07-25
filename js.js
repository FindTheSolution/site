//HEY NO CHEATING
$(function(){

  $('button#submit').click(function () {
    console.log("pressed")
      var input = $('input#ans').val();
      if(input==""){
        alert(" you really thought that would do something? you dont even have an answer")
        $("p#hidden").text("fnGGAxznt4QxtLS8d1cJURUklACukP2lsrglb1zMerk=")
        console.log("done")
      }
      else if (input== "fnGGAxznt4QxtLS8d1cJURUklACukP2lsrglb1zMerk=") {
        alert('good job you figured it out, now for the next part dowload and run the python file in this github repo')
      }
  })

});
