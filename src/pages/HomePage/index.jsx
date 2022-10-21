import Navbar from "../../component/molecules/Navbar"
import PageContainer from "../../component/container/PageContainer"
import Footer from "../../component/molecules/Footer"
import Covid from "./Component/Covid"

export default function HomePage () {
    return (
        <>
        <Navbar/>
        <PageContainer>
            <Covid/>
        </PageContainer>
        <Footer/>
        </>
    )
}