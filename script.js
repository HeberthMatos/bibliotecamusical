function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  const section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa e converte para minúsculas
  const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";

  // Itera sobre cada dado da array 'dados' e verifica se o termo de pesquisa está presente
  dados.forEach(dado => {
    const { titulo, descricao, tags } = dado; // Desestruturação para melhor legibilidade
    if (titulo.toLowerCase().includes(campoPesquisa) ||
        descricao.toLowerCase().includes(campoPesquisa) ||
        tags.toLowerCase().includes(campoPesquisa)) {
      // Constrói o HTML para cada resultado
      resultados += `
      <div class="item-resultado">
      <h2>${dado.titulo}</h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <div class="social-media">
      <a href=${dado.instagram} target="_blank">Instagram</a>
      <a href=${dado.spotify} target="_blank">Spotify</a>
      </div>
      </div>
      `;
    }
  });

  // Atualiza o conteúdo da seção de resultados
  if (!resultados) {
  resultados = "<p>Nenhuma banda foi encontrda</p>"
  }

  // Atribui o HTML formatado à seção de resultados
  section.innerHTML = resultados;
}
