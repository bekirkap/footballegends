import  {Container}  from "react-bootstrap"
import {Image} from "react-bootstrap"
import pllogo from "../../src/assets/kisspng-201617-premier-league-english-football-league-l-lion-emoji-5b460f07222401.1477875515313180231399.png"
import bundeslogo from "../assets/5bbc307b8739e-46221244b02b1d506f66f2f15675b70e.png"
import serialogo from "../assets/Italian_Serie_A_logo_PNG2.png"
import laligalogo from "../assets/LaLiga.svg"
import stsl from "../assets/Süper_Lig_logo.svg.png"
import ucl from "../assets/Logo_UEFA_Champions_League.png"
import portugal from "../assets/Símbolo_da_Liga_Portugal_bwin.png"

const Header = () => {
  return (
    <Container className=" d-flex gap-5 justify-content-center ">
      <Image src={pllogo} width={'150px'}/>
      <Image src={bundeslogo} width={'150px'}/>
      <Image src={serialogo} width={'75px'} />
      <Image src={ucl} width={'150px'}/>
      <Image src={laligalogo} width={'100px'} />
      <Image src={stsl} width={'150px'}/>
      <Image src={portugal} width={'100px'}/>
    </Container>
  )
}

export default Header