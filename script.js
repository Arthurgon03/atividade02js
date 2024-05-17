const imagem = document.querySelectorAll("img");


const texto = document.querySelector("#texto");
texto.insertAdjacentHTML('beforebegin', '<p>Texto sobre Balneário Camboriú: </p>');
texto.insertAdjacentHTML('afterend',  '<p>Balneário Camboriú é uma cidade turística no estado de Santa Catarina, no sul do Brasil. É conhecida pelos grandes edifícios e por praias como a Praia Central. <br>Bares, restaurantes e lojas preenchem a Avenida Atlântica, uma avenida movimentada junto à praia. O Parque Unipraias fica na foz do Rio Camboriú e oferece vistas <br> a partir das tirolesas e dos teleféricos. O monumento Cristo Luz, uma enorme estátua de Cristo, contempla a cidade</p>')