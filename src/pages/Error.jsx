import Header from "../component/atoms/Header";
import PageContainer from "../component/container/PageContainer";
import Navbar from "../component/molecules/Navbar";

export default function Error () {
    return (
        <>
        <Navbar/>
        <PageContainer>
            <Header>ERROR PAGE NOT FOUND</Header>
        </PageContainer>
        </>
    )
}