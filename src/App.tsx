import './css/App.css'
import { useRef, useState } from 'react';
import Album from './components/Album';
import Hearts from './components/Hearts';

const App = () => {
  const fechaActual = new Date();
  const isValetinesDay = (fechaActual.getDate() + "/" + (fechaActual.getMonth() + 1)) === "13/2";
  const audioRef = useRef<HTMLAudioElement>(null);
  const [visible, setVisible] = useState(true);
  const [accept, setAccept] = useState<Number>(isValetinesDay ? 0 : 2);

  const handleDivClick = (option: number) => {
    setAccept(option);
    setVisible(false);
    setTimeout(() => {
      audioRef.current!.play();
      audioRef.current!.volume = 0.3075;
    }, 800);
  };

  function renderValentine() {
    if (accept === 0) {
      return <>
        <Hearts></Hearts>
      </>
    } else if (accept === 1) {
      return <div>
        <img style={{ width: "100%", backgroundSize: "cover" }} src='https://i.pinimg.com/1200x/31/df/44/31df44c0e0d07952894fad97df1aad9b.jpg'></img>
        <div className='dv-audio'>
          <audio ref={audioRef} loop src={import.meta.env.BASE_URL + "/sadMusic.mp3"} controls />
        </div>
      </div>
    } else {
      return <>
        < Album />
        <div className='dv-audio'>
          <audio ref={audioRef} loop src={import.meta.env.BASE_URL + "/paraiso_lunar.mp3"} controls />
        </div>
        <Hearts></Hearts>
      </>
    }
  }

  return (
    <>
      {!isValetinesDay ? <div className={`overlay ${visible ? 'visible' : ''}`} onClick={() => handleDivClick(2)}>
        <h1 className="splash-header">Nuestra aventura comienza ❤️👩‍❤️‍💋‍👨 Album ➡️</h1>
      </div> : <div className={`overlay ${visible ? 'visible' : ''}`}>
        <h1 className="splash-header">Eres muy especial para mi 👩‍❤️‍💋‍👨</h1>
        <h2 className="splash-header">¿Quieres ser mi San Valentín?</h2>
        <div className='question-valentine'>
          <button onClick={() => handleDivClick(2)}>Sí 🥰</button>
          <button onClick={() => handleDivClick(1)}>No 💔</button>
        </div>
      </div>}
      {
        renderValentine()
      }
    </>
  )
}

export default App
