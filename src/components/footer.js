import * as React from "react"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//css
import '../styles/footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/IvanJMorales">
                <GitHubIcon/>
            </a>
            <a href="/">
                <LinkedInIcon/>
            </a>

        </div>
    )
}

export default Footer;

