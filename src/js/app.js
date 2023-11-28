import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp () ;

$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__menu').toggleClass('open-menu');
        $('.header__status').toggleClass('open-menu');
    });
});

$('.fancybox').on('click', function() {
  var visibleLinks = $('.fancybox:visible');
  
  $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );
  
  return false;
});