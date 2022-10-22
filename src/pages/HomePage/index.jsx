import Navbar from "../../component/molecules/Navbar"
import PageContainer from "../../component/container/PageContainer"
import Footer from "../../component/molecules/Footer"
import Covid from "./Component/Covid"
import Indonesia from "./Component/Indonesia"
import Programming from "./Component/Programming"
import Headline from "./Component/Headline"

export default function HomePage () {
    return (
        <>
        <Navbar/>
        <PageContainer>
            <Headline/>
            <Indonesia/>
            <Programming/>
            <Covid/>
        </PageContainer>
        <Footer/>
        </>
    )
}