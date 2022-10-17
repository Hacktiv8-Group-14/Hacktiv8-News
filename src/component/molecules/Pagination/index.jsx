import ReactPagination  from "https://cdn.skypack.dev/rc-pagination@3.1.15";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai"
import Button from "../../atoms/Button";
import "./Pagination.css"

export default function Pagination (props) {
    const {setSize,  size, current, setCurrent, news, totalResult } = props

    const PerPageChange = (value) => {
      setSize(value)
      const newPerPage = Math.ceil(news.length / value)
      if (current > newPerPage) {
          setCurrent(newPerPage)
      }
  }

  const PaginationChange = (page) => {
      setCurrent(page)
  }

  const PrevNextArrow = (current, type, originalElement) => {
      if (type === 'prev') {
          return <Button><AiOutlineDoubleLeft/></Button>;
      } if (type === 'next') {
          return <Button><AiOutlineDoubleRight/></Button>;
      }
      return originalElement;
  }

    return (
        <>
         <ReactPagination
                className="p-5 mt-5"
                onChange={PaginationChange}
                total={totalResult}
                current={current}
                pageSize={size}
                showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                showSizeChanger={false}
                itemRender={PrevNextArrow}
                onShowSizeChange={PerPageChange}
          />
        </>
    )
}