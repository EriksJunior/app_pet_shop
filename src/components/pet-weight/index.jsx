import * as Pw from "./style";

import { Card } from "../UI/Card";

import { GiWeightScale } from "react-icons/gi";

import { useRef, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { InputLabel } from "../UI/Inputs/InputText";
import { Row } from "../UI/Row";
import { InputTextArea } from "../UI/Inputs/TextArea";

export function PetWeight() {
  const { theme } = useContext(ThemeContext);

  const [petWight, setPetWeight] = useState({
    nome: "",
    observacoes: "",
  });

  const payload = {
    nome: useRef(""),
    observacoes: useRef(""),
  };

  return (
    <Card flexBasic="auto" notHoverShadow theme={theme}>
      <Pw.Header>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <GiWeightScale size={30} color="#b9832d" />

          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                margin: 0,
                color: "#b9832d",
                letterSpacing: "0.1rem",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Peso - <span style={{ fontSize: "1rem" }}>28/10 19:42</span>
            </p>
          </div>
        </div>
      </Pw.Header>

      <Row flexBasic={"0"}>
        <div style={{ width: "150px" }}>
          <InputLabel
            name={"kg"}
            textLabel={"KG"}
            handleChange={(e) =>
              setPetWeight({ ...petWight, nome: e.target.value })
            }
            innerRef={payload.nome}
            value={petWight.nome}
          />
        </div>

        <div style={{ width: "100%" }}>
          <InputTextArea
            name={"observacao"}
            textLabel={"Observação"}
            handleChange={(e) =>
              setPetWeight({ ...petWight, observacoes: e.target.value })
            }
            innerRef={payload.observacoes}
            value={petWight.observacoes}
          />
        </div>
      </Row>
    </Card>
  );
}
