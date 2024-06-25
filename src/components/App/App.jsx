import axios from 'axios';
import { useEffect, useState } from 'react';


import GalleryList from "../GalleryList/GalleryList";

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getGalleryList();
  }, [])


  const getGalleryList = () => {
    axios.get('/api/gallery')
      .then((response) => {
        console.log('response.data is: ', response.data);
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log('Axios Error getting gallery list: ', error);
      })
  }
    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>
      {/* testing brancgh stuff */}
        <GalleryList galleryList={galleryList} />
      </div>
    );
}

export default App;
