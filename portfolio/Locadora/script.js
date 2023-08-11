function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validationTitle = document.forms["register"]["title"].value;
  let validationDirector = document.forms["register"]["director"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationActor = document.forms["register"]["actor"].value;
  let validationImdb = document.forms["register"]["imdb"].value;
  let validationRadio = document.forms["register"]["radio"].value;

  if (validationCod == "") {
    alert("O Campo Código deve ser preenchido");
    return false;
  }
  if (validationTitle == "") {
    alert("O Campo Titulo deve ser preenchido");
    return false;
  }
  if (validationDirector == "") {
    alert("O Campo Diretor deve ser preenchido");
    return false;
  }
  if (validationDate == "") {
    alert("O Campo Lançamento deve ser preenchido");
    return false;
  }
  if (validationActor == "") {
    alert("O Campo Ator-Atriz deve ser preenchido");
    return false;
  }
  if (validationImdb == "") {
    alert("O Campo Imdb deve ser preenchido");
    return false;
  }
  if (validationRadio == "") {
    alert("O Genero deve ser Selecionado");
    return false;
  }
  alert("A validação ocorreu de forma correta");
}

function insert() {
  let cod = document.forms["register"]["cod"].value;
  let title = document.forms["register"]["title"].value;
  let director = document.forms["register"]["director"].value;
  let date = document.forms["register"]["date"].value;
  let actor = document.forms["register"]["actor"].value;
  let imdb = document.forms["register"]["imdb"].value;
  let radio = document.forms["register"]["radio"].value;

  let insert = window.document.getElementById("insertRow");

  insert.innerHTML = `
  <th scope="row">${cod}</th>
  <td>${title}</td>
  <td>${director}</td>
  <td>${date}</td>
  <td>${actor}</td>
  <td>${imdb}</td>
  <td>${radio}</td>
  `;
}
