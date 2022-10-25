import { useEffect, useState } from "react";
import axios from "axios";
import HeadlineCard from "../../../component/molecules/HeadlineCard";
import { fetchNews } from "../../../features/NewsSlice";

const d = new Date();
const localDateTo = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
d.setMonth(d.getMonth() - 1);
const localDateFrom = new Date(d.getTime() - d.getTimezoneOffset() * 60000);

export default function Headline() {
  const [headline, setHeadline] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/top-headlines?country=us&category=politics&from=${localDateFrom}&to=${localDateTo}&sortBy=popularity&pageSize=10&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((Response) => {
        setHeadline(Response.data.articles);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <>
      {!!headline.length ? (
        <HeadlineCard
          image={headline[index]?.urlToImage}
          title={headline[index]?.title}
          description={headline[index]?.description}
          url={headline[index]?.url}
          setIndex={setIndex}
          index={index}
        />
      ) : (
        <></>
      )}
    </>
  );
}
