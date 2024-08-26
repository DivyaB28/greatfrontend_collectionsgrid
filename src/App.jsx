import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    let active = true;
    const fetchCollectionData = async () => {
      const data = await fetch(
        "https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections"
      )
        .then((response) => response.json())
        .then((data) => {
          if (active) {
            setCollections(data.data);
          }
        })
        .catch((err) => console.log(err));
    };

    fetchCollectionData();
    return () => {
      active = false;
    };
  }, []);

  if (collections) {
    return (
      <div className="container">
        <header>
          <h1>Our Collections</h1>
        </header>
        <main>
          <div className="product_wrapper">
            {collections.map((collection) => {
              const {
                collection_id = "",
                created_at = "",
                description = "",
                image_url = "",
                name = "",
              } = collection;
              return (
                <article
                  className={`product ${collection_id}`}
                  key={collection_id}
                >
                  <div className="description">
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </main>
      </div>
    );
  } else {
    return null;
  }
}

export default App;
