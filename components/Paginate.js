export default function Paginate({postPerPage, totalPost, paginate, onPreviousClick, onNextClick}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPost/postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center">
            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none">
                <li className="page-item disabled"><a
                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 cursor-pointer focus:shadow-none"
                    onClick={onPreviousClick} aria-disabled="true">Previous</a></li>
                {pageNumbers.map((num) => (
                    <li className="page-item" key={num}><a
                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    onClick={() => paginate(num)}>{num}</a></li>
                ))}
                <li className="page-item"><a
                    className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    onClick={onNextClick}>Next</a></li>
                </ul>
            </nav>
        </div>
    );
}