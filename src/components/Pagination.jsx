export default function Pagination() {
  return (
    <div>
      <nav aria-label="Page navigation example ">
        <ul className="list-style-none flex gap-3">
          <li>
            <a
              className="relative block rounded bg-[#212245] px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-[#Df2020]"
              href="#"
              aria-label="Previous"
            >
              <span
                aria-hidden="true"
                className="text-white font-istock text-base"
              >
                Prev
              </span>
            </a>
          </li>
          <li
            aria-current="page"
            className="relative block rounded bg-[#212245] px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-[#Df2020]"
          >
            <a className="text-white font-istock text-base" href="#">
              1
            </a>
          </li>
          <li
            aria-current="page"
            className="relative block rounded bg-[#212245] px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-[#Df2020]"
          >
            <a className="text-white font-istock text-base" href="#">
              2
            </a>
          </li>

          <li>
            <a
              className="relative block rounded bg-[#212245] px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-[#Df2020]"
              href="#"
              aria-label="Next"
            >
              <span
                aria-hidden="true"
                className="text-white font-istock text-base"
              >
                Next
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
