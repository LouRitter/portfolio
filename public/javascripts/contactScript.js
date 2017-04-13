$(document).ready(function(){
var from, name,phone,text;
$( ".contact" ).submit(function( event ) {  
		from=$('.validate.email').val();
		name=$('.validate.name').val();
		phone=$('.validate.phone').val();
        text=$(".materialize-textarea.message").val();
        $(".materialize-textarea.message").text("Sending E-mail...Please wait");
        $.get("http://localhost:3000/send",{from:from,name:name,phone:phone,text:text},function(data){
        if(data=="sent")
        {
           console.log(from,name,phone,text)
            $("#message").empty().html("Email is been sent at "+to+" . Please check inbox!");
        }

});
    });
});