import Footer from "../../molecules/Footer";
import Navbar from "../../molecules/Navbar";

function PageContainer({ children }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto sm:px-4 mt-20 mb-10 w-full flex flex-col items-center">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default PageContainer;
