
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function BasicExample({player}) {
  return (
    <Col>
    <Card className='legendcard d-flex align-items-center justify-content-center'   style={{ width: '18rem' }}>
      <Card.Img variant="top" src={player.img} />
    </Card>
    </Col>
  );
}

export default BasicExample;