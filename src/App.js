import "./App.css";
import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import SearchBox from "./components/SearchBox";
function App() {
  const apiKey = "25876681-31eaa1694fe24140228352401";

  const [images, setImages] = useState([]);
  const [text, setText] = useState("dogs");
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${text}&image_type=photo`)
      .then((res) => res.json())
      .then((data) => setImages(data.hits));
    setLoading(false);
  }, [text]);
  return (
    <>
      <h2>Image Finder</h2>
      {isloading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          <div className="search">
            <SearchBox searchText={(textSearch) => setText(textSearch)} />
          </div>
          <div className="img-container">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
