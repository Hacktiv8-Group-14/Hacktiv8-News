import { useSelector } from 'react-redux'
import Header from "../component/atoms/Header";
import PageContainer from "../component/container/PageContainer";
import NewsCardContainer from '../component/container/NewsCardContainer';
import NewsCard from '../component/molecules/NewsCard';
import Navbar from "../component/molecules/Navbar";

export default function SavedPage () {

    const savedNews = useSelector((state) => state.saved.savedNews)

    return (
        <>
        <Navbar/>
        <PageContainer>
            <Header>Saved</Header>
            {savedNews.length === 0 ? (
                <span className='mt-8 text-lg font-medium'>No Saved News</span>
            ) : (
                <NewsCardContainer>
                    {savedNews.map((item) => (
                        <NewsCard key={item.url} 
                            source={item.source.name}
                            title={item.title}
                            author={item.author} 
                            description={item.description} 
                            url={item.url}
                        />
                    ))}
                </NewsCardContainer>
            )}
            
        </PageContainer>
        </>
    )
}