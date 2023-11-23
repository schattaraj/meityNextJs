import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import Link from "next/link"
import { useState } from "react";
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

export default function Header(){
  const [showMenu,setShowMenu] = useState(false)
  const {data:logo} = useQuery("logo",async()=>{
    const res = await request(endpoint, Logo_Query)
    return res;
  })
  const toggleMenu = ()=>{
    if(showMenu){
      setShowMenu(false)
    }
    else{
      setShowMenu(true)
    }
  }
return <>
<section className="top_head">
		<div className="wrapper">
			<div className="region region-header">
        <div className="region-inner clearfix">
          <div id="block-block-4" className="block block-block no-title">
            <div className="block-inner clearfix">  
  
  <div className="block-content content">       
<div className="tophead_left">
<span className="flex">
<a target="_blank" href="https://india.gov.in/hi" title="भारत सरकार ( बाहरी वेबसाइट जो एक नई विंडो में खुलती है)" rel="noopener noreferrer">भारत सरकार</a>
<a target="_blank" href="https://india.gov.in/" title="Government Of India,External Link that opens in a new window" rel="noopener noreferrer">Government of india</a>

</span>
</div>
<div className="tophead_right">
<a href="#main-content" className="loginlinks skip-link">Scip to main content</a>
<a href="#main-content" className="loginlinks skip-link">Screen Reader Access</a>
<a href="https://www.india.gov.in/user/login" className="loginlinks">Search</a>
<a href="https://www.india.gov.in/user/login" className="loginlinks">Sitemap</a>
<a href="https://www.india.gov.in/user/login" className="loginlinks">Language</a>
			

{/* <a href="https://www.xn--i1bj3fqcyde.xn--11b7cb3a6a.xn--h2brj9c/" className="alink" id="switch-lang" title="Change Language हिन्दी" aria-label="Change Language हिन्दी" rel="हिन्दी">हिन्दी</a>    */}
</div></div>
  </div></div></div></div>		</div>
	</section>
  <section className="header_middle">
		<div className="wrapper">
      <div className="flex py-2">
<h1 style={{display: "none"}}><img src="https://www.india.gov.in/sites/upload_files/npi/files/newsletter/logo_share.png" alt="NPI Logo"/></h1>
        			  <div id="logo">
				 <a href="https://www.india.gov.in/" aria-label="Go to home" title="Go to home">
          <img alt="India Gov Logo" src={logo?.pages?.edges[0]?.node?.homePage.logo.mediaItemUrl} typeof="foaf:Image" className="site-logo"/>
          <span>कौशल विकास और उद्यमशीलता मंत्रालय              <br/>
              <em>Ministry of </em> Skill Development
              <br/>
              And Entrepreneurship            </span>
          </a>
			  </div>
        <div class="float-element">
              <a href="https://www.g20.org/en/" target="_blank" class="g20" rel="noopener noreferrer"><img class="national_emblem" src="/images/G20_logo.png" alt="G20" style={{height: "73px"}}/></a>
              <a class="sw-logo1" target="_blank" href="https://www.skillindia.gov.in/" title="Skill India, External link that open in a new windows " rel="noopener noreferrer"><img src="/images/skill-india.png" alt="Skill India"/></a>
            </div>
        <button className={showMenu ? "toggle-bar cross" : "toggle-bar"} onClick={toggleMenu}></button>
			              {/* <a className="mobileNav" aria-label="Mobile Menu" title="Mobile Menu" href="javascript:;"><span></span><span></span><span></span></a> */}
		
  </div>
  	</div>
	</section>
<section className={showMenu ? "bottom_header active" : "bottom_header"}>
<div className="wrapper">
  <ul className="menus">
    <li>
      <Link href={"/"}>
        <img src="/images/home.svg" alt="" />
      </Link>
    </li>
<li>
  <Link href={"#"}>Dashboard <span class="indicator">+</span></Link>
  <ul className="submenu">
        <li><Link href={"#"}>NAPS</Link></li>
        <li><Link href={"#"}>PMKVY</Link></li>
      </ul>
  </li>
  <li><Link href={"#"}>About MSDE <span class="indicator">+</span></Link>
  <ul className="submenu">
        <li><Link href={"#"}>About MSDE</Link></li>
        <li><Link href={"#"}>Background</Link></li>
        <li><Link href={"#"}>Allocation of Business Rules</Link></li>
        <li><Link href={"#"}>Acts & Rules</Link></li>
        <li><Link href={"#"}>Citizen Charter</Link></li>
        <li><Link href={"#"}>Organizations Structure</Link></li>
        <li><Link href={"#"}>Important Days</Link></li>
        <li><Link href={"#"}>Who's who</Link></li>
  </ul>
  </li>
  <li><Link href={"#"}>Minister</Link></li>
  <li><Link href={"#"}>Organizations <span class="indicator">+</span></Link>
  <ul className="submenu">
        <li><Link href={"#"}>Directorate General of Training(DGT)</Link></li>
        <li><Link href={"#"}>Directorate of Jan Skhikshan Sansthan(DJSS)</Link></li>
        <li><Link href={"#"}>National Council for Vocational Education and Training(NSDC)</Link></li>
  </ul>
  </li>
  <li><Link href={"#"}>Schemes & Initiatives <span class="indicator">+</span></Link></li>
  <li><Link href={"#"}>Report/Documents <span class="indicator">+</span></Link></li>

  </ul>
</div>
</section>
  
</>
}
