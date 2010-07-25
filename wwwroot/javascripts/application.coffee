# Remember to remove application.js for coffee to complie
$( ->
  $('#sidebar li').prepend('''
    <span class="ui-icon ui-icon-circle-arrow-e" style="float:left;margin-right: 0.3em;"></span>
  ''')
  $('#sidebar ul').addClass('ui-corner-all').show('slide',{ direction: 'right'},'slow')
  page: $('#page').text() || 'mission'
  if page == 'mission'
    $('a[href="/"]').css('color','blue')  
  else
    $('a[href*="' + page + '"]').css('color','blue')

)