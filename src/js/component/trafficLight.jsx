import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from "../../img/fondoCarretera.png";
import { Container, Row, Col, Button } from 'react-bootstrap';

function TrafficLight() {
  const [currentColor, setCurrentColor] = useState('light-red');
  const [isPurpleVisible, setIsPurpleVisible] = useState(false);
  const colors = ['light-red', 'light-yellow', 'light-green'];

  const handleColorChange = () => {
    const currentIndex = colors.indexOf(currentColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setCurrentColor(colors[nextIndex]);
  };

  const togglePurpleLight = () => {
    setIsPurpleVisible(!isPurpleVisible);
  };

  useEffect(() => {
    const timer = setInterval(handleColorChange, 2000);
    return () => clearInterval(timer);
  }, [handleColorChange]);

  return (
    <div style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}>
      <Container style={{position: 'relative' }}>
        <Row className="justify-content-center">
          <Col xs={12} className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
            <div className="container-poster"></div>
            <div className="container-lights p-4 mb-5">
                <div className={`rounded-circle ${currentColor === 'light-red' ? 'bg-danger luz-shadow1 light-active' : 'bg-light luz-shadow1 light-normal'} p-2 mt-4 mb-4`} onClick={() => setCurrentColor('light-red')} style={{ width: '100px', height: '100px' }}></div>
                <div className={`rounded-circle ${currentColor === 'light-yellow' ? 'bg-warning luz-shadow2 light-active' : 'bg-light luz-shadow2 light-normal'} p-2 mb-4`} onClick={() => setCurrentColor('light-yellow')} style={{ width: '100px', height: '100px' }}></div>
                <div className={`rounded-circle ${currentColor === 'light-green' ? 'bg-success luz-shadow3 light-active' : 'bg-light luz-shadow3 light-normal'} p-2 mb-4`} onClick={() => setCurrentColor('light-green')} style={{ width: '100px', height: '100px' }}></div>
                {isPurpleVisible && <div className={`rounded-circle luz-shadow4 bg-purple light-active p-2 transition`} style={{ width: '100px', height: '100px' }} onClick={togglePurpleLight}></div>}
            </div>
            <div className="d-grid gap-2 mt-5">
              <Button variant="primary" onClick={handleColorChange}>Cambiar Color</Button>
              <Button variant="primary" onClick={togglePurpleLight}>Añadir Luz</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TrafficLight;
