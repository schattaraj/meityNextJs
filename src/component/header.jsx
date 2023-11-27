import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import Link from "next/link"
import { useState } from "react";
import parse from 'html-react-parser';
import { FLOAT_ELEMENT_QUERY, TOP_HEADER_QUERY } from "./query";
const endpoint = process.env.NEXT_PUBLIC_BASE_URL;
const Logo_Query = gql`{
  pages{
    edges{
      node{
        homePage{
          logo{
            mediaItemUrl
          }
          logoText
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
  const {data:floatElements} = useQuery("floatElements",async()=>{
    const res = await request(endpoint, FLOAT_ELEMENT_QUERY)
    return res;
  })
  const {data:topHeader} = useQuery("topHeader",async()=>{
    const res = await request(endpoint, TOP_HEADER_QUERY)
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
          <div id="block-block-4 mb-0" className="block block-block no-title">
            <div className="block-inner clearfix">  
  
  <div className="block-content content">       
<div className="tophead_left">
<span className="flex">
  {
    topHeader && topHeader?.pages?.edges[0]?.node?.homePage?.topHeaderLeftMenu.map((item,index)=>{
      return <a key={"left"+index} target="_blank" href={item?.pageLink} title={item?.pageTitle} rel="noopener noreferrer">{item?.pageTitle}</a>
    })
  }
</span>
</div>
<div className="tophead_right">
{
    topHeader && topHeader?.pages?.edges[0]?.node?.homePage?.topHeaderRightMenu?.map((item,index)=>{
      return <a key={"right"+index} href={item?.menuLink?.url} className="loginlinks skip-link">{item?.menuTitle}</a>
    })
  }
{/* <a href="#main-content" className="loginlinks skip-link">Scip to main content</a>
<a href="#main-content" className="loginlinks skip-link">Screen Reader Access</a>
<a href="https://www.india.gov.in/user/login" className="loginlinks">Search</a>
<a href="https://www.india.gov.in/user/login" className="loginlinks">Sitemap</a>
<a href="https://www.india.gov.in/user/login" className="loginlinks">Language</a> */}
</div></div>
  </div></div></div></div>		</div>
	</section>
  <section className="header_middle">
		<div className="wrapper">
      <div className="flex py-2">
<h1 style={{display: "none"}}><img src="https://www.india.gov.in/sites/upload_files/npi/files/newsletter/logo_share.png" alt="NPI Logo"/></h1>
        			  <div id="logo">
				 <a href="https://www.india.gov.in/" aria-label="Go to home" title="Go to home">
          <img alt="Logo" src={logo?.pages?.edges[0]?.node?.homePage?.logo?.mediaItemUrl} typeof="foaf:Image" className="site-logo"/>
          {logo && parse(logo?.pages?.edges[0]?.node?.homePage?.logoText)}
          </a>
			  </div>
        {
          floatElements && <div className="float-element">
            {
        floatElements?.pages?.edges[0]?.node?.homePage?.floatElement?.map((item,index)=>{
          return <a key={"floatElement"+index} href={item?.floatElementUrl?.url} target="_blank" className="g20" rel="noopener noreferrer"><img className="national_emblem" src={item?.floatImage?.mediaItemUrl} alt="G20" style={{height: "73px"}}/></a>
        })
            }
            </div>
            }
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
  <Link href={"#"}>Dashboard <span className="indicator">+</span></Link>
  <ul className="submenu">
        <li><Link href={"#"}>NAPS</Link></li>
        <li><Link href={"#"}>PMKVY</Link></li>
      </ul>
  </li>
  <li><Link href={"#"}>About MSDE <span className="indicator">+</span></Link>
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
  <li><Link href={"#"}>Organizations <span className="indicator">+</span></Link>
  <ul className="submenu">
        <li><Link href={"#"}>Directorate General of Training(DGT)</Link></li>
        <li><Link href={"#"}>Directorate of Jan Skhikshan Sansthan(DJSS)</Link></li>
        <li><Link href={"#"}>National Council for Vocational Education and Training(NSDC)</Link></li>
  </ul>
  </li>
  <li><Link href={"#"}>Schemes & Initiatives <span className="indicator">+</span></Link></li>
  <li><Link href={"#"}>Report/Documents <span className="indicator">+</span></Link></li>

  </ul>
  {/* <button className="more"><span>More</span><span className="icon"><img src="/images/chevron-down.svg" alt="" /></span></button> */}
</div>
</section>
  
</>
}
