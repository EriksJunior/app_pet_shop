import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { GiDogHouse, GiSittingDog, GiDogBowl } from "react-icons/gi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as N from "./styles";

export function SideBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <N.Container>
        <N.IconOpenorClose
          style={{
            width: open ? "13rem" : "3rem",
            transition: "ease-in 500ms",
          }}
          onClick={() => setOpen(!open)}
        >
          <IoArrowForwardCircleOutline
            size={30}
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "ease-in 500ms",
            }}
          />
        </N.IconOpenorClose>
        <N.ContentBtn>
          <N.ButtonSide onClick={() => navigate("/")}>
            <GiDogHouse size={20} />
            <N.TextSide
              style={{
                fontSize: open ? "16px" : "0px",
                paddingLeft: open ? "10px" : "0px",
                transition: "ease-in 500ms",
              }}
            >
              Início
            </N.TextSide>
          </N.ButtonSide>

          <N.ButtonSide onClick={() => navigate("/customer")}>
            <GiSittingDog size={20} />
            <N.TextSide
              style={{
                fontSize: open ? "16px" : "0px",
                paddingLeft: open ? "10px" : "0px",
                transition: "ease-in 500ms",
              }}
            >
              Cadastros
            </N.TextSide>
          </N.ButtonSide>

          <N.ButtonSide onClick={() => navigate("/registers")}>
            <GiDogBowl size={20} />
            <N.TextSide
              style={{
                fontSize: open ? "16px" : "0px",
                paddingLeft: open ? "10px" : "0px",
                transition: "ease-in 500ms",
              }}
            >
              Cadastros Gerais
            </N.TextSide>
          </N.ButtonSide>

          <N.ButtonSide onClick={() => navigate("/schedule")}>
            <GiDogBowl size={20} />
            <N.TextSide
              style={{
                fontSize: open ? "16px" : "0px",
                paddingLeft: open ? "10px" : "0px",
                transition: "ease-in 500ms",
              }}
            >
              Agenda
            </N.TextSide>
          </N.ButtonSide>
        </N.ContentBtn>
      </N.Container>
      <N.NavBar>
        <N.TextCompany> Bem vindo PetShop LTDA</N.TextCompany>
      </N.NavBar>
    </>
  );
}
