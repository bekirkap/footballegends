import { Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import LegendCard from './LegendCard';
import  {data} from "../../data"

function SizesExample() {



  console.log(data);
  return (
    <Container className=' m-5 d-flex align-items-center justify-content-center flex-column  '>
      <InputGroup className="mb-3 w-75 " type="search">
        <Form.Control type='search'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Row className=' justify-content-center gap-2'>
        {data.map(player=>(

          <LegendCard key={player.id} player={player}/>

        ))}
    </Row>
    </Container>
  );
}

export default SizesExample;