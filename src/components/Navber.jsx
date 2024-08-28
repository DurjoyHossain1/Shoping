import { IoCartSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex justify-between  flex-row">
        <NavLink to="/">
          <div className="ml-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPeN4d41CLrcQ0BrKvEMN4qHlZDu---qJ8Rw&s"
              alt=""
            />
          </div>
        </NavLink>

        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <IoCartSharp className="text-2xl" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navber;
