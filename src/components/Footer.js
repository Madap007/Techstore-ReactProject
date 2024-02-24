import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <p className="text-capitalize">
              {" "}
              copyright &copy; TechVerse {new Date().getFullYear()}. all rights reserved{""}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}