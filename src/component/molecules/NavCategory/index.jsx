import { NavLink } from "react-router-dom";

export default function NavCategory() {
  const navActive = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#F67D12" : "#cbd5e1",
    };
  };

  return (
    <div className="justify-center flex text-black text-xs">
      <NavLink
        className={`p-2 rounded-lg m-2 hover:bg-orange`}
        to="/indonesia"
        style={navActive}
      >
        Indonesia
      </NavLink>
      <NavLink
        className="p-2 rounded-lg m-2 hover:bg-orange"
        to="/covid"
        style={navActive}
      >
        Covid
      </NavLink>
      <NavLink
        className="p-2 rounded-lg m-2 hover:bg-orange"
        to="/programming"
        style={navActive}
      >
        Programming
      </NavLink>
    </div>
  );
}
