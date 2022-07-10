import _ from "lodash";

export default function Paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  const paginateItems = _(items).slice(startIndex).take(pageSize).value();

  return paginateItems;
}
