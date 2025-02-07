import { Content } from "../UI/Content";
import { Card } from "../UI/Card";
import { Row } from "../UI/Row";
import { Col } from "../UI/Col";

export function HomeGeneral() {
  return (
    <Content isTransparent>
      <Row>
        <Col width="70%">
          <Row>
            <Card></Card>
            <Card></Card>
          </Row>

          <Row>
            <Card></Card>
          </Row>
        </Col>

        <Col width="25%">
          <Row>
            <Card></Card>
          </Row>
        </Col>
      </Row>
    </Content>
  );
}
