import { Button, Grid } from "@mui/material";
import './GalleryItem.css'

export default function GalleryItem(props) {
    let galleryItem = props.galleryItem;

    return (
        <Grid item xs={3}>
            <li key={galleryItem.id} data-testid="galleryItem" >
                <h3>{galleryItem.title}</h3>
                <button type="button"><img src={galleryItem.url} alt="" /></button>
                <Button>Like</Button>
                <p>{galleryItem.likes} people like this</p>
            </li>
        </Grid>
                     
    )
}