import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex justify-center h-screen items-center"
    >
      <li>
        <h1 className="bold text-center text-3xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-center">
          <i>{error.statusText || error.message}</i>
        </p>
      </li>
    </div>
  );
}
