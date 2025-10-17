// Write your JavaScript code.
$(document).ready(function() {
    $('.hotlineDetails').hide();
    $('.WarningDetails').hide();

    if ($('.warning_list a h4').text() != "No warnings") {
        $(".WarningText").html("<img src='../images/NoWarning.png' />");
        $(".WarningText img").css({
            "background": "#006b32"
        });
    } else {
        $(".WarningText img").css({
            "background": "#C52F30"
        });
    }

    $(".hotlineText img").hover(function() {
            $(".hotlineText img").css("background", "#c28c0f");
        },
        function() {
            $(".hotlineText img").css("background", "#c28c0f");
        });

    $(".hotlineText img").click(function() {
        $(".hotlineDetails").animate({
            width: 'toggle'
        }, 180);
    });

    $(".WarningText img").click(function() {
        $(".WarningDetails").animate({
            width: 'toggle'
        }, 180);
    });


});