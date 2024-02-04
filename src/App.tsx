import './css/App.css'
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/plugins/captions.css";
import { imgsRamdom } from './utils/variables';
import { useState } from 'react';
import { Captions, Fullscreen, Slideshow, Thumbnails } from 'yet-another-react-lightbox/plugins';

const App = () => {
  const data = imgsRamdom.map((img, idx) => {
    return { idx, src: `https://drive.google.com/thumbnail?id=${img.id}&sz=w1000`, ...img }
  });
  const weightedRand = (spec: any) => { let i, sum = 0, r = Math.random(); for (i in spec) { sum += spec[i]; if (r <= sum) return i; } }
  const [index, setIndex] = useState(-1);
  return (
    <>
      <h1>MI AMOR ATEMPORAL ❤️</h1>
      <div className='grid'>
        {data.map((img) => {
          const span = weightedRand({ 1: 0.65, 2: 0.25, 3: 0.10 });
          const classS = 'card span-' + span + ' c-' + weightedRand({ 1: 0.2, 2: 0.2, 3: 0.2, 4: 0.2, 5: 0.2 })
          return <div className={classS} style={{ backgroundImage: `url(${img.src})`, cursor: "pointer" }} key={img.idx} onClick={() => setIndex(img.idx)} />
        })}
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={data}
        plugins={[Fullscreen, Slideshow, Thumbnails, Captions]}
        captions={{ descriptionTextAlign: "end" }}
        slideshow={{ delay: 3000 }}
      />
      <div className='dv-audio'>
        <audio loop src={import.meta.env.BASE_URL+"/paraiso_lunar.mp3"} controls onLoadedData={e => { e.currentTarget.volume = 0.5; e.currentTarget.play() }}></audio>
      </div>
    </>
  )
}

export default App
