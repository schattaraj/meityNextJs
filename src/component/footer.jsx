import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const endpoint = process.env.NEXT_PUBLIC_BASE_URL;

import Link from "next/link"
export default function Footer() {


  return (
    <footer>
        
      <nav role="navigation" style={{ backgroundColor: '#555' }}>
      <div className="container">
        <ul className="flex-wrap">
          <li className="menu-item">
            <a href="/en/related-links" title="Related Links">Related Links</a>
          </li>

          <li className="menu-item">
            <a href="/en/contact-us" title="Contact Us">Contact Us</a>
          </li>

          <li className="menu-item">
            <a href="/en/website-policies" title="Website Policies">Website Policies</a>
          </li>

          <li className="menu-item">
            <a href="/en/Terms-and-Conditions" title="Terms and Conditions">Terms and Conditions</a>
          </li>

          <li className="menu-item">
            <a href="/en/Web-Information-Manager" title="Web Information Manager">Web Information Manager</a>
          </li>

          <li className="menu-item">
            <a href="/en/feedback" title="Feedback">Feedback</a>
          </li>

          <li className="menu-item">
            <a href="/en/public-opinion" title="Public Opinion">Public Opinion</a>
          </li>

          <li className="menu-item">
            <a href="/en/screen-reader" title="Help">Help</a>
          </li>
        </ul>
        </div>
      </nav>  
      <div className="footer-bottom">
        <div className="container">
          <div className="flex">
            <div className="customvisit"></div>
            <div className="logo-cmf"></div>
            <div className="logo-cmf"></div>
            <div class="copyright-content"> Website Content  Owned by  <strong>Ministry of Skill Development &amp; Entrepreneurship | Government Of India</strong> <span>Designed, Developed and Hosted by <a target="_blank" title="NIC, External Link that opens in a new window" href="http://www.nic.in/" rel="noopener noreferrer"><strong>National Informatics Centre</strong></a><strong> ( NIC )</strong></span> <span>  All rights reserved</span>
					  </div>
            <div class="alterupdated">Last Updated : 22-11-2023</div>
          </div>
        </div>
        </div>    
    </footer>
  )
}
