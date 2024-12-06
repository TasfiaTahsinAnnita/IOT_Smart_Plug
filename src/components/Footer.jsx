import React from "react";
import "./Footer.css"; // Import the corresponding CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="team-name">Team: Innovators</div>
                <div className="team-members">
                    <span>John Doe</span>
                    <span>Jane Smith</span>
                    <span>Michael Lee</span>
                    <span>Emily Davis</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
