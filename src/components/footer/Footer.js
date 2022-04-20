import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-my-infos">
        <p><span>Name</span> : OUTAA BRAHIM</p>
        <p><span>Linkedin</span> : 
          <button>
            <a href="https://es.linkedin.com/in/brahim-outaa-1711651a4" target="_blank" rel="noreferrer">linkedin</a>
          </button>
        </p>
        <p><span>Email</span> : ebowebdev@gmail.com</p>
      </div>
      <div className="footer-copy-right">
        <p>Copyright &copy; 2022</p>
      </div>
    </div>
  )
}

export default footer