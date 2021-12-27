function setActiveStyle(colorName) {
    $(".alternate-style").attr("disabled", "true");
    $(".alternate-style[title=" + colorName + "]").removeAttr("disabled", "true");
}

$(".toggle-style-switcher").click(function () {
    $(".style-switcher").toggleClass("open");
});