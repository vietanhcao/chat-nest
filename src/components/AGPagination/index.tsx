import { number } from 'prop-types';
import React, { useMemo, useState } from 'react';
import './style.scss';

interface PagePT {
  page: any;
  current: number;
  onClick: () => void;
}

const Page: React.FC<PagePT> = ({ page, current, onClick }) => {
  return (
    <div className={`page-container ${page === current ? 'page-container-active' : ''}`} onClick={onClick}>
      <div className="page">{page}</div>
    </div>
  );
};

const Break = () => {
  return (
    <div className="page-container page-container-break">
      <div className="page">...</div>
    </div>
  );
};

interface PT {
  page: number;
  current: number;
  setCurrent: (a: number) => {};
}

const AGPagination: React.FC<PT> = ({ page, current, setCurrent }) => {
  const pagesArray = useMemo(() => {
    let array: number[] = [];
    switch (true) {
      case page <= 7:
        for (let i = 2; i <= Math.min(6, page - 1); i++) array.push(i);
        break;

      case current <= 4:
        for (let i = 2; i <= Math.min(5, page - 1); i++) array.push(i);
        break;

      case current >= page - 3:
        for (let i = page - 4; i <= page - 1; i++) array.push(i);
        break;

      default:
        for (let i = current - 1; i <= current + 1; i++) array.push(i);
        break;
    }

    return array;
  }, [page, current]);

  return (
    <div className="ag-pagination-container">
      {/* Previous button */}
      <Page
        key={'previousBtn'}
        page={<i className="fas fa-chevron-left"></i>}
        onClick={() => {
          if (current > 1) setCurrent(current - 1);
        }}
        current={current - 1}
      />
      {/* First page */}
      <Page key={'1'} page={1} current={current} onClick={() => setCurrent(1)} />
      {/* Break */}
      {pagesArray.length > 0 && !pagesArray.includes(2) && <Break />}
      {/* Main */}
      {pagesArray.map((value) => (
        <Page key={value} page={value} current={current} onClick={() => setCurrent(value)} />
      ))}
      {/* Break */}
      {pagesArray.length > 0 && !pagesArray.includes(page - 1) && <Break />}
      {/* Last page */}
      {page > 1 && <Page key={page} page={page} current={current} onClick={() => setCurrent(page)} />}
      {/* Next button */}
      <Page
        key={'nextBtn'}
        page={<i className="fas fa-chevron-right"></i>}
        onClick={() => {
          if (current < page) setCurrent(current + 1);
        }}
        current={current + 1}
      />
    </div>
  );
};

export default AGPagination;
