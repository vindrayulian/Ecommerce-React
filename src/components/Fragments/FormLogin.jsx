import InputForm from "../Element/Input";
import Button from "../Element/Button";

const FormLogin = () => {
    return (
        <form action="">
          <InputForm label="Email" type="email" name="email" placeholder="Enter your email" />
          <InputForm label="Password" type="password" name="password" placeholder="Enter your Password" />
          <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    )
}

export default FormLogin;