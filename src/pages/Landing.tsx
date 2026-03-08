import { useNavigate } from "react-router-dom"
import MobileContainer from "../components/MobileContainer"
import Button from "../components/Button"

const Landing = () => {

  const navigate = useNavigate()

  return (
    <MobileContainer>

      <div className="page-bottom" style={{ marginTop: "auto" }}>
        

        <h2 className="title">Welcome to PopX</h2>

        <p className="subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>

        <Button
          text="Create Account"
          onClick={()=>navigate("/signup")}
        />

        <Button
          text="Already Registered? Login"
          variant="secondary"
          onClick={()=>navigate("/login")}
        />
        

      </div>

    </MobileContainer>
  )
}

export default Landing