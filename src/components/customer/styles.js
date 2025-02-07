import styled from "styled-components";
import { BsPersonVcard, BsFillTelephonePlusFill } from "react-icons/bs";
import { ImLocation, ImInfo } from "react-icons/im";

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 3rem;
  padding-right: 16px;
  padding-left: 16px;
  padding-bottom: 3rem;
  padding-top: 16px;
`

export const InfoPersonIcon = styled(BsPersonVcard)`

`

export const ContactsIcon = styled(BsFillTelephonePlusFill)`
  
`

export const LocationIcon = styled(ImLocation)`
  
`

export const AdditionalInfoIcon = styled(ImInfo)`
  
`