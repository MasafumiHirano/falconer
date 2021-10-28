//components/Pagination.js
import Router from 'next/router';
import Link from 'next/link';

export const Pagination = ({ totalCount , page }) => {
  const PER_PAGE = 12;

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  if (totalCount < PER_PAGE) {
    return null;
  }
  return (
    <ul class="flex justify-center item-center mt-8">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index} class={`mx-2 px-4 py-2 ${number == page ? 'bg-gray-300' : ''} `}>
          <Link href={`/readings/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};