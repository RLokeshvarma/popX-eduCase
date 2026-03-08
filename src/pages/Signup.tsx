import { useNavigate } from "react-router-dom"
import MobileContainer from "../components/MobileContainer"
import Input from "../components/Input"
import Button from "../components/Button"
import { useState } from "react"

const Signup = () => {

  const navigate = useNavigate()

  const [agency, setAgency] = useState("yes")

  return (

    <MobileContainer>

      <div className="form-wrapper">

        <h2 className="title">
          Create your PopX account
        </h2>

        <Input label="Full Name" required placeholder="Marry Doe" />
        <Input label="Phone number" required placeholder="Marry Doe" />
        <Input label="Email address" required placeholder="Marry Doe" />
        <Input label="Password" required placeholder="Marry Doe" type="password"/>
        <Input label="Company name" placeholder="Marry Doe"/>

        <div className="radio-group">

          <p>
            Are you an Agency? <span className="required">*</span>
          </p>

          <label className="radio-option">

            <input
              type="radio"
              value="yes"
              checked={agency==="yes"}
              onChange={()=>setAgency("yes")}
            />

            Yes

          </label>

          <label className="radio-option">

            <input
              type="radio"
              value="no"
              checked={agency==="no"}
              onChange={()=>setAgency("no")}
            />

            No

          </label>

        </div>

      </div>

      <div className="form-button">

        <Button
          text="Create Account"
          onClick={()=>navigate("/profile")}
        />

      </div>

    </MobileContainer>
  )
}

export default Signup