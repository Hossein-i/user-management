import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  NavLink,
  Outlet,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { fetchUsers, selectAllUsers } from "../redux/slices/UsersSlice";

const RootPage = () => {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  //   const searching =
  //     navigation.location &&
  //     new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex gap-1">
      <div>
        <div className="flex">
          <input
            className="p-1"
            type="search"
            name="q"
            id="q"
            placeholder="Search..."
            defaultValue={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button
            type="button"
            className="p-1"
            onClick={() => {
              navigate("/users/new");
            }}
          >
            New User
          </button>
        </div>
        <div>
          <ul>
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
                      className={({ isActive, isPending }) =>
                        `text-decoration-none block p-1 color-black ${
                          isActive
                            ? "item-active"
                            : isPending
                            ? "item-pending"
                            : ""
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
      <div
        className={`${
          navigation.state === "loading" ? "loading" : ""
        } flex-auto`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default RootPage;
