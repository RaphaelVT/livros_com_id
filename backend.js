const prompt = require("prompt-sync") ({sign:true})

let livros = [];

let ultimoId = 1;

function getIndice(id) {
    const indice = livros.findIndex((elemento) => elemento.id == id);
  
    if (indice == -1) {
      console.log("ID inexistente");
    }
    return indice;
  }

  const modelo = (id) => {
    let title = prompt("Digite o titulo do livro: ");
    let author = prompt("Digite o autor do livro: ");
    let year = Number(prompt("Digite o ano do livro: "));
    let genre = prompt("Digite o genêro do livro: ");

    let year_new_versions = [];
  }
  
  if (title !== "" && author !== "" && isNaN(year) && genre !== "") {
    if (id === undefined) {
        return {
            title,
            author,
            year,
            genre,
            id: ultimoId++,
        }
    }
  } else {
    return {
        title,
        author,
        year,
        genre,
        id,
    }
  }
