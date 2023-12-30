import { Link, Outlet } from "react-router-dom";
import { current } from "../utils/algo";

const Layout = () => {
  return (
    <div>
      <header>Prisoner&apos;s Dilemma</header>
      <nav>
        <ul>
          <li>
            <Link to={"/"} className={current("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className={current("/about")}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Link
          target="_blank"
          to={"https://github.com/skorotkiewicz/prisoners-dilemma/"}
        >
          source
        </Link>
      </footer>
    </div>
  );
};

export default Layout;
