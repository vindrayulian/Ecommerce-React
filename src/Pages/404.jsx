import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center items-center min-h-screen flex-col text-center gap-y-5">
            <h1 className="text-5xl font-bold">Oopss!</h1>
            <p className="my-5 text-xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg">
                {error.statusText || error.message}
            </p>
        </div>
    );
};

export default ErrorPage;