$.backstretch([
  'images/background_image0.jpg',
  'images/background_image1.jpg',
  'images/background_image2.jpg'
], {duration: 1500, fade: 1500});

$(".0").fadeIn(1500);

$(window).on("backstretch.before", function (e, instance, index) {
  $(".overlay").not("." + index).fadeOut(1500);
  $("." + index).fadeIn(1500);
});
