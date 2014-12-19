(function() {
  var after, every, pick;
  after = function(delay, callback) {
    return setTimeout(callback, delay);
  };
  every = function(interval, callback) {
    return setInterval(callback, interval);
  };
  pick = function() {
    if (!(arguments.length === 0)) {
      return arguments[~~(Math.random() * arguments.length)];
    }
  };
  jQuery(document).ready(function($) {
    var body, heading, height, i, j, party, rotate, transform, translateX, translateY, width, xLasers, yLasers;
    body = $('body');
    heading = $('h1');
    party = $('<div/>').attr('id', 'party');
    height = $(document).height();
    width = $(document).width();
    xLasers = ~~(width / 70);
    yLasers = ~~(height / 70);
    for (i = 0; (0 <= xLasers ? i < xLasers : i > xLasers); (0 <= xLasers ? i += 1 : i -= 1)) {
      translateX = i * 70;
      rotate = -85 + i * 3;
      transform = ("translate(" + (translateX) + "px, 0px) rotate(" + (rotate) + "deg)");
      $('<div/>').addClass('purple laser').css({
        'bottom': '-10px',
        'left': '0px',
        '-webkit-transform': transform,
        '-moz-transform': transform,
        '-o-transform': transform,
        'transform': transform
      }).appendTo(party);
    }
    for (j = 0; (0 <= yLasers ? j < yLasers : j > yLasers); (0 <= yLasers ? j += 1 : j -= 1)) {
      translateY = 70 * j;
      rotate = (j + 1) * 2;
      transform = ("translate(0px, " + (translateY) + "px) rotate(" + (rotate) + "deg)");
      $('<div/>').addClass('blue laser').css({
        'top': '0px',
        'left': '-10px',
        '-webkit-transform': transform,
        '-moz-transform': transform,
        '-o-transform': transform,
        'transform': transform
      }).appendTo(party);
    }
    body.prepend(party);
    return every(10000, function() {
      heading.addClass('no-power');
      return after(20, function() {
        heading.removeClass('no-power');
        return after(500, function() {
          heading.addClass('no-power');
          return after(20, function() {
            return heading.removeClass('no-power');
          });
        });
      });
    });
  });
})();
