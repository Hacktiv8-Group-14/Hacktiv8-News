import PageContainer from "../../component/container/PageContainer";
import Covid from "./Component/Covid";
import Indonesia from "./Component/Indonesia";
import Programming from "./Component/Programming";
import Headline from "./Component/Headline";

export default function HomePage() {
  return (
    <>
      <PageContainer>
        <Headline />
        <Indonesia />
        <Programming />
        <Covid />
      </PageContainer>
    </>
  );
}
