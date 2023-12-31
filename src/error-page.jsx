import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h1>Ops...</h1>
      <p>We have a problem...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
