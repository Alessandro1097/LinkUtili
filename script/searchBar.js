$(document).ready(function () {
    // show list when input is focus
    $(".inputSearch").focusin(function () {
        $(".listContainer").css("display", "inline");
    });
    // hide list when input is notfocus
    $(".inputSearch").focusout(function () {
        $(".listContainer").css("display", "none");
    });
});