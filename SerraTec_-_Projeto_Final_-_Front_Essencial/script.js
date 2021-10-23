const urlPesquisa = "https://randomuser.me/api/?results=5";

const consultarDados = () => {
	fetch(urlPesquisa)
		.then((resposta) => resposta.json())
		.then((resultado) => {
			

			for (let i = 0; i < resultado.results.length; i++) {
				const nome = resultado.results[i].name.first;
				const sobrenome = resultado.results[i].name.last;
				const nomeCompleto = `<h5 class="card-title">${
					nome + " " + sobrenome
				} </h5>`;
				document.getElementById(`nome-${i}`).innerHTML = nomeCompleto;
				//VERSÃO PARA CARD
				// const img = `<img src="${resultado.results[i].picture.large
				// 	}" class="card-img-top" alt= ${"candidato" + i
				// 	} />`;

				const img = `<img src=${
					resultado.results[i].picture.large
				} class="d-block w-100" style = "margin-top: 15px; border-radius: 5px;" alt= ${"candidato" + i} />`;
				document.getElementById(`img-${i}`).innerHTML = img;
				

				const desc = resultado.results[i].location.timezone.description;
				const replaceDesc = `<p class="card-text" >${
					"Localidade: " + desc
				}</p>`;
				document.getElementById(`desc-${i}`).innerHTML = replaceDesc;
				
			}
		});
};
