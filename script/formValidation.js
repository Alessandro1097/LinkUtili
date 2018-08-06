$(document).ready(function () {
    $('#check').click(function () {
        $(this).is(':checked') ? $('#test-input').attr('type', 'text') : $('#test-input').attr('type', 'password');
    });
});