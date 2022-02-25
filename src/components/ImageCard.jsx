function ImageCard({ image }) {
  return (
    <>
      <div className="card-outline">
        <img src={image.webformatURL} alt="..." />
        <div className="img-details">
          <h3>photo by {image.user}</h3>
          <ul>
            <li>
              <strong>Views:{image.views}</strong>
            </li>
            <li>
              <strong>Likes:{image.likes}</strong>
            </li>
            <li>
              <strong>Comments:{image.comments}</strong>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
