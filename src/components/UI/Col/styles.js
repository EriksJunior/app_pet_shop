import styled from "styled-components";

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1 1 ${props => props.$width || "250px"};
`