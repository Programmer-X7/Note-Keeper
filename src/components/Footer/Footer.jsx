import React from 'react'
import "./footer.css"

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Copyright ⓒ {year}</p>
      </footer>
    </div>
  )
}

export default Footer
