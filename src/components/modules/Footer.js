import React from 'react'

const Footer = ({ isFullWidth }) => {
    return (
        <footer className={isFullWidth ? "SFSFooter SFSFooterFullWidth userNotSelectable" : "SFSFooter userNotSelectable"}>
            <p>&copy; SFS 2021</p>
        </footer>
    )
}

export default Footer
