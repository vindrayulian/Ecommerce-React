import InputForm from "../Element/Input";
import Button from "../Element/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email' , event.target.email.value);
    localStorage.setItem('password' , event.target.password.value);
    window.location.href = '/products';
  }
    return (
        <form onSubmit={handleLogin}>
          <InputForm label="Email" type="email" name="email" placeholder="Enter your email" />
          <InputForm label="Password" type="password" name="password" placeholder="Enter your Password" />
          <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin;