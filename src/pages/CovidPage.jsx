import Header from "../component/atoms/Header";
import PageContainer from "../component/container/PageContainer";
import Navbar from "../component/molecules/Navbar";

export default function CovidPage () {
    return (
        <>
        <Navbar/>
        <PageContainer>
            <Header>Covid19 News</Header>
        </PageContainer>
        </>
    )
}