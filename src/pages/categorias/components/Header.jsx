import arrow from "../../../arrow.png";
import { Link } from "react-router-dom";
import { colors } from "../../../const.js";

export function Header({ categoria }) {
  return (
    <header
      className={`relative flex  justify-center  mb-4 py-2 rounded-b-3xl mx-3
          md:py-5 md:mb-10 `}
      style={{ backgroundColor: colors[categoria] }}
    >
      <Link
        to="/"
        className="flex items-center"
      >
        <img
          src={arrow}
          alt="Go back"
          className="w-6 absolute left-5 flex  invert"
        />
      </Link>

      <h1
        className="text-2xl text-white font-semibold
        md:text-3xl"
      >
        {categoria}
      </h1>
    </header>
  );
}
