 import { Grid } from '@mui/material';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {

  let galleryList = props.galleryList;

  return (
    <>

      <ul data-testid="galleryList">
        
          <Grid container spacing={2}>
          {
          galleryList.map(
            (galleryItem) => (
              <GalleryItem galleryItem={galleryItem} />
            )
          )
        }
          </Grid>
        
      </ul>
    </>
  );
}

export default GalleryList;
