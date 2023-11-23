import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const endpoint = process.env.NEXT_PUBLIC_BASE_URL;
const Logo_Query = gql`{
  pages{
    edges{
      node{
        homePage{
          logo{
            mediaItemUrl
          }
        }
      }
    }
  }
}
`

import Link from "next/link"
export default function Footer() {
    const {data:logo} = useQuery("logo",async()=>{
        const res = await request(endpoint, Logo_Query)
        return res;
      })
  return (
    <>
    <footer>
    <div className="top">
    <div className="container">
    <ul className="">
                    <li className="menu-item">
        <a href="/en/related-links" title="Related Links" data-drupal-link-system-path="node/894">Related Links</a>
              </li>
                <li className="menu-item">
        <a href="/en/contact-us" title="Contact Us" data-drupal-link-system-path="node/1237">Contact Us</a>
              </li>
                <li className="menu-item">
        <a href="/en/website-policies" title="Website Policies" data-drupal-link-system-path="node/4">Website Policies</a>
              </li>
                <li className="menu-item">
        <a href="/en/Terms-and-Conditions" title="Terms and Conditions" data-drupal-link-system-path="node/997">Terms and Conditions</a>
              </li>
                <li className="menu-item">
        <a href="/en/Web-Information-Manager" title="Web Information Manager" data-drupal-link-system-path="node/1057">Web Information Manager</a>
              </li>
                <li className="menu-item">
        <a href="/en/feedback" title="Feedback" data-drupal-link-system-path="webform/feedback">Feedback</a>
              </li>
                <li className="menu-item">
        <a href="/en/public-opinion" title="public-opinion" data-drupal-link-system-path="node/1366">Public Opinion</a>
              </li>
                <li className="menu-item">
        <a href="/en/screen-reader" title="Help" data-drupal-link-system-path="node/1367">Help</a>
              </li>
        </ul>
    </div>
    </div>
    </footer>
    </>
  )
}
