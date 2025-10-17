$(document).ready(function() {

    $('.day').on('click', function(event) {

        var target = $(event.target);

        // Day 1
        if (target.is('.day-0, p.ctemp-0, p.ctemp-0 span.celsi, p.ctemp-0 span.fahr, .cp-0, .cday-0, .ic-0 img')) {
            $('.day-0').addClass("selected");
            $('.day-1').removeClass("selected");
            $('.day-2').removeClass("selected");
            $('.day-3').removeClass("selected");
            $('.day-4').removeClass("selected");
            $('.day-5').removeClass("selected");
            $('.day-6').removeClass("selected");
        }

        // Day 2
        if (target.is('.day-1, p.ctemp-1, p.ctemp-1 span.celsi, p.ctemp-1 span.fahr, .cp-1, .cday-1, .ic-1 img')) {
            $('.day-1').addClass("selected");
            $('.day-0').removeClass("selected");
            $('.day-2').removeClass("selected");
            $('.day-3').removeClass("selected");
            $('.day-4').removeClass("selected");
            $('.day-5').removeClass("selected");
            $('.day-6').removeClass("selected");
        }

        // Day 3
        if (target.is('.day-2, p.ctemp-2, p.ctemp-2 span.celsi, p.ctemp-2 span.fahr, .cp-2, .cday-2, .ic-2 img')) {
            $('.day-2').addClass("selected");
            $('.day-0').removeClass("selected");
            $('.day-1').removeClass("selected");
            $('.day-3').removeClass("selected");
            $('.day-4').removeClass("selected");
            $('.day-5').removeClass("selected");
            $('.day-6').removeClass("selected");
        }

        // Day 4
        if (target.is('.day-3, p.ctemp-3, p.ctemp-3 span.celsi, p.ctemp-3 span.fahr, .cp-3, .cday-3, .ic-3 img')) {
            $('.day-3').addClass("selected");
            $('.day-0').removeClass("selected");
            $('.day-1').removeClass("selected");
            $('.day-2').removeClass("selected");
            $('.day-4').removeClass("selected");
            $('.day-5').removeClass("selected");
            $('.day-6').removeClass("selected");
        }

        // Day 5
        if (target.is('.day-4, p.ctemp-4, p.ctemp-4 span.celsi, p.ctemp-4 span.fahr, .cp-4, .cday-4, .ic-4 img')) {
            $('.day-4').addClass("selected");
            $('.day-0').removeClass("selected");
            $('.day-1').removeClass("selected");
            $('.day-2').removeClass("selected");
            $('.day-3').removeClass("selected");
            $('.day-5').removeClass("selected");
            $('.day-6').removeClass("selected");
        }

        // Day 6
        if (target.is('.day-5,.ctemp-5, p.ctemp-5 span.celsi, p.ctemp-5 span.fahr, .cp-5, .cday-5, .ic-5 img')) {
            $('.day-5').addClass("selected");
            $('.day-0').removeClass("selected");
            $('.day-1').removeClass("selected");
            $('.day-2').removeClass("selected");
            $('.day-3').removeClass("selected");
            $('.day-4').removeClass("selected");
            $('.day-6').removeClass("selected");
        }

        // Day 7
        if (target.is('.day-6,.ctemp-6, p.ctemp-6 span.celsi, p.ctemp-6 span.fahr, .cp-6, .cday-6, .ic-6 img')) {
            $('.day-6').addClass("selected");
            $('.day-0').removeClass("selected");
            $('.day-1').removeClass("selected");
            $('.day-2').removeClass("selected");
            $('.day-3').removeClass("selected");
            $('.day-4').removeClass("selected");
            $('.day-5').removeClass("selected");
        }

    });

    $('.dayDesc').text("Tomorrow");
    $('.dayDesc2').text("Today");
    $('.minSide').text($('a.min-0').text()).append(" &deg;C");
    $('.maxSide').text($('a.max-0').text()).append(" &deg;C");
    $('.humiditySide').text($('a.humidity-0').text()).append("&#37;");
    $('.cloudiSide').text($('a.cloudi-0').text());
    $('.windDirecSide').text($('a.windDirec-0').text());
    $('.windSpeedSide').text($('a.windSpeed-0').text()).append(" km/h &nbsp; | &nbsp; ");
    $('.windSpeedKnotsSide').text($('a.windSpeedknots-0').text()).append(" kt");
    $('.windGustSide').text($('a.windGust-0').text());
    $('.sunriseSide').text($('a.sunrise-0').text()).append(" /");
    $('.sunsetSide').text($('a.sunset-0').text());
    $('.PrecipitationPropabilitySide').text($('a.precipitationPropability-0').text()).append(" %");
    $('.PrecipitationAmountSide').text($('a.precipitationAmount-0').text()).append(" mm");

    $('.day-0').on('click', function() {
        var day = $('h4.cday-0').text();
        $('.dayDesc').text($('h4.cday-0').text());
        $('.dayDesc2').text($('h4.cday-0').text());
        //$('.describ').text($('a.description-0').text());
        $('.currentday span').text($('span.ic-0').text());
        //$('.temp span.celsi').text($('p.ctempmax-0').text());
        //$('.temp span.fahr').text($('p.ctempmaxfahr-0').text());
        $('.minSide').text($('a.min-0').text()).append(" &deg;C");
        $('.maxSide').text($('a.max-0').text()).append(" &deg;C");
        $('.humiditySide').text($('a.humidity-0').text()).append("&#37;");
        $('.cloudiSide').text($('a.cloudi-0').text());
        $('.windDirecSide').text($('a.windDirec-0').text());
        $('.windSpeedSide').text($('a.windSpeed-0').text()).append(" km/h &nbsp; | &nbsp; ");
        $('.windSpeedKnotsSide').text($('a.windSpeedknots-0').text()).append(" kt");
        $('.windGustSide').text($('a.windGust-0').text());
        $('.sunriseSide').text($('a.sunrise-0').text()).append(" /");
        $('.sunsetSide').text($('a.sunset-0').text());
        $('.PrecipitationPropabilitySide').text($('a.precipitationPropability-0').text()).append(" %");
        $('.PrecipitationAmountSide').text($('a.precipitationAmount-0').text()).append(" mm");

        if ($('.corf').text() == 'F') {
            $('.temp span.fahr').text($('p.ctempmaxfahr-0').text());
            $('.minSide').text($('a.minF-0').text()).append(" &deg;F");
            $('.maxSide').text($('a.maxF-0').text()).append(" &deg;F");
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
        } else if ($('.corf').text() == 'C') {
            $('.temp span.celsi').text($('p.ctempmax-0').text());
            $('.minSide').text($('a.min-0').text()).append(" &deg;C");
            $('.maxSide').text($('a.max-0').text()).append(" &deg;C");
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
        }
    });

    $('.day-1').on('click', function() {
        var day = $('h4.cday-1').text();
        $('.dayDesc').text($('h4.cday-1').text());
        $('.dayDesc2').text($('h4.cday-1').text());
        //$('.describ').text($('a.description-1').text());
        $('.currentday span').text($('span.ic-1').text());
        //$('.temp span.celsi').text($('p.ctempmax-1').text());
        //$('.temp span.fahr').text($('p.ctempmaxfahr-1').text());
        $('.minSide').text($('a.min-1').text()).append(" &deg;C");
        $('.maxSide').text($('a.max-1').text()).append(" &deg;C");
        $('.humiditySide').text($('a.humidity-1').text()).append("&#37;");
        $('.cloudiSide').text($('a.cloudi-1').text());
        $('.windDirecSide').text($('a.windDirec-1').text());
        $('.windSpeedSide').text($('a.windSpeed-1').text()).append(" km/h &nbsp; | &nbsp; ");
        $('.windSpeedKnotsSide').text($('a.windSpeedknots-1').text()).append(" kt");
        $('.windGustSide').text($('a.windGust-1').text());
        $('.sunriseSide').text($('a.sunrise-1').text()).append(" /");
        $('.sunsetSide').text($('a.sunset-1').text());
        $('.PrecipitationPropabilitySide').text($('a.precipitationPropability-1').text()).append(" %");
        $('.PrecipitationAmountSide').text($('a.precipitationAmount-1').text()).append(" mm");

        if ($('.corf').text() == 'F') {
            $('.temp span.fahr').text($('p.ctempmaxfahr-1').text());
            $('.minSide').text($('a.minF-1').text()).append(" &deg;F");
            $('.maxSide').text($('a.maxF-1').text()).append(" &deg;F");
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
        } else if ($('.corf').text() == 'C') {
            $('.temp span.celsi').text($('p.ctempmax-1').text());
            $('.minSide').text($('a.min-1').text()).append(" &deg;C");
            $('.maxSide').text($('a.max-1').text()).append(" &deg;C");
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
        }
    });

    $('.day-2').on('click', function() {
        var day = $('h4.cday-2').text();
        $('.dayDesc').text($('h4.cday-2').text());
        $('.dayDesc2').text($('h4.cday-2').text());
        //$('.describ').text($('a.description-2').text());
        //$('.temp span.celsi').text($('p.ctempmax-2').text());
        //$('.temp span.fahr').text($('p.ctempmaxfahr-2').text());
        $('.minSide').text($('a.min-2').text()).append(" &deg;C");
        $('.maxSide').text($('a.max-2').text()).append(" &deg;C");
        $('.humiditySide').text($('a.humidity-2').text()).append("&#37;");
        $('.cloudiSide').text($('a.cloudi-2').text());
        $('.windDirecSide').text($('a.windDirec-2').text());
        $('.windSpeedSide').text($('a.windSpeed-2').text()).append(" km/h &nbsp; | &nbsp; ");
        $('.windSpeedKnotsSide').text($('a.windSpeedknots-2').text()).append(" kt");
        $('.windGustSide').text($('a.windGust-2').text());
        $('.sunriseSide').text($('a.sunrise-2').text()).append(" /");
        $('.sunsetSide').text($('a.sunset-2').text());
        $('.PrecipitationPropabilitySide').text($('a.precipitationPropability-2').text()).append(" %");
        $('.PrecipitationAmountSide').text($('a.precipitationAmount-2').text()).append(" mm");

        if ($('.corf').text() == 'F') {
            $('.temp span.fahr').text($('p.ctempmaxfahr-2').text());
            $('.minSide').text($('a.minF-2').text()).append(" &deg;F");
            $('.maxSide').text($('a.maxF-2').text()).append(" &deg;F");
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
        } else if ($('.corf').text() == 'C') {
            $('.temp span.celsi').text($('p.ctempmax-2').text());
            $('.minSide').text($('a.min-2').text()).append(" &deg;C");
            $('.maxSide').text($('a.max-2').text()).append(" &deg;C");
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
        }
    });

    $('.day-3').on('click', function() {
        var day = $('h4.cday-3').text();
        $('.dayDesc').text($('h4.cday-3').text());
        $('.dayDesc2').text($('h4.cday-3').text());
        //$('.describ').text($('a.description-3').text());
        //$('.temp span.celsi').text($('p.ctempmax-3').text());
        //$('.temp span.fahr').text($('p.ctempmaxfahr-3').text());
        $('.minSide').text($('a.min-3').text()).append(" &deg;C");
        $('.maxSide').text($('a.max-3').text()).append(" &deg;C");
        $('.humiditySide').text($('a.humidity-3').text()).append("&#37;");
        $('.cloudiSide').text($('a.cloudi-3').text());
        $('.windDirecSide').text($('a.windDirec-3').text());
        $('.windSpeedSide').text($('a.windSpeed-3').text()).append(" km/h &nbsp; | &nbsp; ");
        $('.windSpeedKnotsSide').text($('a.windSpeedknots-3').text()).append(" kt");
        $('.windGustSide').text($('a.windGust-3').text());
        $('.sunriseSide').text($('a.sunrise-3').text()).append(" /");
        $('.sunsetSide').text($('a.sunset-3').text());
        $('.PrecipitationPropabilitySide').text($('a.precipitationPropability-3').text()).append(" %");
        $('.PrecipitationAmountSide').text($('a.precipitationAmount-3').text()).append(" mm");

        if ($('.corf').text() == 'F') {
            $('.temp span.fahr').text($('p.ctempmaxfahr-3').text());
            $('.minSide').text($('a.minF-3').text()).append(" &deg;F");
            $('.maxSide').text($('a.maxF-3').text()).append(" &deg;F");
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
        } else if ($('.corf').text() == 'C') {
            $('.temp span.celsi').text($('p.ctempmax-3').text());
            $('.minSide').text($('a.min-3').text()).append(" &deg;C");
            $('.maxSide').text($('a.max-3').text()).append(" &deg;C");
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
        }
    });

    $('.day-4').on('click', function() {
        var day = $('h4.cday-4').text();
        $('.dayDesc').text($('h4.cday-4').text());
        $('.dayDesc2').text($('h4.cday-4').text());
        //$('.describ').text($('a.description-4').text());
        //$('.temp span.celsi').text($('p.ctempmax-4').text());
        //$('.temp span.fahr').text($('p.ctempmaxfahr-4').text());
        $('.minSide').text($('a.min-4').text()).append(" &deg;C");
        $('.maxSide').text($('a.max-4').text()).append(" &deg;C");
        $('.humiditySide').text($('a.humidity-4').text()).append("&#37;");
        $('.cloudiSide').text($('a.cloudi-4').text());
        $('.windDirecSide').text($('a.windDirec-4').text());
        $('.windSpeedSide').text($('a.windSpeed-4').text()).append(" km/h &nbsp; | &nbsp; ");
        $('.windSpeedKnotsSide').text($('a.windSpeedknots-4').text()).append(" kt");
        $('.windGustSide').text($('a.windGust-4').text());
        $('.sunriseSide').text($('a.sunrise-4').text()).append(" /");
        $('.sunsetSide').text($('a.sunset-4').text());
        $('.PrecipitationPropabilitySide').text($('a.precipitationPropability-4').text()).append(" %");
        $('.PrecipitationAmountSide').text($('a.precipitationAmount-4').text()).append(" mm");

        if ($('.corf').text() == 'F') {
            $('.temp span.fahr').text($('p.ctempmaxfahr-4').text());
            $('.minSide').text($('a.minF-4').text()).append(" &deg;F");
            $('.maxSide').text($('a.maxF-4').text()).append(" &deg;F");
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
        } else if ($('.corf').text() == 'C') {
            $('.temp span.celsi').text($('p.ctempmax-4').text());
            $('.minSide').text($('a.min-4').text()).append(" &deg;C");
            $('.maxSide').text($('a.max-4').text()).append(" &deg;C");
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
        }
    });

    $('.day-5').on('click', function() {
        var day = $('h4.cday-5').text();
        $('.dayDesc').text($('h4.cday-5').text());
        $('.dayDesc2').text($('h4.cday-5').text());
        //$('.describ').text($('a.description-5').text());
        //$('.temp span.celsi').text($('p.ctempmax-5').text());
        //$('.temp span.fahr').text($('p.ctempmaxfahr-5').text());
        $('.minSide').text($('a.min-5').text()).append(" &deg;C");
        $('.maxSide').text($('a.max-5').text()).append(" &deg;C");
        $('.humiditySide').text($('a.humidity-5').text()).append("&#37;");
        $('.cloudiSide').text($('a.cloudi-5').text());
        $('.windDirecSide').text($('a.windDirec-5').text());
        $('.windSpeedSide').text($('a.windSpeed-5').text()).append(" km/h &nbsp; | &nbsp; ");
        $('.windSpeedKnotsSide').text($('a.windSpeedknots-5').text()).append(" kt");
        $('.windGustSide').text($('a.windGust-5').text());
        $('.sunriseSide').text($('a.sunrise-5').text()).append(" /");
        $('.sunsetSide').text($('a.sunset-5').text());
        $('.PrecipitationPropabilitySide').text($('a.precipitationPropability-5').text()).append(" %");
        $('.PrecipitationAmountSide').text($('a.precipitationAmount-5').text()).append(" mm");

        if ($('.corf').text() == 'F') {
            $('.temp span.fahr').text($('p.ctempmaxfahr-5').text());
            $('.minSide').text($('a.minF-5').text()).append(" &deg;F");
            $('.maxSide').text($('a.maxF-5').text()).append(" &deg;F");
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
        } else if ($('.corf').text() == 'C') {
            $('.temp span.celsi').text($('p.ctempmax-5').text());
            $('.minSide').text($('a.min-5').text()).append(" &deg;C");
            $('.maxSide').text($('a.max-5').text()).append(" &deg;C");
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
        }
    });

    $('.day-6').on('click', function() {
        var day = $('h4.cday-6').text();
        $('.dayDesc').text($('h4.cday-6').text());
        $('.dayDesc2').text($('h4.cday-6').text());
        //$('.describ').text($('a.description-6').text());
        //$('.temp span.celsi').text($('p.ctempmax-6').text());
        //$('.temp span.fahr').text($('p.ctempmaxfahr-6').text());
        $('.minSide').text($('a.min-6').text()).append(" &deg;C");
        $('.maxSide').text($('a.max-6').text()).append(" &deg;C");
        $('.humiditySide').text($('a.humidity-6').text()).append("&#37;");
        $('.cloudiSide').text($('a.cloudi-6').text());
        $('.windDirecSide').text($('a.windDirec-6').text());
        $('.windSpeedSide').text($('a.windSpeed-6').text()).append(" km/h &nbsp; | &nbsp; ");
        $('.windSpeedKnotsSide').text($('a.windSpeedknots-6').text()).append(" kt");
        $('.windGustSide').text($('a.windGust-6').text());
        $('.sunriseSide').text($('a.sunrise-6').text()).append(" /");
        $('.sunsetSide').text($('a.sunset-6').text());
        $('.PrecipitationPropabilitySide').text($('a.precipitationPropability-6').text()).append(" %");
        $('.PrecipitationAmountSide').text($('a.precipitationAmount-6').text()).append(" mm");

        if ($('.corf').text() == 'F') {
            $('.temp span.fahr').text($('p.ctempmaxfahr-6').text());
            $('.minSide').text($('a.minF-6').text()).append(" &deg;F");
            $('.maxSide').text($('a.maxF-6').text()).append(" &deg;F");
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
        } else if ($('.corf').text() == 'C') {
            $('.temp span.celsi').text($('p.ctempmax-6').text());
            $('.minSide').text($('a.min-6').text()).append(" &deg;C");
            $('.maxSide').text($('a.max-6').text()).append(" &deg;C");
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
        }
    });

    //$('.day-7').on('click', function () {
    //    var day = $('h4.cday-7').text();
    //    $('.currentday').text($('h4.cday-7').text());
    //    $('.describ').text($('a.description-7').text());
    //    $('.temp').text($('p.ctemp-7').text()).append("<sup> &deg;C </sup>");
    //    $('.humiditySide').text($('a.humidity-7').text()).append("&#37;");
    //    $('.minSide').text($('a.min-7').text()).append(" &deg;C");
    //    $('.maxSide').text($('a.max-7').text()).append(" &deg;C");
    //    $('.cloudiSide').text($('a.cloudi-7').text());
    //    $('.windDirecSide').text($('a.windDirec-7').text()).append(" &deg;");
    //    $('.windSpeedSide').text($('a.windSpeed-7').text()).append(" km/h");
    //    $('.windGustSide').text($('a.windGust-7').text());
    //    $('.sunriseSide').text($('a.sunrise-7').text());
    //    $('.sunsetSide').text($('a.sunset-7').text());
    //});


});