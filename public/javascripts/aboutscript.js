   $(document).ready(function(){
      $('.carousel').carousel({padding: 50});
    });
   autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 2000);
}