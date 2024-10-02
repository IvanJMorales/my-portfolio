import React from "react";
import "../styles/companies-grid.css";

const CompaniesGrid = () => {
    return (
        <div className="section">
        <h1 className="section-title">Companies I've Worked With</h1>
            <div className="companies-grid">
            <a href="https://www.xchatfans.com/">
                    <img src="/static/xcf-logo.png" className="company-logo" width="600" height="200" alt="company 1" />
                </a>
                <a href="https://www.formaviva.com/">
                    <img src="/static/formaviva-logo.svg" className="company-logo" width="250" height="200" alt="company 1" />
                </a>

            </div>
        </div>
    )
}

export default CompaniesGrid;