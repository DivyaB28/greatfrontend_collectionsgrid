/**
 * 
 * <header>
        <h1>Our Collections</h1>
      </header>
      <main>
        {collections &&
          collections.map((collection) => {
            const {
              collection_id = "",
              created_at = "",
              description = "",
              image_url = "",
              name = "",
            } = collection;
            return (
              <div className="product_wrapper">
                {" "}
                <article className="product" key={collection_id}>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </article>{" "}
              </div>
            );
          })}
      </main>
 */
