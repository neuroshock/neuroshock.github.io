$('.nav li a').on('click', function(eventObject){
  var navbar_toggle = $('.navbar-toggle');
  if (navbar_toggle.is(':visible')) {
    navbar_toggle.trigger('click');
  }

  var oldActive = $('.nav li.active');
  oldActive.removeClass('active');
  $(eventObject.target).parent().addClass('active');
});

