import { Link } from "react-router-dom";

const IndexPage = () => {

  return (
    <div>
      <h1>Choose a user</h1>
      <p>
        or add <Link className="text-sky-500" to="/users/new">new user</Link>
      </p>
    </div>
  );
};

export default IndexPage;
