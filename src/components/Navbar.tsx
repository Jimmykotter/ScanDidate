import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Scandidate Search</Link>
      <ul>
        <li className="active">
          {" "}
          <Link to="./SavedCandidates">SavedCandidates</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

//navbar includes a link to all the pages.
