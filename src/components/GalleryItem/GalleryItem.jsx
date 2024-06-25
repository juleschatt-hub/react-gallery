import { Button, Grid } from "@mui/material";
import './GalleryItem.css';
import axios from "axios";

export default function GalleryItem({galleryItem, getGalleryList}) {
   
    const updateLike = (id) => {
        axios.put(`/api/gallery/like/${id}`)
        .then((response) => {
          console.log('like added to:', id);
           getGalleryList();
        })
        .catch(function (error) {
          console.log(error);
        })
      }

    return (
        <Grid item xs={3}>
            <li key={galleryItem.id} data-testid="galleryItem" >
                <h3>{galleryItem.title}</h3>
                <button type="button"><img src={galleryItem.url} alt="" /></button>
                <Button data-testid="like" onClick={() => updateLike(galleryItem.id)}>Like</Button>
                <p>{galleryItem.likes} people like this</p>
            </li>
        </Grid>
                     
    )
}