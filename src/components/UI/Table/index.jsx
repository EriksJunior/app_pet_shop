/* eslint-disable react/prop-types */
import { DateTime } from "luxon";
import { useContext } from "react";
import { ThemeContext } from "../../../context/theme";

import { CustomLabel } from "../Label";
import { DropDown } from "../DropDown";
import { defaultActions, defaultTable } from "./common";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

import * as T from "./style";

export function Table({
  items = defaultTable,
  dropDownItems = defaultActions,
  children,
  enablePaginate = false,
  page = 1,
  nextPage,
  previousPage,
  enableTitleTable = false,
  titleTable = "Default Title table",
  maxHeight = "500px",
  valueToJoinHtmlFor = "default",
}) {
  const { theme } = useContext(ThemeContext);
  
  return (
    <T.Container>
      <div>
        <div style={{ padding: "0 0.5rem" }}>{children}</div>

        {enableTitleTable && (
          <div style={{ padding: "0 0.5rem" }}>
            <CustomLabel text={titleTable} fontSize={"16px"} />
          </div>
        )}

        <T.Table $theme={theme} $maxHeight={maxHeight}>
          <thead>
            <tr>
              {items.headers.map((header) => (
                <th key={header.key}>{header.text}</th>
              ))}

              <th style={{ width: "20%" }}>Ações</th>
            </tr>
          </thead>

          {items.body.length > 0 ? (
            <tbody>
              {items.body.map((item, index) => (
                <tr key={item?.id || index}>
                  {items.headers.map((_, idx) => (
                    <td key={idx} style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                      {DateTime.fromISO(item[items.headers[idx]?.key])?.isValid
                        ? item[items.headers[idx]?.key]
                            ?.split("-")
                            ?.reverse()
                            ?.join("/")
                        : item[items.headers[idx]?.key]}
                    </td>
                  ))}

                  <td style={{ width: "20%", textAlign: "center" }}>
                    <DropDown
                      items={dropDownItems}
                      htmlFor={`item-${index}-${valueToJoinHtmlFor}`}
                      value={item?.id}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody
              className="noSearch"
              style={{ overflow: "hidden", height: "100%", maxHeight: "100%" }}
            ></tbody>
          )}
        </T.Table>
      </div>

      {enablePaginate && (
        <T.ContainerPaginate>
          <T.ContentPaginate>
            {page > 1 && (
              <span onClick={previousPage}>
                <IoMdArrowRoundBack size={18} />
              </span>
            )}

            {(items.body.length > 0 || items.body.length === 0) && (
              <span
                style={{
                  fontWeight: "600",
                  backgroundColor: "white",
                  color: "#66a3b7",
                }}
              >
                {page}
              </span>
            )}

            {items.body.length === 9 && (
              <span onClick={nextPage}>
                <IoMdArrowRoundForward size={18} />
              </span>
            )}
          </T.ContentPaginate>
        </T.ContainerPaginate>
      )}
    </T.Container>
  );
}
