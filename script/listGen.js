$(document).ready(function () {
    let listArray = ['Nome macchina locale personale',
        'Nome macchina locale Benedetto',
        'Outlook',
        'Utenza DOD personale',
        'Utenza DOD Benedetto'];

    for (let index = 0; index < listArray.length; index++) {
        $('#listContainer').append('<div class="list-group" id="list-tab" role="tablist"></div>');
    }
    $('.list-group').each(function (i, e) {
        $('<a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home"></a>')
            .text(listArray[i])
            .appendTo(this);
    });
    let list = [
        "Alessandro",
        "Andrea",
        "Giuseppe"
    ]
    $('<ul id="myUL" class="listContainer"></ul>').appendTo('.ciao');
    list.forEach(element => {
        $('<li></li>').text(element).appendTo('.listContainer');
    });
});