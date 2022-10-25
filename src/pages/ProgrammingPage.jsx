import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../features/NewsSlice";
import Navbar from "../component/molecules/Navbar";
import Header from "../component/atoms/Header";
import PageContainer from "../component/container/PageContainer";
import NewsCardContainer from "../component/container/NewsCardContainer";
import NewsCard from "../component/molecules/NewsCard";
import Pagination from "../component/molecules/Pagination";
import NavCategory from "../component/molecules/NavCategory";
import Footer from "../component/molecules/Footer";

const d = new Date();
const localDateTo = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
d.setMonth(d.getMonth() - 1);
const localDateFrom = new Date(d.getTime() - d.getTimezoneOffset() * 60000);

const ProgrammingPage = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.news.newsList);
  const totalResult = useSelector((state) => state.news.totalResult);
  const [size, setSize] = useState(24);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    dispatch(
      fetchNews(
        `${process.env.REACT_APP_API_URL}/everything?q=programmer&from=${localDateFrom}&to=${localDateTo}&sortBy=publishedAt&pageSize=${size}&page=${current}&searchIn=description,title&apiKey=${process.env.REACT_APP_API_KEY}`
      )
    );
  }, [current]);

  return (
    <>
      <Navbar />
      <PageContainer>
        <Header>Programming News</Header>
        <NavCategory />
        <NewsCardContainer>
          {newsList.map((item) => (
            <NewsCard
              key={item.url}
              source={item.source.name}
              title={item.title}
              author={item.author}
              description={item.description}
              url={item.url}
              urlToImage={item.urlToImage}
            />
          ))}
        </NewsCardContainer>
        <Pagination
          setSize={setSize}
          size={size}
          current={current}
          setCurrent={setCurrent}
          news={newsList}
          totalResult={totalResult}
        />
      </PageContainer>
      <Footer />
    </>
  );
};

export default ProgrammingPage;
