$('.slider').mousedown(function (ev) {
  $(ev.target).off('dragstart');
  var shiftX = ev.pageX - parseInt($(ev.target).offset().left)
  $(document).on('mousemove',function (e) {
            var newLeft = e.pageX - shiftX - $('.button').offset().left;
            if(newLeft < 0) newLeft = 0;
            var rightEdge = $('.button').width() - $(ev.target).width();
            if(newLeft > rightEdge) newLeft = rightEdge;
            console.log(newLeft);
            if(newLeft < 15) {
              $('.button').removeClass('green');
              newLeft = 1
              $('.button').attr('state',0);
            }
            if(newLeft >= 15) {
              $('.button').addClass('green');
              newLeft = rightEdge - 1;
              $('.button').attr('state',1);
            }
            $(ev.target).css('left' , newLeft+'px');
    })
    $(document).mouseup(function (e) {
        $(document).off('mousemove');
    })
})
