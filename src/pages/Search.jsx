import Navbar from "../component/molecules/Navbar";
import PageContainer from "../component/container/PageContainer";
import Header from "../component/atoms/Header";
import NewsCard from "../component/molecules/NewsCard";
import NewsCardContainer from "../component/container/NewsCardContainer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchNews } from "../features/NewsSlice";
import Pagination from "../component/molecules/Pagination";
import Footer from "../component/molecules/Footer";
import Error from "./Error";

const date = new Date();

export default function Search() {
  const { value } = useParams();
  const dispatch = useDispatch();
  const newsSearch = useSelector((state) => state.news.newsList);
  const totalResult = useSelector((state) => state.news.totalResult);
  const [size, setSize] = useState(24);
  const [current, setCurrent] = useState(1);
  const param = new URLSearchParams();
  param.append("q", value);

  useEffect(() => {
    dispatch(
      fetchNews(
        `${
          process.env.REACT_APP_API_URL
        }/everything?${param.toString()}&from=${date}&sortBy=publishedAt&pageSize=${size}&page=${current}&apiKey=${
          process.env.REACT_APP_API_KEY
        }`
      )
    );
  }, [current, value]);

  return (
    <>
      {newsSearch.length ? (
        <>
          <Navbar />
          <PageContainer>
            <Header>Hasil Pencarian "{value}"</Header>
            <NewsCardContainer>
              {newsSearch?.map((item) => (
                <NewsCard
                  key={item.url}
                  source={item.source.name}
                  title={item.title}
                  author={item.author}
                  description={item.description}
                  url={item.url}
                  publishedAt={item.publishedAt}
                  urlToImage={item.urlToImage}
                />
              ))}
            </NewsCardContainer>
            <Pagination
              setSize={setSize}
              size={size}
              current={current}
              setCurrent={setCurrent}
              news={newsSearch}
              totalResult={totalResult}
            />
          </PageContainer>
          <Footer />
        </>
      ) : (
        <Error title={` Hasil Pencarian "${value}" tidak ditemukan`} />
      )}
    </>
  );
}
