new fullpage('#fullpage', {
  //options here
  autoScrolling:true,
  scrollHorizontally: true,
  sectionsColor : ['#fff', '#fff', '#fff', '#fff'],
  navigation: true,
  slidesNavigation: true,
  anchors:['Home', 'residential', 'about', 'amenities','partners','map'],
  navigationTooltips: ['home', 'residential','about','amenities','partners','map'],
  afterRender: function () {
    /** arrow-left */
    const arrow_left = document.querySelector(".fp-controlArrow.fp-prev");
    arrow_left.innerHTML = `<i class="fas fa-chevron-left"></i>`;
    /** arrow-right */
    const arrow_right = document.querySelector(".fp-controlArrow.fp-next");
    arrow_right.innerHTML = `<i class="fas fa-chevron-right"></i>`;
}

  
}
);


$(function() {
  var $clientslider = $('#clientlogo');
  var clients = $clientslider.children().length;
  var clientwidth = (clients * 220); 
  $clientslider.css('width', clientwidth);
  var rotating = true;
  var clientspeed = 1800;
  var seeclients = setInterval(rotateClients, clientspeed);
  $(document).on({
    mouseenter: function() {
      rotating = false;
    },
    mouseleave: function() {
      rotating = true;
    }
  }, '#ourclients');
  function rotateClients() {
    if (rotating != false) {
      var $first = $('#clientlogo li:first');
      $first.animate({
        'margin-left': '-220px'
      }, 2000, function() {
        $first.remove().css({
          'margin-left': '0px'
        });
        $('#clientlogo li:last').after($first);
      });
    }
  }
});