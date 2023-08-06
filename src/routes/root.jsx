import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { fetchUsers, selectAllUsers } from "../redux/slices/UsersSlice";
import { Input, SecondaryButton } from "../components";

const RootPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex gap-4 p-4">
      <div className="grid content-start gap-4">
        <div className="grid gap-4">
          <Input
            type="search"
            name="q"
            id="q"
            placeholder="Search..."
            defaultValue={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <SecondaryButton
            onClick={() => {
              navigate("/users/new");
            }}
          >
            New User
          </SecondaryButton>
        </div>
        <div>
          <ul className="overflow-y-auto">
            {users &&
              users
                .filter((user) =>
                  [user.first_name, user.last_name]
                    .join(" ")
                    .toLowerCase()
                    .includes(search)
                )
                .map((user) => (
                  <li key={user.id}>
                    <NavLink
                      to={`/users/${user.id}`}
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg hover:opacity-75 ${
                          isActive ? "bg-sky-500 text-white" : ""
                        }`
                      }
                    >
                      {[user.first_name, user.last_name].join(" ")}
                    </NavLink>
                  </li>
                ))}
          </ul>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootPage;
