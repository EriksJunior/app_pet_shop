import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding: ${props => props.$padding || "1rem 1rem 1rem 2rem"};
  border-radius: 15px;
  overflow: auto;
  margin-top: ${props => props.$marginTop || "1rem"}
`