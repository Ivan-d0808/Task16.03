// for product
$(document).ready(function() {
    $(".f-btn").click(function() {
        $(".filter").addClass("hide")
        var value = $(this).attr("id");
        $("." + value).removeClass("hide")
        if (value == "all") {
            $(".filter").removeClass("hide");
        }

        $(".f-btn").click(function() {
            $(this).addClass("active")
        });
    });
});