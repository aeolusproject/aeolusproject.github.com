function positionFooter() {
  var $footer = $('#footer');
  $footer.removeClass('fixed');
  if ($(document.body).height() < $(window).height()) {
    $footer.addClass('fixed');
  } else {
    $footer.removeClass('fixed');
  }
}

$(document).ready(function () {
  $("#get_it_container li").live('mouseenter', function(e){
    $(e.currentTarget).children('p').show();
    $(e.currentTarget).children('pre').show();
  });
  //$("#get_it_container li").live('mouseleave', function(e){
  //  $(e.currentTarget).children('p').hide();
  //  $(e.currentTarget).children('pre').hide();
  //});

  $(window).resize(positionFooter).resize();
  //preventFOUT();
});

$(window).ready(function () {
  //run _after_ images have been loaded as well.
  $(window).resize(positionFooter).resize();
});
