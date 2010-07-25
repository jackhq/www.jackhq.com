(function(){
  // Remember to remove application.js for coffee to complie
  $(function() {
    var page;
    $('#sidebar li').prepend('<span class="ui-icon ui-icon-circle-arrow-e" style="float:left;margin-right: 0.3em;"></span>');
    $('#sidebar ul').addClass('ui-corner-all').show('slide', {
      direction: 'right'
    }, 'slow');
    page = $('#page').text() || 'mission';
    if (page === 'mission') {
      return $('a[href="/"]').css('color', 'blue');
    } else {
      return $('a[href*="' + page + '"]').css('color', 'blue');
    }
  });
})();
