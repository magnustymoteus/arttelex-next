import { Pagination } from "react-bootstrap";
import { useRouter } from 'next/router'

const CustomPagination = (props) => {
  const router = useRouter();
  const getUrlQuery = () => {
      const urlPageParam = Number(router.query.page);
      const page = (urlPageParam*12-12>props.amount-1 || !urlPageParam)?1:Number(urlPageParam);
      return page;
  }
  const redirect = (pageArg) => {
      router.push(`/archived?page=${pageArg}`);
  }
    const page = getUrlQuery();
    let paginationElems = [];
    let maxPages = Math.ceil(props.amount/12);
    let a = page-(page%4);
    let b = a+3;
    for(let x=a;x<=b&&x<=maxPages;x++) {
      paginationElems.push(
        <Pagination.Item key={`archived-page${x}`} disabled={x===page} active={page===x?true:false} onClick={() => redirect(x)}>
          {x}
          </Pagination.Item>
        );
    }
    return (
        <Pagination className="justify-content-center pagination my-2">
        <Pagination.First disabled={page===1} onClick={() => redirect(1)}/>
        <Pagination.Prev disabled={page===1} onClick={() => redirect(page-1)}/>
        {paginationElems}
        <Pagination.Next disabled={page===maxPages} onClick={() => redirect(page+1)}/>
        <Pagination.Last disabled={page===maxPages} onClick={() => redirect(maxPages)}/>
      </Pagination>
    );
}

export default CustomPagination;