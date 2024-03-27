import { useState } from "react";
import AddTask from "../Tasks/AddTask";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <h2 className="btn btn-ghost text-xl">Tasks</h2>
      </div>
      <div className="navbar-center flex justify-center gap-5">
        <select name="">
          <option value="">Name 1</option>
          <option value="">Name 2</option>
          <option value="">Name 3</option>
          <option value="">Name 4</option>
          <option value="">Name 5</option>
        </select>
        <select name="">
          <option value="">Name 1</option>
          <option value="">Name 2</option>
          <option value="">Name 3</option>
          <option value="">Name 4</option>
          <option value="">Name 5</option>
        </select>
        <select name="">
          <option value="">Name 1</option>
          <option value="">Name 2</option>
          <option value="">Name 3</option>
          <option value="">Name 4</option>
          <option value="">Name 5</option>
        </select>
        <select name="">
          <option value="">Name 1</option>
          <option value="">Name 2</option>
          <option value="">Name 3</option>
          <option value="">Name 4</option>
          <option value="">Name 5</option>
        </select>
      </div>
      <div className="navbar-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn bg-indigo-500 hover:bg-indigo-400 text-white btn-md"
        >
          Add Task
        </button>
        <AddTask isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
