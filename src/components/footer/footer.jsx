// eslint-disable-next-line no-unused-vars
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillDiscord } from 'react-icons/ai'
// import { useEffect } from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css'
import './footer.css'

export default function Footer() {  
    return (
        <footer className="footer" >
            <p>&copy; 2024 C Square. All rights reserved.</p>
            <div className="social-links">
                <a href="https://www.instagram.com/csquare_club?igsh=b3F4enU5OWk1ODRw"><AiFillInstagram /></a>
                <a href="https://in.linkedin.com/company/csquare-club"><AiFillLinkedin /></a>
                <a href="https://discord.gg/zVGd9ran"><AiFillDiscord /></a>
            </div>
        </footer>
    )
}
