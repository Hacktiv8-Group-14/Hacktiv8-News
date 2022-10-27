import Header from "../../component/atoms/Header";
import PageContainer from "../../component/container/PageContainer";
import NewsCardContainer from "../../component/container/NewsCardContainer";
import NewsCard from "../../component/molecules/NewsCard";
import { resetErrorMessage } from "../../features/NewsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function SavedPage() {
  const dispatch = useDispatch();

  const savedNews = useSelector((state) => state.saved.savedNews);

  useEffect(() => {
    dispatch(resetErrorMessage());
  }, []);

  return (
    <>
      <PageContainer>
        <Header>Saved</Header>
        {savedNews.length === 0 ? (
          <span className="mt-8 text-lg font-medium h-80">No Saved News</span>
        ) : (
          <NewsCardContainer>
            {savedNews.map((item) => (
              <NewsCard
                key={item.url}
                source={item.source}
                title={item.title}
                author={item.author}
                description={item.description}
                url={item.url}
                urlToImage={item.urlToImage}
              />
            ))}
          </NewsCardContainer>
        )}
      </PageContainer>
    </>
  );
}
