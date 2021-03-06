import React from "react";
import { Card } from "react-bootstrap";
import { BiCurrentLocation, BiMaleSign, BiFemaleSign } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useHistory } from "react-router-dom";
import "../pages/Adocao_animais/Adocao_animais.css";

function ComponenteAdocao({ animal }) {
  const history = useHistory();

  function adotar() {
    history.push({ pathname: "/animal", state: { animal } });
  }

  function Sexo() {
    if (animal.sexo === "Macho") return <BiMaleSign />;
    else return <BiFemaleSign />;
  }

  return (
    <Card
      style={{ width: "18rem", cursor: "pointer", height: "auto" }}
      onClick={() => adotar()}
      className="sombra_AdocaoAnimais"
    >
      <Card.Img
        variant="top"
        src={animal.imagem[0]}
        style={{ borderRadius: "30px", height: "175px", objectFit: "cover" }}
      />
      <Card.Body className="AdoteJaCardBody">
        <Card.Text>
          <div className="organizacao_AdocaoAnimais">
            <div className="nome_AdocaoAnimais">{animal.nome}</div>
            <div className="tamanhoSexo_AdocaoAnimais">
              <p className="tamanho_AdocaoAnimais">{animal.tamanho}|</p>
              <IconContext.Provider value={{ size: "1.5rem" }}>
                {Sexo()}
              </IconContext.Provider>
            </div>
          </div>
        </Card.Text>
        <Card.Text>
          <div className="local_AdocaoAnimais">
            <BiCurrentLocation />
            {animal.local}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ComponenteAdocao;
