import React, { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [seachTerm, setSeachTerm] = useState("teste");

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="" />
          <h1>
            Encontre <span className="text-gradient">Filmes</span> Dos Quais
            Você Gosta Sem Complicações
          </h1>
          <Search seachTerm={seachTerm} setSeachTerm={setSeachTerm} />
        </header>
      </div>
    </main>
  );
};

export default App;
