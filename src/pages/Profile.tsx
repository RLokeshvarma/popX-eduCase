import MobileContainer from "../components/MobileContainer"
import avatar from "../assets/avatar.png"
import { FaCamera } from "react-icons/fa";

const Profile = () => {

  return (

    <MobileContainer>

      <div className="profile-page">

        {/* header */}

        <div className="profile-header">
          Account Settings
        </div>

        {/* profile section */}

        <div className="profile-content">

          <div className="profile-row">

            <div className="avatar-wrapper">

              <img
                src={avatar}
                className="avatar"
              />

              <div className="camera-icon">
                <FaCamera size={10} />
              </div>

            </div>

            <div className="profile-info">

              <div className="profile-name">
                Marry Doe
              </div>

              <div className="profile-email">
                Marry@gmail.com
              </div>

            </div>

          </div>

          <p className="profile-text">

            Lorem Ipsum Dolor Sit Amet, Consetetur
            Sadipscing Elitr, Sed Diam Nonumy
            Eirmod Tempor Invidunt Ut Labore
            Et Dolore Magna Aliquyam Erat.

          </p>

        </div>

        <div className="divider"></div>

        <div className="footer-divider"></div>

      </div>

    </MobileContainer>

  )
}

export default Profile