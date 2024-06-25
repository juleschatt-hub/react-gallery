export default function GalleryItem(props) {
    let galleryItem = props.galleryItem;

    return (
        
        <li key={galleryItem.id} data-testid="galleryItem">
            {galleryItem.title}
            <img src={galleryItem.url} alt="" /> 
        </li>
                     
    )
}