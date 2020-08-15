import React from "react"
import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
  FaGithub,
} from "react-icons/fa"

const SocialNetwork = () => (
  <div className="social-network">
    <a target='_blank'  href="tg://user?id=mosssiiiiiii">
      <FaTelegram />
    </a>
    <a target='_blank'  href="https://wa.me/989195127852">
      <FaWhatsapp />
    </a>
    <a target='_blank'  href="https://www.linkedin.com/in/mohsen-haghighatkhah/">
      <FaLinkedin />
    </a>
    <a target="_blank" href='https://twitter.com/mosssiiiiiii'>
      <FaTwitter />
    </a>
    <a target='_blank' href='https://github.com/mosssiiiiiii'>
      <FaGithub />
    </a>
    <a target='_blank' href="https://stackoverflow.com/users/10825919/mosssiiiiiii">
      <FaStackOverflow />
    </a>
  </div>
)

export default SocialNetwork
