// Corrección en index.js
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css"; // Asegúrate de que la ruta sea correcta
import Home from "./component/home.jsx"; // Verifica la ruta del componente Home

ReactDOM.createRoot(document.getElementById('app')).render(<Home />);
