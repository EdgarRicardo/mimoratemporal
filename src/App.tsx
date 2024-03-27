import './css/App.css'
import { useRef, useState } from 'react';
import Album from './components/Album';
import Hearts from './components/Hearts';
import { isValetinesDay } from './utils/variables';
import Birthday from './components/Birthday';

const App = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [visible, setVisible] = useState(true);
  const [accept, setAccept] = useState<Number>(isValetinesDay ? 0 : 2);
  const [mainOpt, setMainOpt] = useState(0);

  const handleValentinesOpt = (option: number) => {
    setAccept(option);
    setVisible(false);
    setTimeout(() => {
      audioRef.current!.play();
      audioRef.current!.volume = 0.3075;
    }, 800);
  };

  const handleMainOpt = (option: number) => {
    setMainOpt(option);
    setTimeout(() => {
      audioRef.current!.play();
      audioRef.current!.volume = 0.3075;
    }, 200);
  };


  function renderValentine() {
    if (accept === 0) {
      return <>

      </>
    } else if (accept === 1) {
      return <div>
        <img style={{ width: "100%", backgroundSize: "cover" }} src='https://i.pinimg.com/1200x/31/df/44/31df44c0e0d07952894fad97df1aad9b.jpg'></img>
        <div className='dv-audio'>
          <audio ref={audioRef} loop src={import.meta.env.BASE_URL + "/sadMusic.mp3"} controls />
        </div>
      </div>
    } else {
      const main = [
        {
          render: < Album />,
          music: "/paraiso_lunar.mp3"
        },
        {
          render: <Birthday />,
          music: "/cumple.mp3"
        }
      ]
      return <>
        <h1>MI AMOR ATEMPORAL ❤️</h1>
        <nav>
          <ul>
            <li className={mainOpt === 0 ? 'active' : ''} onClick={_ => handleMainOpt(0)}>🖼 Album</li>
            <li className={mainOpt === 1 ? 'active' : ''} onClick={_ => handleMainOpt(1)}>❤ Mi preciosa</li>
          </ul>
        </nav>
        {main[mainOpt].render}
        <div className='dv-audio'>
          <audio ref={audioRef} loop src={import.meta.env.BASE_URL + main[mainOpt].music} controls />
        </div>
        <Hearts></Hearts>
      </>
    }
  }

  return (
    <>
      {!isValetinesDay ? <div className={`overlay ${visible ? 'visible' : ''}`} onClick={() => handleValentinesOpt(2)}>
        <h1 className="splash-header" style={{ cursor: "pointer" }}>Nuestra aventura comienza ❤️👩‍❤️‍💋‍👨 Vamos ➡️</h1>
      </div> : <div className={`overlay ${visible ? 'visible' : ''}`}>
        <h1 className="splash-header">Eres muy especial para mi 👩‍❤️‍💋‍👨</h1>
        <h2 className="splash-header">¿Quieres ser mi San Valentín?</h2>
        <div className='question-valentine'>
          <button onClick={() => handleValentinesOpt(2)}>Sí 🥰</button>
          <button onClick={() => handleValentinesOpt(1)}>No 💔</button>
        </div>
      </div>}
      {
        renderValentine()
      }
    </>
  )
}

export default App
