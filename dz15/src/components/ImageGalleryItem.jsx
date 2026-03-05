const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="gallery-item">
      <img
        src={image.webformatURL}
        alt=""
        onClick={() => onClick(image.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;