import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from "../../img/fondoCarretera.png";
import { Container, Row, Col, Button } from 'react-bootstrap';

function TrafficLight() {
  const [currentColor, setCurrentColor] = useState('light-red'); 
  const [isPurpleVisible, setIsPurpleVisible] = useState(false);

  const colors = ['light-red', 'light-yellow', 'light-green', 'purple'];

  const handleColorChange = () => {
    setCurrentColor(colors[(colors.indexOf(currentColor) + 1) % colors.length]);
  };

  const togglePurpleLight = () => {
    setIsPurpleVisible(!isPurpleVisible);
  };

  const handleClickOnPurple = () => {
    if (!isPurpleVisible) {
      setIsPurpleVisible(true);
    } else {
      setIsPurpleVisible(false);
    }
  };

  const getSombraClase = (color) => {
    switch (color) {
      case 'light-red':
        return 'luz-shadow1';
      case 'light-yellow':
        return 'luz-shadow2';
      case 'light-green':
        return 'luz-shadow3';
      case 'purple':
        return 'luz-shadow4';
      default:
        return '';
    }
  };

  return (
    <div style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}>
      <Container fluid style={{position: 'relative' }}>
        <Row className="justify-content-center">
          <Col xs={12} className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
            <div className="container-poster"></div>
            <div className="container-lights p-4 mb-5">
                <div className={`rounded-circle ${getSombraClase(currentColor)} ${currentColor === 'light-red' ? 'bg-danger light-active' : 'bg-light light-normal'} p-2 mt-4 mb-4`} onClick={() => setCurrentColor('light-red')} style={{ width: '100px', height: '100px' }}></div>
                <div className={`rounded-circle ${getSombraClase(currentColor)} ${currentColor === 'light-yellow' ? 'bg-warning light-active' : 'bg-light light-normal'} p-2 mb-4`} onClick={() => setCurrentColor('light-yellow')} style={{ width: '100px', height: '100px' }}></div>
                <div className={`rounded-circle ${getSombraClase(currentColor)} ${currentColor === 'light-green' ? 'bg-success light-active' : 'bg-light light-normal'} p-2 mb-4`} onClick={() => setCurrentColor('light-green')} style={{ width: '100px', height: '100px' }}></div>
                {isPurpleVisible && <div className={`rounded-circle ${getSombraClase(currentColor)} bg-purple light-active p-2 transition`} style={{ width: '100px', height: '100px' }} onClick={handleClickOnPurple}></div>}
            </div>
            <div className="d-grid gap-2 mt-5">
              <Button variant="primary" onClick={handleColorChange}>Alternar Colores</Button>
              <Button variant="secondary" onClick={togglePurpleLight}>Mostrar/Ocultar Luz Púrpura</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TrafficLight;
