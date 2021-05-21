import React from 'react'

const Footer = ({ isFullWidth }) => {
    return (
        <footer className={isFullWidth ? "SFSFooter SFSFooterFullWidth" : "SFSFooter"}>
            <p>&copy; SFS 2021</p>
        </footer>
    )
}

export default Footer
