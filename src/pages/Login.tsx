import MobileContainer from "../components/MobileContainer"
import Input from "../components/Input"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()

  return (

    <MobileContainer>

      <h2 className="title">
        Signin to your <br /> PopX account
      </h2>

      <p className="subtitle">
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit.
      </p>

      <Input
        label="Email Address"
        placeholder="Enter email address"
      />

      <Input
        label="Password"
        placeholder="Enter password"
        type="password"
      />

      <Button
        text="Login"
        onClick={()=>navigate("/profile")}
      />

    </MobileContainer>

  )
}

export default Login