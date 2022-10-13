
import { useParams } from "react-router-dom";
import Header from "../component/atoms/Header";
import PageContainer from "../component/container/PageContainer";
import Navbar from "../component/molecules/Navbar";
import { useSelector } from "react-redux";


export default function DetailPage () {

    const {title} = useParams()
    const news = useSelector((state) => state.news.newsList)

    return (
        <>
        <Navbar/>
        <PageContainer>
            <Header>{title}</Header>
            {news.filter(list => list.title == title).map((list) => (
                <>
                <img src={list.urlToImage} alt="Image-news"/>
                <div>{list.description}</div>
                </>
            ))}
        </PageContainer>
        </>
    )
}