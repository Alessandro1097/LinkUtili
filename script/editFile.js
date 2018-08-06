// This defines the data type of our data. application/octet-stream
// makes the browser download the data. Other properties can be added
// while separated by semicolons. After the coma (,) follows the data
var prefix = 'data:application/octet-stream;charset=utf-8;base64,';
$('#text').on('keyup', function () {
    if ($(this).val()) {
        // Set the URL by appending the base64 form of your text. Keep newlines in mind
        $('#save').attr('href', prefix + btoa($(this).val().replace(/\n/g, '\r\n')));
        // For browsers that support it, you can even set the filename of the 
        // generated 'download'
        $('#save').attr('download', 'text.txt');
    } else {
        $('#save').removeAttr('href');
        $('#save').removeAttr('download');
    }
});