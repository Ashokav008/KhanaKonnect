import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText, data, error } = err;
  console.log(err);
  return (
    <>
      <h3>{"Status Code " + status}</h3>
      <h4>{statusText + "   :  " + error}</h4>
    </>
  );
};

export default Error;
