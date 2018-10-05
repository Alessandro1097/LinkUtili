var passwords = {
  "passwordUtenzaDoDBenedetto": "Nitto01@",
  "passwordOutlook": "a6f7a11d21Alex1097",
  "passwordUtenzaPersonale": "a6f7a11d21Alex1097"
};

var passWordControl = "a6f7a11d21";

// TODO: In futuro rendere la funzione getPassword generale
function getPassword() {
  let valuePass = $("#inputThatGetPassword").val();
  if (valuePass == "a6f7a11d21") {
    $("#passParagr").text(passwords.passwordUtenzaDoDBenedetto);
  } else {
    alert("Inserire la password corretta");
  }
}
function getPassword2() {
  let valuePass2 = $("#inputThatGetPassword2").val();
  if (valuePass2 == passWordControl) {
    $("#passParagr2").text(passwords.passwordOutlook);
  } else {
    alert("Inserire la password corretta");
  }
}
function getPassword3() {
  let valuePass3 = $("#inputThatGetPassword3").val();
  if (valuePass3 == "a6f7a11d21") {
    $("#passParagr3").text(passwords.passwordUtenzaPersonale);
  } else {
    alert("Inserire la password corretta");
  }
}

// clean the input value 
function cleanPassword() {
  $("#passParagr").text("");
  $("#passParagr2").text("");
  $("#passParagr3").text("");
  $('#inputThatGetPassword').val("");
  $('#inputThatGetPassword2').val("");
  $('#inputThatGetPassword3').val("");
}

// Make the function more clear
var randomNumber = 1;
// create a new card
function createNewCard() {
  // get value insert by the user
  let titleNewCard = $("#inputNewCard1").val(),
    subtitleNewCard = $("#inputNewCard2").val(),
    descriptionNewCard = $("#inputNewCard3").val(),
    linkNewCard = $("#inputNewCard4").val();
  $("<div />", { id: "product" + randomNumber })
    .addClass("card")
    .css("padding", "17px")
    .css("width", "18rem")
    .css("min-height", "160.67px")
    .appendTo("#cardContainer");
  $('<h5 class="card-title"></h5>')
    .text(titleNewCard)
    .appendTo("#product" + randomNumber);
  $('<h6 class="card-subtitle mb-2 text-muted"></h6>')
    .text(subtitleNewCard)
    .appendTo("#product" + randomNumber);
  $('<p class="card-text"></p>')
    .text(descriptionNewCard)
    .appendTo("#product" + randomNumber
    );
  $('<a class="card-link text-success"></a>')
    .text(linkNewCard)
    .attr("href", linkNewCard)
    .appendTo("#product" + randomNumber);
  randomNumber++;
}
// filter per name
// https://api.jquery.com/focusin/ to show the list when the input has been clicked
$(document).ready(function () {
  function filterName() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myUL");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
});

/*function filterPerName() {
  var input, filter, ul, li, a, i;
  input = $("#myInput").val();
  filter = input.val().toUpperCase();
  ul = $("#myUL").val();
  li = 
}*/