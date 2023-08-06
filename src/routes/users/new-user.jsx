// import UserIcon from "../../assets/icons/user-icon.png";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/slices/UsersSlice";
import { Input, PrimaryButton, SecondaryButton } from "../../components";

const NewUserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [body, setBody] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser(body));
    navigate("/", { replace: true });
  };

  const handleInputChanges = (event) => {
    setBody((value) => {
      return { ...value, ...{ [event.target.name]: event.target.value } };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
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
          id="email"
          defaultValue={body.email}
          onChange={handleInputChanges}
        />
      </div>

      <div className="flex-15 flex items-end gap-4">
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
  );
};

export default NewUserPage;
