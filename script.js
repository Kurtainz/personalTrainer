$(function(){
    $('.slide img:gt(0)').hide();
    setInterval(function(){
      $('.slide :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.slide');}, 
      3000);
});