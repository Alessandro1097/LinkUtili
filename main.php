<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0,	minimum-scale=1.0,	maximum-scale=2.0">
  <link rel="stylesheet" type="text/css" href="style/style.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
    crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
    crossorigin="anonymous"></script>
  <script type="text/javascript" src="script/cardGen.js"></script>
  <script type="text/javascript" src="script/listGen.js"></script>
  <script type="text/javascript" src="script/editFile.js"></script>
</head>

<body>
  <?php include 'php/jsonWriter.php';?>

  <div id="fullpage">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Uselex</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
        </ul>
        <form class="form-inline">
          <input class="form-control mr-sm-2 inputSearch" type="search" placeholder="Search" aria-label="Search" id="myInput" onclick="filterName()">
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="ciao">
    </div>
    <div id="linkUtili" class="mx-3 my-4">
      <h1 class="mb-2" id="linkUtili2">Link utili</h1>
      <div class="d-flex justify-content-around flex-wrap mt-4" id="cardContainer"></div>
      <!-- Button trigger modalLink -->
      <button type="button" class="btn btn-outline-success mt-4" data-toggle="modal" data-target="#ModalLink">Aggiungi link</button>
      <!-- modalLink -->
      <div class="modal fade" id="ModalLink" tabindex="-1" role="dialog" aria-labelledby="#ModalLink" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">Crea nuovo link</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="cleanPassword()">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form method="get">
              <div class="modal-body">
                <div class="d-flex">
                  <h6 class="mr-3 col-4">Inserisci il titolo:</h6>
                  <input type="text" name="name" value="" class="col-7" id="inputNewCard1">
                </div>
                <div class="d-flex mt-3">
                  <h6 class="mr-3 col-4">Inserisci il sottotitolo:</h6>
                  <input type="text" name="email" value="" class="col-7" id="inputNewCard2">
                </div>
                <div class="d-flex mt-3">
                  <h6 class="mr-3 col-4">Inserisci una descrizione:</h6>
                  <input type="text" name="mybutton3" value="" class="col-7" id="inputNewCard3">
                </div>
                <div class="d-flex mt-3">
                  <h6 class="mr-3 col-4">Inserisci link:</h6>
                  <input type="text" name="mybutton4" value="" class="col-7" id="inputNewCard4">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="cleanPassword()">Chiudi</button>
                <button type="submit" class="btn btn-success" data-dismiss="modal" onclick="createNewCard()">Salva</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- insert here the account code -->
  </div>
  <script type="text/javascript" src="script/main.js"></script>
  <script type="text/javascript" src="script/formValidation.js"></script>
  <script type="text/javascript" src="script/searchBar.js"></script>
</body>

</html>