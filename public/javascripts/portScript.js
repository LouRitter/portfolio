$( document ).ready(function(){

var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  
// Open
$('.gallery-expand').galleryExpand('open');

// Close
$('.gallery-expand').galleryExpand('close');

 $(".button-collapse").sideNav();

});