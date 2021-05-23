import React from 'react'

const Footer = () => {
      const year=new Date().getFullYear();
    return (
        
        <>
            <footer className="w-100 bg-light text-center">
                <p>© {year} Vikas Sharma. All Rights Reserved ! All Terms and Conditions Reservised ! </p>
            </footer>
        </>
    )
}

export default Footer;