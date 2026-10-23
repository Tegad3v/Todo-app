import { NavLink } from "react-router";

function Header() {
  return (
    <>
      <header className="bg-green-950 h-20">
        <div className="h-full w-full flex items-center justify-between text-white px-20">
          <h1 className="text-2xl capitalize">✅ Todo App</h1>

          <ul className="flex gap-5 capitalize">
            <li>
              <NavLink to={"/"}>home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>about</NavLink>
            </li>
            <li>
              <NavLink to={"/todo"}>todo</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
