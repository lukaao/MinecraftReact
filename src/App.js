import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {
  const times = [
    {
      nome: "Invasores",
      corPrimaria: "#527743",
      corSegundaria: "#33501e",
      corFundo: "#696868",
    },
    {
      nome: "Defensores",
      corPrimaria: "#33501e",
      corSegundaria: "#527743",
      corFundo: "#B2B2B2",
    },
  ];

  const inicial = [
    {
      nome: "CREEPER",
      cargo: "Duelista",
      imagem:
        "https://cdn.discordapp.com/attachments/997555737490370611/1122637895325466745/creeper.png",
      time: times[0].nome,
    },
    {
      nome: "ENDERMAN",
      cargo: "Estrategista",
      imagem:
        "https://cdn.discordapp.com/attachments/997555737490370611/1122637919212028074/enderman.png",
      time: times[0].nome,
    },
    {
      nome: "ZUMBI",
      cargo: "Duelista",
      imagem:
        "https://cdn.discordapp.com/attachments/997555737490370611/1123004101534416936/aZumbi.png",
      time: times[0].nome,
    },

    {
      nome: "LUKAAO",
      cargo: "Duelista/Estrategista",
      imagem:
        "	https://cdn.discordapp.com/attachments/997555737490370611/1122596987427110953/lukaaominecard.png",
      time: times[1].nome,
    },

    {
      nome: "CLARINHA",
      cargo: "Suporte",
      imagem:
        "https://cdn.discordapp.com/attachments/997555737490370611/1122596951196709035/claraminecard.png",
      time: times[1].nome,
    },
    {
      nome: "PAULIIN",
      cargo: "Duelista",
      imagem:
        "https://cdn.discordapp.com/attachments/997555737490370611/1123047365008445520/paulin.png",
      time: times[1].nome,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          corFundo={time.corFundo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
