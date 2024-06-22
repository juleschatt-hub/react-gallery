// import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {

  let galleryList = props.galleryList;

  return (
    <>
      <ul>
        {
          galleryList.map(
            (galleryItem) => (
              JSON.stringify(galleryList)
            )
          )
        }
      </ul>
    </>
  );
}

export default GalleryList;
