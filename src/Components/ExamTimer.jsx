import { useEffect } from 'react';
import useTimerStore from '../Helper/TimerStoreHelper'

const ExamTimer = () => {

  const { timeLeft, isRunning, start, pause, reset, formatTime } = useTimerStore();

  useEffect(() => {
    if (isRunning) {
      pause(); 
    }
  }, []); 

  return (
   <div style={{
      position: 'fixed',
      bottom: 0,  // Cambiado de top: 0 a bottom: 0
      left: 0,
      width: '100%',  // Ocupa todo el ancho de la pantalla
      height: '60px', // Altura fija, ajusta según necesites
      backgroundColor: '#2d4d5fff', // Color de fondo, cámbialo
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // Centra el contenido horizontalmente
      zIndex: 1000, // Asegura que esté por encima de otros elementos
      boxShadow: '0 -2px 5px rgba(0,0,0,0.2)', // Sombra hacia arriba para resaltar
    }}>
      <h4>Temporizador de Examen</h4>
      <div style={{ fontSize: '48px', margin: '20px' }}>
        {formatTime()}
      </div>
      <div>
        <button onClick={start} disabled={timeLeft === 0 || isRunning}>
          Iniciar
        </button>
        <button onClick={pause} disabled={!isRunning} style={{ marginLeft: '10px' }}>
          Pausar
        </button>
        <button onClick={reset} style={{ marginLeft: '10px' }}>
          Resetear
        </button>
      </div>
      {timeLeft === 0 && <p style={{ color: 'red' }}>¡Tiempo agotado!</p>}
    </div>
  );
};

export default ExamTimer;