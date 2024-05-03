import {Container}  from "react-bootstrap";
import Header from "./components/Header";
import LegendContainer from "./components/LegendContainer";



function App() {
  return (
    <Container className="text-center mt-5">
      <Header/>
      <LegendContainer/>
    </Container>
  );
}

export default App;
