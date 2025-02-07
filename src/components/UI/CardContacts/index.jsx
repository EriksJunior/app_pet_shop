/* eslint-disable react/prop-types */

import * as C from "./styles";
import { FaInfo } from "react-icons/fa6";

export function CardContacts({
  items = [],
  handleClickDetails,
  handleClickContact,
  showDetails = true,
}) {
  return (
    <C.DisplayContacts>
      {items.body.map((contact) => (
        <C.ContentContacts key={contact.id}>
          <C.ContentImgAndContacts onClick={() => handleClickContact(contact)}>
            <C.ContentImg style={{paddingLeft: '0.3rem'}}>
              <img
                style={{ width: "60px", height: "60px" }}
                src="profileImage.png"
                alt="image contact"
              />
            </C.ContentImg>

            <C.ContentDetails style={{ width: "100%" }}>
              <div>
                <p>{contact.nome}</p>
              </div>
            </C.ContentDetails>

            <C.ContentDetails style={{ width: "50%" }}>
              <div>
                <p>{contact.cpfCnpj}</p>
              </div>
            </C.ContentDetails>
          </C.ContentImgAndContacts>

          {showDetails && (
            <C.ContentInfo onClick={() => handleClickDetails(contact)}>
              <FaInfo className="iconInfo" />
            </C.ContentInfo>
          )}
        </C.ContentContacts>
      ))}
    </C.DisplayContacts>
  );
}
