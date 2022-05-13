import "../stylesheets/FollowUs.css"
import { AiFillYoutube} from 'react-icons/ai'
import { FaTwitter} from 'react-icons/fa'
import { GrFacebook} from 'react-icons/gr'



function FollowUs() {




    return(<div className="Follow_div">        
              <h3 className="follow_text"> Follow us</h3>
              <a  href="#"><AiFillYoutube className="Follow_linkYoutube"/></a>
              <a  href="#"><FaTwitter className="Follow_linkTwitter"/></a>
              <a  href="#"><GrFacebook className="Follow_linkFacebook"/></a>
    </div>)
}

export default FollowUs