import '../css/Album.css'
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/plugins/captions.css";
import { imgsRamdom, isValidDay } from '../utils/variables';
import { useState } from 'react';
import { Captions, Fullscreen, Slideshow, Thumbnails, Video } from 'yet-another-react-lightbox/plugins';

const Album = () => {
  const data = imgsRamdom.map((img, idx) => {
    const url = `https://drive.google.com/thumbnail?id=${img.id}&sz=w1000`;
    if (img.mimeType === "video/mp4") {
      return {
        idx,
        url,
        ...img,
        type: "video",
        poster: `https://drive.google.com/thumbnail?id=${img.id}&sz=w1000`,
        autoPlay: true,
        sources: [
          {
            src: import.meta.env.BASE_URL + "/" + img.name,
            type: "video/mp4",
          },
        ],
      }
    } else {
      return { idx, src: url, url, ...img }
    }
  });
  const weightedRand = (spec: any) => { let i, sum = 0, r = Math.random(); for (i in spec) { sum += spec[i]; if (r <= sum) return i; } }
  const [index, setIndex] = useState(-1);

  return (
    <>
      {isValidDay("14/2") && <h2>Se mi San Valentín siempre 💌</h2>}
      <div className='grid'>
        {data.map((img) => {
          const span = weightedRand({ 1: 0.65, 2: 0.25, 3: 0.10 });
          const classS = 'card span-' + span + ' c-' + weightedRand({ 1: 0.2, 2: 0.2, 3: 0.2, 4: 0.2, 5: 0.2 })
          return <div className={classS} style={{ backgroundImage: `url(${img.url})`, cursor: "pointer" }} key={img.idx} onClick={() => setIndex(img.idx)} />
        })}
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={data as any}
        plugins={[Fullscreen, Slideshow, Thumbnails, Captions, Video]}
        captions={{ descriptionTextAlign: "end" }}
        slideshow={{ delay: 3000 }}
      />
    </>
  )
}

export default Album;
