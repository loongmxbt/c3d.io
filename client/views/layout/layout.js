Template.layout.events({
  'click button.trigger': function(event){

    var container = $('#container');
    var trigger = $('button.trigger');

    if (container.hasClass('container--open')) {

      container.removeClass('container--open');
      trigger.removeClass('trigger--active');
      window.addEventListener('scroll', noscroll);

    } else {

      container.addClass('container--open');
      trigger.addClass('trigger--active');
      window.removeEventListener('scroll', noscroll);
      
    };
  }
})

Template.layout.onCreated(function() {
  window.addEventListener( 'scroll', noscroll);
})

function noscroll() {
  window.scrollTo( 0, 0 );
}