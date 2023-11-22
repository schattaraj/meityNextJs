import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const endpoint = "http://localhost/wordpress/graphql/";
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
    <div className="row">
    <div className="col-lg-5">
    <Link href="#" className="footer-logo"><img src={logo?.pages?.edges[0]?.node?.homePage.logo.mediaItemUrl} alt="Emblam"/> </Link>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe at rerum eveniet explicabo, qui a?</p>
    </div>
    <div className="col-lg-3">
    <div className="quick-links">
    <h3>Quick Links</h3>
    <Link href="#">About Us</Link>
    <Link href="#">Division</Link>
    <Link href="#">Organisations</Link>
    <Link href="#">RTI</Link>
    <Link href="#">Notifications</Link>
    </div>
    </div>
    <div className="col-lg-4">
    <h3>Contact Us</h3>
    <h4>
    <span>Electronics Niketan, 6, CGO Complex</span></h4>
    <h4>
    <Link href="tel:8866000011">
    <span>+91-11-24361756</span>
    </Link>
    </h4>
    <h4>
    <Link href="mailto:sdas">
    <span>webmaster@meity.gov.in</span>
    </Link>
    </h4>
    </div>
    </div>
    </div>
    </div>
    <div className="copy-right">
    <div className="container">
    <p>© <span id="year">2023</span> NextJs / All Rights Reserved</p>
    </div>
    </div>
    </footer>
    </>
  )
}
