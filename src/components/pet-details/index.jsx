/* eslint-disable react/prop-types */
import * as D from "./styles";

import { Content } from "../UI/Content";
import { Row } from "../UI/Row";
import { Card } from "../UI/Card";
import { PetWeight } from "../pet-weight";

import { BsClipboard2PlusFill } from "react-icons/bs";
import { GiWeightScale } from "react-icons/gi";
import { IoNewspaperSharp } from "react-icons/io5";
import { RiStethoscopeFill } from "react-icons/ri";
import { FaHospital } from "react-icons/fa6";
import { HiBeaker, HiPlus } from "react-icons/hi";

import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { E_THEME } from "../../utils/enums/theme";
import { UsePetDetails } from "./hooks";

export function PetDetails({ petInfo }) {
  const { theme } = useContext(ThemeContext);
  const { showItems, handleShowItems } = UsePetDetails();

  return (
    <Content padding="1rem" marginTop="1rem">
      <D.Header>
        <D.PetName $margin={0}>{petInfo?.nome}</D.PetName>

        {!showItems.options && (
          <D.ContentClose onClick={() => handleShowItems("options")}>
            <D.CloseIcon>
              <HiPlus size={20} style={{ transform: "rotate(45deg)" }} />
            </D.CloseIcon>
          </D.ContentClose>
        )}
      </D.Header>

      {showItems.options && (
        <>
          <Row flexBasic={"0"}>
            <Card between pointer click={() => handleShowItems("treatment")}>
              <D.Items>
                <BsClipboard2PlusFill size={50} color="#0ad4e0" />
                <div style={{ width: "150px" }}>
                  <D.TitleItem $color="#0ad4e0">Atendimentos</D.TitleItem>

                  <D.SubtitleItem $color="#a1a1a1">
                    Realizar agendamento
                  </D.SubtitleItem>
                </div>
              </D.Items>
            </Card>

            <Card between pointer click={() => handleShowItems("weight")}>
              <D.Items>
                <GiWeightScale size={50} color="#b9832d" />
                <div style={{ width: "150px" }}>
                  <D.TitleItem $color="#b9832d">Peso</D.TitleItem>

                  <D.SubtitleItem $color="#a1a1a1">
                    Informe um novo peso
                  </D.SubtitleItem>
                </div>
              </D.Items>
            </Card>

            <Card between pointer click={() => handleShowItems("prescription")}>
              <D.Items>
                <IoNewspaperSharp size={50} color="blueviolet" />
                <div style={{ width: "150px" }}>
                  <D.TitleItem $color="blueviolet">Receita</D.TitleItem>

                  <D.SubtitleItem $color="#a1a1a1">
                    Preencha uma nova receita
                  </D.SubtitleItem>
                </div>
              </D.Items>
            </Card>
          </Row>

          <Row flexBasic={"0"}>
            <Card between pointer click={() => handleShowItems("pathology")}>
              <D.Items>
                <RiStethoscopeFill size={50} color="#47d2a9" />
                <div style={{ width: "150px" }}>
                  <D.TitleItem $color="#47d2a9">Patologia</D.TitleItem>

                  <D.SubtitleItem $color="#a1a1a1">
                    Vincular novas patologias
                  </D.SubtitleItem>
                </div>
              </D.Items>
            </Card>

            <Card
              between
              pointer
              click={() => handleShowItems("hospitalization")}
            >
              <D.Items>
                <FaHospital size={50} color="brown" />
                <div style={{ width: "150px" }}>
                  <D.TitleItem $color="brown">Internação</D.TitleItem>

                  <D.SubtitleItem>Realize uma nova internação</D.SubtitleItem>
                </div>
              </D.Items>
            </Card>

            <Card between pointer click={() => handleShowItems("examination")}>
              <D.Items>
                <HiBeaker
                  size={50}
                  color={theme === E_THEME.lightMode ? "black" : "white"}
                />
                <div style={{ width: "150px" }}>
                  <D.TitleItem
                    $color={theme === E_THEME.lightMode ? "black" : "white"}
                  >
                    Exames
                  </D.TitleItem>

                  <D.SubtitleItem>Preencha um novo exame</D.SubtitleItem>
                </div>
              </D.Items>
            </Card>
          </Row>
        </>
      )}

      {showItems.weight && <PetWeight />}
    </Content>
  );
}
