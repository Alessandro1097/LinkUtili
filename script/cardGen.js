// dynamic function that create the card taking the information throught the objects
$(document).ready(function () {
  let objectCard = [{
    title: "Primo titolo",
    subtitle: "Primo sottotitolo",
    description: "Prima descrizione",
    link: "Primo link"
  },
  {
    title: "Secondo titolo",
    subtitle: "Secondo sottotitolo",
    description: "Seconda descrizione",
    link: "Secondo link"
  },
  {
    title: "Terzo titolo",
    subtitle: "Terzo sottotitolo",
    description: "Terza descrizione",
    link: "Terzo link"
  },
  {
    title: "Quarto titolo",
    subtitle: "Quarto sottotitolo",
    description: "Quarta descrizione",
    link: "Quarto link"
  }
  ]
  for (let index = 0; index < objectCard.length; index++) {
    $('#cardContainer').append('<div class="card mb-3" style="width: 18rem;"><div class="card-body"></div></div>');
  }
  $('.card-body').each(function (i, e) {
    $('<h5 class="card-title"></h5>')
      .attr("id", "id_" + i)
      .text(objectCard[i].title)
      .appendTo(this);
  });
  $('.card-body').each(function (i, e) {
    $('<h6 class="card-subtitle mb-2 text-muted"></h6>')
      .attr("id", "id_" + i)
      .text(objectCard[i].subtitle)
      .appendTo(this);
  });
  $('.card-body').each(function (i, e) {
    $('<p class="card-text"></p>')
      .attr("id", "id_" + i)
      .text(objectCard[i].description)
      .appendTo(this);
  });
  $('.card-body').each(function (i, e) {
    $('<a href="#" class="card-link text-success"></a>')
      .attr("id", "id_" + i)
      .text(objectCard[i].link)
      .appendTo(this);
  });
});