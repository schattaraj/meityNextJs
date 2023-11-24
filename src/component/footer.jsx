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
  const { data: logo } = useQuery("logo", async () => {
    const res = await request(endpoint, Logo_Query)
    return res;
  })

  return (
    <footer>
        
      <nav role="navigation" style={{ backgroundColor: '#555' }}>
      <div className="container">
        <ul className="row flex-wrap">
          <li className="col-md col-sm-4 col-xs-6 menu-item">
            <a href="/en/related-links" title="Related Links">Related Links</a>
          </li>

          <li className="col-md col-sm-4 col-xs-6 menu-item">
            <a href="/en/contact-us" title="Contact Us">Contact Us</a>
          </li>

          <li className="col-md col-sm-4 col-xs-6 menu-item">
            <a href="/en/website-policies" title="Website Policies">Website Policies</a>
          </li>

          <li className="col-md col-sm-4 col-xs-6 menu-item">
            <a href="/en/Terms-and-Conditions" title="Terms and Conditions">Terms and Conditions</a>
          </li>

          <li className="col-md col-sm-4 col-xs-6 menu-item">
            <a href="/en/Web-Information-Manager" title="Web Information Manager">Web Information Manager</a>
          </li>

          <li className="col-md col-sm-4 col-xs-6 menu-item">
            <a href="/en/feedback" title="Feedback">Feedback</a>
          </li>

          <li className="col-md col-sm-4 col-xs-6 menu-item">
            <a href="/en/public-opinion" title="Public Opinion">Public Opinion</a>
          </li>

          <li className="col-md col-sm-4 col-xs-6 menu-item">
            <a href="/en/screen-reader" title="Help">Help</a>
          </li>
        </ul>
        </div>
      </nav>      
    </footer>
  )
}
