import Button from "../../component/atoms/Button";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../component/container/PageContainer";
import PropTypes from "prop-types";

export default function Error({ title }) {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <PageContainer>
        <div className="text-center py-10">
          <h1 className="font-black text-3xl py-5">{title}</h1>
          <p className="text-xs">
            "We're sorry the page you requested could not be found please go
            back to homepage"
          </p>
          <Button
            className="btn bg-orange p-2  px-3 rounded-lg text-sm mt-5 font-semibold hover:bg-secondary-orange text-white"
            onClick={goHome}
          >
            GO HOME
          </Button>
        </div>
      </PageContainer>
    </>
  );
}

Error.propTypes = {
  title: PropTypes.string,
};

Error.defaultProps = {
  title: "PAGE NOT FOUND",
};
