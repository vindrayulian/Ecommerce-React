import InputForm from "../Element/Input";
import Button from "../Element/Button";

const FormRegister = () => {
    return (
        <form action="">
          <InputForm label="Username" type="text" name="username" placeholder="insert your Username" />
          <InputForm label="Email" type="email" name="email" placeholder="Enter your email" />
          <InputForm label="Password" type="password" name="password" placeholder="Enter your Password" />
          <InputForm label="Confrim Password" type="password" name="confirmPassoword" placeholder="Enter your confirm Password" />
          <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister;