// import UserIcon from "../../assets/icons/user-icon.png";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectUserById, updateUser } from "../../redux/slices/UsersSlice";
import { Input, PrimaryButton, SecondaryButton } from "../../components";

const EditUserPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => selectUserById(state, userId));
  const [body, setBody] = useState({});

  useEffect(() => {
    setBody(user);
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(body));
    navigate(`/users/${userId}`);
  };

  const handleInputChanges = (event) => {
    setBody((value) => {
      return { ...value, ...{ [event.target.name]: event.target.value } };
    });
  };

  return body ? (
    <form onSubmit={handleSubmit} className="grid items-center gap-4">
      {/* <img
        className="rounded-full w-60"
        src={body.avatar || UserIcon}
        alt={[body.first_name, body.last_name].join(" ")}
      />
      <Input
        type="file"
        accept="image/*"
        name="avatar"
        onChange={handleInputChanges}
      /> */}
      <div className="lg:flex lg:gap-4">
        <Input
          label="First Name"
          type="text"
          name="first_name"
          defaultValue={body.first_name}
          onChange={handleInputChanges}
        />
        <Input
          label="Last Name"
          type="text"
          name="last_name"
          defaultValue={body.last_name}
          onChange={handleInputChanges}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          defaultValue={body.email}
          onChange={handleInputChanges}
        />
      </div>
      <div className="flex items-end gap-4">
        <PrimaryButton type="submit">Save</PrimaryButton>
        <SecondaryButton
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </SecondaryButton>
      </div>
    </form>
  ) : (
    <></>
  );
};

export default EditUserPage;
