import UserIcon from "../../assets/icons/user-icon.png";

import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectUserById } from "../../redux/slices/UsersSlice";

const UserPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, userId));

  return user ? (
    <div className="flex flex-wrap gap-1">
      <img
        className="w-15 rounded"
        src={user.avatar || UserIcon}
        alt={[user.first_name, user.last_name].join(" ")}
      />
      <div>
        <h1>{[user.first_name, user.last_name].join(" ")}</h1>
        <p>{user.email}</p>
        <div className="flex gap-1">
          <button
            type="button"
            className="p-1"
            onClick={() => {
              navigate(`/users/${userId}/edit`);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="p-1"
            onClick={() => {
              // eslint-disable-next-line no-restricted-globals
              if (confirm("Please confirm you want to delete this record."))
                navigate(`/users/${userId}/destroy`);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    <>Not found!</>
  );
};

export default UserPage;
