import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/slices/UsersSlice";

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
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-1">
      {/* upload file */}
      {/* <input
        type="image"
        src={body.avatar}
        alt={[body.first_name, body.last_name].join(" ")}
      />
      <input type="file" accept="image/*" name="avatar" id="avatar" /> */}
      <label htmlFor="first_name" className="flex-15 grid">
        <span>First Name</span>
        <input
          className="p-1"
          type="text"
          name="first_name"
          id="first_name"
          defaultValue={body.first_name}
          onChange={handleInputChanges}
        />
      </label>
      <label htmlFor="last_name" className="flex-15 grid">
        <span>Last Name</span>
        <input
          className="p-1"
          type="text"
          name="last_name"
          id="last_name"
          defaultValue={body.last_name}
          onChange={handleInputChanges}
        />
      </label>
      <label htmlFor="email" className="flex-15 grid">
        <span>Email</span>
        <input
          className="p-1"
          type="email"
          name="email"
          id="email"
          defaultValue={body.email}
          onChange={handleInputChanges}
        />
      </label>

      <div className="flex-15 flex items-end gap-1">
        <button type="submit" className="p-1">
          Save
        </button>
        <button
          type="button"
          className="p-1"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewUserPage;
