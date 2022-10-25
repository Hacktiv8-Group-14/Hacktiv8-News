import Title from "../../../component/molecules/Title";
import { useEffect } from "react";
import NewsCardContainer from "../../../component/container/NewsCardContainer";
import NewsCard from "../../../component/molecules/NewsCard";
import axios from "axios";
import { useState } from "react";

export default function Indonesia() {
  const [indonesia, setIndonesia] = useState([]);

  console.log(process.env.REACT_APP_API_URL);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/top-headlines?country=id&pageSize=4&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setIndonesia(response.data.articles);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <>
      <Title title="Indonesia News" link="/indonesia" />
      <NewsCardContainer>
        {indonesia?.map((item) => (
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
    </>
  );
}
