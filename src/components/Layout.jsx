import { Link } from "wouter";
import { current } from "../utils/algo";

const Layout = ({ children }) => {
  return (
    <div>
      <header>Prisoner&apos;s Dilemma</header>
      <nav>
        <ul>
          <li>
            <Link href={"/"} className={current("/game")}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className={current("/about")}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        <a
          href="https://github.com/skorotkiewicz/prisoners-dilemma/"
          target="_blank"
        >
          source
        </a>
      </footer>
    </div>
  );
};

export default Layout;
