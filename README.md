# COMO RODAR O PROJETO?

Você pode clica [aqui](https://ana-web-ui.github.io/CP-API/) ou clonar o projeto e abrir o arquivo index.html e clicar no botão do live server (Caso tenha essa extensão, se não tiver apenas abaixa na extensões do VSCODE)



# RACIOCÍNIO LÓGICO

O objetivo do projeto é inserir no HTML os dados trazidos pela API.

Primeiramente, foi definido os recursos necessários, segundo a documentação da API, para que seja realizado o FETCH.

Diante disso, após o usuário clicar no botão exibido na página web, ocorre uma requisição para a API trazer os dados e para que esses dados sejam exibidos na página utilizamos uma funcão assíncrona para que haja tempo de os dados sejam carregados de forma completa. Ademais, o ID do usuário não pode ser igual a 0 porque não há esse dado, assim somamos +1 para que seja evitado esse erro.

Após esses dados estarem disponíveis, organizamos através da classe para que ao utilizar esses dados sejam intuitivos, como fizemos ao inserir no HTML através do innerHTML



# O QUE CADA MEMBRO FEZ?

## Ana
Responsável pela criação do repositório e estruturar e estilizar com HTML e CSS

## Caio
Responsável por trazer os dados da API e mostrar na tela do navegador

## Kevyn
Estilizou e estruturou com HTML e CSS



# COMO O CÓDIGO FUNCIONA?

Quando o usuário clicar no botão, haverá uma requisição feita para a API que busca um POST especificado pelo ID, que é um número sorteado, e ao chegar sua resposta é inserido no HTML os dados retornados
