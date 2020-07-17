const textbox;
const classname;

function lettersOnly(input) {
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "");
    textbox = document.getElementById('fullname');
}

function onload() {
    //Get value.
    classname = document.getElementById('selectclass');
}