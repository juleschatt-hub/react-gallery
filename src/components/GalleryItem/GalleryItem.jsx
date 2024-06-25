import { Button, Grid } from "@mui/material";
import './GalleryItem.css';
import axios from "axios";
import { useState } from "react";

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
     const [photoToggle, setPhotoToggle] = useState(false);
     const toggle = () => {
        setPhotoToggle(!photoToggle);
     }
    return (
        <Grid item xs={3}>
            <li key={galleryItem.id} data-testid="galleryItem" >
                <h3>{galleryItem.title}</h3>
                <button data-testid="toggle" onClick={() => toggle()} type="button">{photoToggle ? <img src={galleryItem.url} alt={galleryItem.description}  /> : <p>{galleryItem.description}</p> }</button>
                <Button data-testid="like" onClick={() => updateLike(galleryItem.id)}>Like</Button>
                <p>{galleryItem.likes} people like this</p>
            </li>
        </Grid>
                    
  
    )
}
