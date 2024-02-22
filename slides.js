$(function () {
    var current = $('#slides > li:first').css('left', '0').show();

    function nextSlide() {
        var next = current.next('li');
        if (next.length === 0) {
            next = $('#slides > li:first');
        }

        current.animate({ left: '-100%' }, 'slow', function() {
            $(this).hide();
        });
        next.css('left', '100%').show().animate({ left: '0' }, 'slow');

        current = next;
    }

    $('body').click(nextSlide);
    $('a').click(function (e) {
        e.stopPropagation();
    });
});
