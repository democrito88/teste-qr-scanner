import { Html5QrcodeScanner } from 'html5-qrcode';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [scanResult, setScanResult] = useState(null);

  useEffect(()=>{
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    
    const sucesso = (result) => {
      scanner.clear();
      setScanResult(result);
    }
    
    const erro = (error) => {
      console.warn(error);
    }
    
    scanner.render(sucesso, erro);
  },[]);

  return (
    <div className="App">
      <h1>Leitor de código em React</h1>
      { scanResult ?
      <div>Mensagem escaneada: 
        <a href={"http://"+scanResult}>{scanResult}</a>
      </div>
      :
      <div id="reader"></div>
    }

    </div>
  );
}

export default App;
