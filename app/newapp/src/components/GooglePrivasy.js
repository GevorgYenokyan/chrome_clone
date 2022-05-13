import { AiFillQuestionCircle} from 'react-icons/ai'

function GooglePrivasy() {
    return(
        <div className='GooglePrivasy_contener'>
            
                <ul className="Privasy_list">
                    <li className="Privasy_iteam">
                        <img src="/chrome/static/images/fallback/google-footer-logo.jpg" alt="google"/>
                    </li>
                    <li className="Privasy_iteam">Privacy and Terms</li>
                    <li className="Privasy_iteam">About Google</li>
                    <li className="Privasy_iteam">Google Products</li>
                </ul>
            
                <ul className="Privasy_list">
                    <li className="Privasy_iteam"><AiFillQuestionCircle/></li>
                    <li className="Privasy_iteam">Help</li>
                    <li className="Privasy_iteam">
                       <select className='select_language'>
                           <option> <a className='futer_text'>English-United States</a></option>
                           <option><a className='futer_text'>English-United Armenia</a></option>
                           <option><a className='futer_text'>English-United Use</a></option>
                        
                        </select></li>
                </ul>
            

        </div>
    )
}


export default GooglePrivasy