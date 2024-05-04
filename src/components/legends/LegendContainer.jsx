import { Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import LegendCard from './LegendCard';
import  {data} from "../../data"
import { useState } from 'react';

function SizesExample() {
const [search,setSearch]= useState("")
const handleChange = (e) =>{
  setSearch(e.target.value)
}
 const filteredData = data.filter(item => item.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))

  return (
    <Container className=' m-5 d-flex align-items-center justify-content-center flex-column  '>
      <InputGroup className="mb-3 w-75 " type="search" onChange={handleChange}>
        <Form.Control type='search'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Row className=' justify-content-center gap-2'>
        {filteredData.map(player=>(

          <LegendCard key={player.id} player={player}/>

        ))}
    </Row>
    </Container>
  );
}

export default SizesExample;