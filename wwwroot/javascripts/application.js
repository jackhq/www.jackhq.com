(function(){
  $(function() {
    $('#sidebar li').prepend('<span class="ui-icon ui-icon-circle-arrow-e" style="float:left;margin-right: 0.3em;"></span>');
    return $('#sidebar ul').addClass('ui-corner-all').show('slide', {
      direction: 'right'
    }, 'slow');
  });
})();
