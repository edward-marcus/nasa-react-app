import { useEffect, useState } from 'react';
import './App.css';
import Nasa from './components/Nasa';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import Header from './components/Header';
import LoadingPlaceholder from './components/LoadingPlaceholder';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=40`
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);

          setData(data);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      {isLoaded ? <Nasa posts={currentPosts} /> : <LoadingPlaceholder />}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
      <Footer />
    </>
  );
}
export default App;
