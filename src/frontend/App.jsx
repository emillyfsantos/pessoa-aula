import { useState } from "react";
import "./App.css";

function App() {
  const [formValores, setFormValores] = useState({
    nome: "",
    idade: "",
    cpf: "",
  });

  const handleChange = (e) => {
    setFormValores({
      ...formValores,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Dados a serem enviados", formValores);

      const response = await fetch(
        "http://localhost:3000/cadastrarPessoa",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValores),
        }
      );

      const json = await response.json();
      console.log(response);
      console.log(json);
    } catch (err) {
      console.error("Erro ao enviar", err);
    }
  };

  return (
    <div className="App">
      <h1>Cadastro de Pessoas</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formValores.nome}
          onChange={handleChange}
        />

        <br />

        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={formValores.cpf}
          onChange={handleChange}
        />

        <br />

        <input
          type="text"
          name="idade"
          placeholder="Idade"
          value={formValores.idade}
          onChange={handleChange}
        />

        <br />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default App;