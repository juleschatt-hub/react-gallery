 import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {

  let galleryList = props.galleryList;

  return (
    <>
      <ul data-testid="galleryList">
        {
          galleryList.map(
            (galleryItem) => (
              <GalleryItem galleryItem={galleryItem} />
            )
          )
        }
      </ul>
    </>
  );
}

export default GalleryList;
