import PageContainer from "../../component/container/PageContainer";
import Header from "../../component/atoms/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchNews } from "../../features/NewsSlice";
import NewsCardContainer from "../../component/container/NewsCardContainer";
import NewsCard from "../../component/molecules/NewsCard";
import Pagination from "../../component/molecules/Pagination";
import NavCategory from "../../component/molecules/NavCategory";

export default function IndonesiaPage() {
  const dispatch = useDispatch();
  const indonesiaNews = useSelector((state) => state.news.newsList);
  const totalResult = useSelector((state) => state.news.totalResult);
  const [size, setSize] = useState(24);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    dispatch(
      fetchNews(
        `${process.env.REACT_APP_API_URL}/top-headlines?country=id&pageSize=${size}&page=${current}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
    );
  }, [current]);

  console.log(" length =>", indonesiaNews.length);

  return (
    <>
      <PageContainer>
        <Header>Indonesia News</Header>
        <NavCategory />
        <NewsCardContainer>
          {indonesiaNews.map((item) => (
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
          news={indonesiaNews}
          totalResult={totalResult}
        />
      </PageContainer>
    </>
  );
}
