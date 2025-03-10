# Find Movies App

Find Movie App é uma aplicação de busca e exibição de filmes, utilizando a API The Movie Database (TMDB) para buscar informações sobre filmes e o Appwrite para armazenar e recuperar dados de buscas populares. A aplicação permite que os usuários pesquisem filmes, descubram tendências populares e futuramente visualizem detalhes sobre os filmes.

![Preview da Aplicação](./public/preview.png)

## Tecnologias Utilizadas

- **React.js** para a interface do usuário
- **Appwrite** para armazenamento de buscas populares
- **Tailwind CSS** para estilização
- **Flowbite** para componentes de UI, incluindo o indicador de carregamento
- **TMDB API** para buscar informações sobre filmes
- **React Hooks** como `useEffect`, `useState` e `useDebounce` da `react-use`

## Configuração do Ambiente

1. Crie um arquivo `.env` na raiz do projeto e adicione:

```
VITE_TMDB_API_KEY=SEU_API_KEY

```

2. Instale as dependências:

```
npm install
```

3. Inicie a aplicação:

```
npm run dev
```

## Funcionalidades

### Busca de Filmes

- O usuário pode buscar filmes pelo nome.
- A pesquisa é feita com debounce de 500ms para otimizar requisições.
- Resultados são exibidos dinamicamente conforme a digitação.

### Exibição de Filmes Populares

- Filmes populares são carregados inicialmente utilizando a API do TMDB.
- Um ranking de buscas mais populares é armazenado no Appwrite.

### Contador de Buscas

- Sempre que um filme é buscado, a quantidade de vezes que foi pesquisado é registrada no Appwrite.
- Os filmes mais buscados aparecem em uma seção especial "Trending Movies".

### Detalhes do Filme

<!-- - Ao clicar em um filme, o usuário pode visualizar mais detalhes, como sinopse, elenco e avaliações. -->

- O design é responsivo para uma experiência fluida em diferentes dispositivos.

## Componentes

### `App.jsx`

- Componente principal que gerencia o estado global da aplicação.
- Faz chamadas à API do TMDB e ao Appwrite.

### `Search.jsx`

- Campo de pesquisa interativo.
- Atualiza dinamicamente o termo de busca.

### `Spinner.jsx`

- Exibe um indicador de carregamento enquanto os dados estão sendo buscados.
- Utiliza o Flowbite para um design otimizado.

### `MovieCard.jsx`

- Exibe informações de um filme, como título, avaliação e data de lançamento.

### `appwrite.js`

- Gerencia interação com o banco de dados Appwrite para armazenar e recuperar buscas populares.

### `Footer.jsx`

- Mostra informações sobre autor e como contata-lo.

## Melhorias Futuras

- Adicionar paginação para exibir mais resultados.
- Implementar autenticação para salvar listas personalizadas.
- Adicionar um sistema de recomendações personalizadas com base nas pesquisas.
