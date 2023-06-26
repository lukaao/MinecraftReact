import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return props.colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundColor: props.corPrimaria }}>
      <h3 style={{ borderColor: "white" }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador, indice) => {
          return (
            <Colaborador
              corDeFundo={props.corPrimaria}
              key={indice}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
