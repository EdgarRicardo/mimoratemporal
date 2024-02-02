import './css/App.css'
import PhotoAlbum from 'react-photo-album'
import { imgsData } from './utils/variables';

const App = () => {
  const photos = imgsData.map(e => {
    return { src: `https://drive.usercontent.google.com/download?id=${e.id}&export=view&authuser=0`, width: 800, height: 600 }
  });
  return (
    <>
      <h1>MI AMOR ATEMPORAL ❤️</h1>
      {<PhotoAlbum layout="rows" photos={photos} />}
      {imgsData.map(e => {
        return <img loading="lazy" src={`https://drive.usercontent.google.com/download?id=${e.id}&export=view&authuser=0`} key={e.id}></img>
      })}
    </>
  )
}

export default App