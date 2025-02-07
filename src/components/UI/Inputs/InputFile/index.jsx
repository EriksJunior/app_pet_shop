/* eslint-disable react/prop-types */
import { useState } from "react";

import { convertFileToBase64 } from "../../../../utils/convertFileToBase64";

import { BiImageAdd } from "react-icons/bi";
import * as I from "./styles";

export function InputFile({ isLarge = true, nameFileMaxWidth = "300px", getValues }) {
  const [payloadImage, setPayloadImage] = useState({
    imagem_nome: "Default image",
    base64: "",
  });

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const imgBase64 = await convertFileToBase64(file);
    const payload = { nome_imagem: file.name, base64: imgBase64 };

    setPayloadImage(payload);

    if (getValues) {
      getValues(payload);
    }
  };

  return (
    <>
      {isLarge && (
        <I.Container>
          <I.Content>
            <I.CustomInputFile htmlFor="inputFile">
              {!payloadImage.base64 ? (
                <BiImageAdd size={100} color="rgb(6 200 211 / 24%)" />
              ) : (
                <img
                  src={payloadImage.base64}
                  alt="image pet"
                  width={190}
                  height={190}
                  style={{ borderRadius: "50%" }}
                />
              )}
            </I.CustomInputFile>

            <I.Input
              id="inputFile"
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleChange}
            />

            <I.NameImage $nameFileMaxWidth={nameFileMaxWidth}>{payloadImage.nome_imagem}</I.NameImage>
          </I.Content>
        </I.Container>
      )}
    </>
  );
}
