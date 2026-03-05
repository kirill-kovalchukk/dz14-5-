import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="gallery">
      {images.map(img => (
        <ImageGalleryItem
          key={img.id}
          image={img}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;