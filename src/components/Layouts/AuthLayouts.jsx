import { Link } from "react-router-dom";

const AuthLayout = (props) => {
    const { title, children, type } = props;
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">Welcome, pleace enter your detail</p>
                {children}
                <Navigation type={type} />
            </div>
        </div>

    );
};

const Navigation = ({type}) => {
    if (type === "login") {
        return (
            <p className="mt-5 tex-sm text-center">
                Belum punya akun? {" "}
                <Link to="/" className="text-blue-600 font-bold">
                    Daftar
                </Link>
            </p>
        );
    } else {
        return (
            <p className="mt-5 tex-sm text-center">
                Sudah punya akun? {" "}
                <Link to="/login" className="text-blue-600 font-bold">
                    Masuk
                </Link>
            </p>
        );
    }
}

export default AuthLayout;