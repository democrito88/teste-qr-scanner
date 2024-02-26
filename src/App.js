import './App.css';
import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import CustomWebCam from './components/CustomWebcam';

function App() {
    const [texto, setTexto] = useState("Lendo scan...");

    const handleErrorWebCam = (error) => {
        console.error(error);
    }

    const handleScanWebCam = (resultado) => {
        if(resultado){
            setTexto(resultado);
        }
    }

    return (
        <main className='principal'>
            <div className="metade esquerda">
            <h3>teste do react-qr-reader</h3>
                <QrReader
                    delay={300}
                    style={{width: '100%'}}
                    onError={handleErrorWebCam}
                    onScan={handleScanWebCam}
                    onResult={(result) => setTexto(result)}
                />
                <p>{texto}</p>
            </div>
            <canvas className='divisor'></canvas>
            <div className='metade direita'>
                <h3>teste do react-webcam</h3>
                <CustomWebCam />
            </div>
        </main>
    );
}

export default App;
