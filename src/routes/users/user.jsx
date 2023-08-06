import UserIcon from "../../assets/icons/user-icon.png";

import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectUserById } from "../../redux/slices/UsersSlice";
import { PrimaryButton, SecondaryButton } from "../../components";

const UserPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, userId));

  return user ? (
    <div className="flex justify-center items-center flex-wrap gap-4">
      <img
        className="rounded-full w-60"
        src={user.avatar || UserIcon}
        alt={[user.first_name, user.last_name].join(" ")}
      />
      <div className="grid justify-items-center">
        <h1 className="text-2xl font-bold">{[user.first_name, user.last_name].join(" ")}</h1>
        <p>{user.email}</p>
      </div>
        <div className="flex gap-4">
          <PrimaryButton
            onClick={() => {
              navigate(`/users/${userId}/edit`);
            }}
          >
            Edit
          </PrimaryButton>
          <SecondaryButton
            onClick={() => {
              // eslint-disable-next-line no-restricted-globals
              if (confirm("Please confirm you want to delete this record."))
                navigate(`/users/${userId}/destroy`);
            }}
          >
            Delete
          </SecondaryButton>
        </div>
    </div>
  ) : (
    <>Not found!</>
  );
};

export default UserPage;
