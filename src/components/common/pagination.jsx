import React from "react";
import _ from "lodash";

function Pagination({ currentPage, pageSize, itemsCount, onPageChange }) {
  let totalPage = Math.ceil(itemsCount / pageSize);

  if (totalPage === 1) return null;

  const paginateItems = _.range(1, totalPage + 1);

  return (
    <div>
      <div class="btn-group">
        {paginateItems.map((page) => (
          <button
            class={
              currentPage === page ? "btn btn-md btn-active" : "btn btn-md"
            }
            onClick={() => onPageChange(page)}
            key={page}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
