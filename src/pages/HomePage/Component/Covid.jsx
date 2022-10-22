import Title from "../../../component/molecules/Title";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCardContainer from "../../../component/container/NewsCardContainer";
import { fetchNews } from "../../../features/NewsSlice";
import NewsCard from "../../../component/molecules/NewsCard";


export default function Covid () {


    const dispatch = useDispatch()
    const covid = useSelector((state) => state.news.newsList)

    const d = new Date();
    const localDateTo = new Date(d.getTime() - d.getTimezoneOffset()*60000);
    d.setMonth(d.getMonth() - 1)
    const localDateFrom = new Date(d.getTime() - d.getTimezoneOffset()*60000);

    useEffect(() => {
        dispatch(fetchNews(`https://newsapi.org/v2/everything?q=coronavirus&from=${localDateFrom}&to=${localDateTo}&sortBy=publishedAt&pageSize=4&apiKey=${process.env.REACT_APP_API_KEY}`))
    }, []);

    return (
        <>
        <Title title="Covid News" link="/covid"/>
        <NewsCardContainer>
            {covid?.map((item) => 
              <NewsCard key={item.url}
              source={item.source.name}
              title={item.title}
              author={item.author}
              description={item.description}
              url={item.url}
              publishedAt={item.publishedAt}
              urlToImage={item.urlToImage}/>
            )}
        </NewsCardContainer>
        </>
        
    )
}