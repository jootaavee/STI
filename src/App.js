import "./App.css";
import { Button } from "react";
import logo from "./midia/logo192.png"; // Importando a imagem corretamente

function App() {
  return (
    <div>
      <div class="info-box">
        <span class="info-box-icon bg-info">
          <i class="far fa-bookmark"></i>
        </span>
        <div class="info-box-content">
          <span class="info-box-text">Bookmarks</span>
          <span class="info-box-number">41,410</span>
          <div class="progress">
            <div class="progress-bar bg-info" style="width: 70%"></div>
          </div>
          <span class="progress-description">70% Increase in 30 Days</span>
        </div>
      </div>
      <h1>hey</h1>
      <img src={logo} alt="Descrição do logo" />
    </div>
  );
}

export default App;
