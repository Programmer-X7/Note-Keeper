import React from 'react'
import "./footer.css"

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Copyright &copy;{currentYear}</p>
      </footer>
    </div>
  )
}

export default Footer
