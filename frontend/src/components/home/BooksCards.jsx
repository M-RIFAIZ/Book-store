import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BooksSingleCard from "./BooksSingleCard";
const BooksCards = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {books.map((item) => (
        <BooksSingleCard key={item._id} book={item._id} />
      ))}
    </div>
  );
};

export default BooksCards;
