import { Button, Grid } from "@mui/material";

export default function GalleryItem(props) {
    let galleryItem = props.galleryItem;

    return (
        <Grid item xs={3}>
            <li key={galleryItem.id} data-testid="galleryItem" >
                <h3>{galleryItem.title}</h3>
                <img src={galleryItem.url} alt="" />
                <Button>Like</Button>
            </li>
        </Grid>
                     
    )
}