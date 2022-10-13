import Header from "../component/atoms/Header";
import PageContainer from "../component/container/PageContainer";
import Navbar from "../component/molecules/Navbar";

export default function SavedPage () {
    return (
        <>
        <Navbar/>
        <PageContainer>
            <Header>Saved</Header>
        </PageContainer>
        </>
    )
}