$(document).ready(function(){



            $(".text_field").keyup(function(){
                
              var name_length = $("#name_field").val().length;
              var email_length = $("#email_field").val().length;
              var message_length = $("#message_field").val().length;

                if(name_length > 0 && email_length > 0 && message_length > 0){
                  $("#button").removeAttr("disabled");
                }
                else{
                  $("#button").prop("disabled",true);
                }
            });



            // NAME CHECK
            $("#name_field").blur(function(){                  

              var name_length = $("#name_field").val().length;

                  if(name_length < 1){
                    $("#name_validation").css("display","block");
                  }
                  else{
                    $("#name_validation").css("display","none");
                  }
            });


            // EMAIL CHECK
            $("#email_field").blur(function(){                  

              var email_length = $("#email_field").val().length;

                  if(email_length < 1){
                    $("#email_validation").css("display","block");
                  }
                  else{
                    $("#email_validation").css("display","none");
                  }
            });


            // MESSAGE CHECK
            $("#message_field").blur(function(){                  

              var message_length = $("#message_field").val().length;

                  if(message_length < 1){
                    $("#message_validation").css("display","block");
                  }
                  else{
                    $("#message_validation").css("display","none");
                  }
            });



});