import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsData } from "./Reducer/NeswapiSlice";
import Header from "./component/Header";
import AllNews from "./component/AllNews";
import Pagination from "./component/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(6);
  const dispatch = useDispatch();
  const { newsData, status } = useSelector((state) => state.news);
 

  useEffect(() => {
    dispatch(fetchNewsData());
  }, [dispatch]);

  const indexOfLastPage = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastPage - newsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="w-4/5 mx-auto">
      <Header />
      {status === "loading" ? (
        <div className="mx-auto text-center">{status}</div>
      ) : (
        <div>
          <AllNews items={currentNews} />
          <Pagination
            newsPerPage={newsPerPage}
            totalNews={newsData.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </main>
  );
}

export default App;
