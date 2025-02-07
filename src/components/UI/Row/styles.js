import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: ${props => props.$nowrap ? 'nowrap' : 'wrap'};
  flex: 1 1 ${props => props.$flexBasic || "250px"};
`