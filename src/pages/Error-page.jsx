import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="
      grid
      grid-cols-1
      gap-2
      text-center 
      mt-10"
      id="error-page">
      <h1>Oops!</h1>
      <p>Неожиданная ошибка.</p>
      <Link to='/'>НА ГЛАВНУЮ</Link>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}