import { useNavigate } from "react-router-dom";

const IndexPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Choose a user.</h1>
      <p>or add new user</p>
      <button
        className="p-1"
        onClick={() => {
          navigate("/users/new");
        }}
      >
        New User
      </button>
    </>
  );
};

export default IndexPage;
