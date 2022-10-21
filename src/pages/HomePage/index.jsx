import Navbar from "../../component/molecules/Navbar"
import PageContainer from "../../component/container/PageContainer"
import Footer from "../../component/molecules/Footer"
import Covid from "./Component/Covid"
import Indonesia from "./Component/Indonesia"
import Programming from "./Component/Programming"

export default function HomePage () {
    return (
        <>
        <Navbar/>
        <PageContainer>
            <Indonesia/>
            <Programming/>
            <Covid/>
        </PageContainer>
        <Footer/>
        </>
    )
}