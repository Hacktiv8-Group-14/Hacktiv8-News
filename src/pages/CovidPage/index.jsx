import Header from "../../component/atoms/Header";
import PageContainer from "../../component/container/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../features/NewsSlice";
import { useEffect, useState } from "react";
import NewsCardContainer from "../../component/container/NewsCardContainer";
import NewsCard from "../../component/molecules/NewsCard";
import Pagination from "../../component/molecules/Pagination";
import NavCategory from "../../component/molecules/NavCategory";

const d = new Date();
const localDateTo = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
d.setMonth(d.getMonth() - 1);
const localDateFrom = new Date(d.getTime() - d.getTimezoneOffset() * 60000);

export default function CovidPage() {
  const dispatch = useDispatch();
  const covidNews = useSelector((state) => state.news.newsList);
  const totalResult = useSelector((state) => state.news.totalResult);
  const [size, setSize] = useState(24);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    dispatch(
      fetchNews(
        `${process.env.REACT_APP_API_URL}/everything?q=covid&from=${localDateFrom}&to=${localDateTo}&sortBy=publishedAt&pageSize=${size}&page=${current}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
    );
  }, [current]);

  return (
    <>
      <PageContainer>
        <Header>Covid News</Header>
        <NavCategory />
        <NewsCardContainer>
          {covidNews.map((item) => (
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
          news={covidNews}
          totalResult={totalResult}
        />
      </PageContainer>
    </>
  );
}
