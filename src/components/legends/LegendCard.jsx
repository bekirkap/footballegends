
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './container.css'
import { useState } from 'react';

function BasicExample({player}) {

  const [show, setShow] = useState(true)
  if(show){
    return (
      <Col>
      <Card className='legendcard d-flex align-items-center justify-content-center' onClick={()=> setShow(!show)}   style={{width: '18rem' }}>
        <Card.Img variant="top" src={player.img} />
      </Card>
      </Col>
    );
  }
    else{
      return (
        <Col>
        <Card className='legendcard2 d-flex align-items-center justify-content-center bg position-relative ' onClick={()=> setShow(!show)}   style={{width: '18rem' }}>
          <Card.Img variant="top" src={player.img}/>
          <div className=' position-absolute text-center text-primary  '>
            <p>{player.name}</p>
            <ul>{player.statistics.map(stats=> <li>{stats}</li>)}</ul>
            <p>{player.official_career}</p>
          </div>
        </Card>
        </Col>
      );
    }
    // return (
    //   <Col>
    //   <Card className='legendcard d-flex align-items-center justify-content-center' onClick={()=> setShow(!show)}   style={{width: '18rem' }}>
    //     <Card.Img variant="top" src={player.img} />
    //   </Card>
    //   </Col>
    // );
}


export default BasicExample;