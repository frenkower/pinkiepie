
$(document).ready(function(){
  
  var FF = !(window.mozInnerScreenX == null);
  if(FF) {
    // is firefox 

    
    $('input[type = "radio"]').change(function(){
      let 
      val1 = $('input[id = "slider_control1"]:checked').val(),
      val2 = $('input[id = "slider_control2"]:checked').val(),
      val3 = $('input[id = "slider_control3"]:checked').val();


      if(val1 == "on"){
        $('.slides').css('marginLeft', '200%');
      }else if(val2 == "on"){
        $('.slides').css('marginLeft', '0%');
      }else if(val3 == "on"){
        $('.slides').css('marginLeft', '-200%');
      }

    });


  }
// is another browser
else{

  $('input[type = "radio"]').change(function(){
    let 
    val1 = $('input[id = "slider_control1"]:checked').val(),
    val2 = $('input[id = "slider_control2"]:checked').val(),
    val3 = $('input[id = "slider_control3"]:checked').val();


    if(val1 == "on"){
      $('.slides').css('marginLeft', '0%');
    }else if(val2 == "on"){
      $('.slides').css('marginLeft', '-200%');
    }else if(val3 == "on"){
      $('.slides').css('marginLeft', '-400%');
    }

  });
}});