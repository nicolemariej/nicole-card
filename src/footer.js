import React from "react"
import { FaTwitterSquare} from 'react-icons/fa';
import { FaFacebookSquare} from 'react-icons/fa';
import { FaInstagramSquare} from 'react-icons/fa';
import { FaGithubSquare} from 'react-icons/fa';



export default function Footer(){
    return (
        <footer>
        <a href="https://twitter.com/nicolessay" target ="blank" className="icon"><FaTwitterSquare /></a>
        <a href="https://www.facebook.com/profile.php?id=657140234" target="blank" className="icon"><FaFacebookSquare /></a>
        <a href="https://www.instagram.com/nicoletravelstheworld/" target="blank" className="icon"><FaInstagramSquare /></a>
        <a href="https://github.com/nicolemariej" target="blank" className="icon"><FaGithubSquare /></a>

        </footer>
    )
}