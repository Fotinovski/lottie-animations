//********NAV BAR*********

$(document).ready(function () {

  $(".nav__link").click(function () {
     $(".webpage").hide();
    //$(".webpage").fadeOut('fast');
    var target_page = $(this).data("webpage");
    $("#"+target_page).show();
   // $("#"+target_page).fadeIn('fast');
  })

  $('.nav a').click(function () {
    $('a').removeClass("active");
    $(this).addClass("active");
  });
//****************************************************** */

  var target = window.location.hash;

//   var slides = $('.skw-page').map(function(){
//     return "#" + $(this).data("fragment");
//  }).get();

  if (target == "#stats") {
    $("#pageTwo").trigger("click");
  }

  if (target == "#third") {
    $("#pageThree").trigger("click");
  }

  if (target == "#about") {
    $("#pageFour").trigger("click");
  }

  if (target == "#contact") {
    $("#pageFive").trigger("click");
  }

  // if ($.inArray(target ,slides) != -1) {
  //   $("#pageThree").trigger("click");
  //   $('.skw-page').removeClass("active");
  //   $('.skw-page[data-fragment="'+target.replace('#', "")+'"]').addClass('active');
  // }

});
