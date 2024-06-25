 import { Grid } from '@mui/material';
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from "axios";

function GalleryList({galleryList, getGalleryList}) {

  return (
    <>

      <ul data-testid="galleryList" style={{listStyleType: "none"}}>     
          <Grid container spacing={2}>
            {
            galleryList.map(
              (galleryItem, updateLike) => (
                <GalleryItem galleryItem={galleryItem} getGalleryList={getGalleryList}/>
              )
            )
            }
          </Grid>
        
      </ul>
    </>
  );
}

export default GalleryList;
