$(document).ready(function() {
    $('.celsius').css({
        "color": "#fff",
        "cursor": "pointer",
        "font-weight": "bolder"
    });
    $('.fahrenheit').css({
        "color": "#ADADAD ",
        "cursor": "pointer",
        "font-weight": "lighter"
    });

    $('.celsius').on('click', function() {
        $('.celsius').css({
            "color": "#fff",
            "cursor": "pointer",
            "font-weight": "bolder"
        });
        $('.fahrenheit').css({
            "color": "#ADADAD ",
            "cursor": "pointer",
            "font-weight": "lighter"
        });
        $('.fahr').hide();
        $('.celsi').show();
        $('.corf').text('C');

        if ($('.day-0').hasClass('selected')) {
            $('.minSide').text($('a.min-0').text()).append(" &deg;C");
            $('.maxSide').text($('a.max-0').text()).append(" &deg;C");
        }
        if ($('.day-1').hasClass('selected')) {
            $('.minSide').text($('a.min-1').text()).append(" &deg;C");
            $('.maxSide').text($('a.max-1').text()).append(" &deg;C");
        }

        if ($('.day-2').hasClass('selected')) {
            $('.minSide').text($('a.min-2').text()).append(" &deg;C");
            $('.maxSide').text($('a.max-2').text()).append(" &deg;C");
        }
        if ($('.day-3').hasClass('selected')) {
            $('.minSide').text($('a.min-3').text()).append(" &deg;C");
            $('.maxSide').text($('a.max-3').text()).append(" &deg;C");
        }

        if ($('.day-4').hasClass('selected')) {
            $('.minSide').text($('a.min-4').text()).append(" &deg;C");
            $('.maxSide').text($('a.max-4').text()).append(" &deg;C");
        }
        if ($('.day-5').hasClass('selected')) {
            $('.minSide').text($('a.min-5').text()).append(" &deg;C");
            $('.maxSide').text($('a.max-5').text()).append(" &deg;C");
        }

        if ($('.day-6').hasClass('selected')) {
            $('.minSide').text($('a.min-6').text()).append(" &deg;C");
            $('.maxSide').text($('a.max-6').text()).append(" &deg;C");
        }

    });

    $('.fahrenheit').on('click', function() {
        $('.celsius').css({
            "color": "#ADADAD ",
            "cursor": "pointer",
            "font-weight": "lighter"
        });
        $('.fahrenheit').css({
            "color": "#fff",
            "cursor": "pointer",
            "font-weight": "bolder"
        });
        $('.fahr').show();
        $('.celsi').hide();
        $('.corf').text('F');

        if ($('.day-0').hasClass('selected')) {
            $('.minSide').text($('a.minF-0').text()).append(" &deg;F");
            $('.maxSide').text($('a.maxF-0').text()).append(" &deg;F");
        }

        if ($('.day-1').hasClass('selected')) {
            $('.minSide').text($('a.minF-1').text()).append(" &deg;F");
            $('.maxSide').text($('a.maxF-1').text()).append(" &deg;F");
        }

        if ($('.day-2').hasClass('selected')) {
            $('.minSide').text($('a.minF-2').text()).append(" &deg;F");
            $('.maxSide').text($('a.maxF-2').text()).append(" &deg;F");
        }

        if ($('.day-3').hasClass('selected')) {
            $('.minSide').text($('a.minF-3').text()).append(" &deg;F");
            $('.maxSide').text($('a.maxF-3').text()).append(" &deg;F");
        }

        if ($('.day-4').hasClass('selected')) {
            $('.minSide').text($('a.minF-4').text()).append(" &deg;F");
            $('.maxSide').text($('a.maxF-4').text()).append(" &deg;F");
        }

        if ($('.day-5').hasClass('selected')) {
            $('.minSide').text($('a.minF-5').text()).append(" &deg;F");
            $('.maxSide').text($('a.maxF-5').text()).append(" &deg;F");
        }

        if ($('.day-6').hasClass('selected')) {
            $('.minSide').text($('a.minF-6').text()).append(" &deg;F");
            $('.maxSide').text($('a.maxF-6').text()).append(" &deg;F");
        }
    });


});