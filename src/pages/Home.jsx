import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  console.log(posts);
  
  async function fatchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      
    } catch (error) {
      console.log("Error fetching", error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fatchProductData();
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <Spinner></Spinner>
        ) : posts.length > 0 ? (
          <div>
            {posts.map((post) => {
             return <Product key={post.id} post={post}></Product>;
            })}
          </div>
        ) : (
          <div>
            <p>No Data Found.....</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
