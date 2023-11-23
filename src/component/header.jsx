import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import Link from "next/link"
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

export default function Header(){
  const {data:logo} = useQuery("logo",async()=>{
    const res = await request(endpoint, Logo_Query)
    return res;
  })
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
<a href="#main-content" className="loginlinks skip-link">Skip to main content</a>
<a href="https://www.india.gov.in/user/login" className="loginlinks">Sign In</a>
<a href="https://www.india.gov.in/user/register" className="loginlinks">Register</a>
			
<span className="sizechanger">
<a id="text_resize_decrease" className="changer" href="javascript:;" onclick="set_font_size('decrease')" title="Decrease font size" role="link">-A</a>
<a id="text_resize_reset" className="changer" onclick="set_font_size('')" href="javascript:;" title="Reset font size" role="link">A</a>
<a id="text_resize_increase" className="changer" onclick="set_font_size('increase')" href="javascript:;" title="Increase font size" role="link">+A</a>
</span>
<span className="colorchanger">
<a href="javascript:void(0);" onclick="chooseStyle('none', 60);" role="link" aria-label="" title="Normal Contrast">A</a>
<a href="javascript:void(0);" className="blackbg" onclick="chooseStyle('change', 60);" role="link" aria-label="" title="High Contrast">A</a>
</span>
<a href="https://www.xn--i1bj3fqcyde.xn--11b7cb3a6a.xn--h2brj9c/" className="alink" id="switch-lang" title="Change Language हिन्दी" aria-label="Change Language हिन्दी" rel="हिन्दी">हिन्दी</a>   
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
			              {/* <a className="mobileNav" aria-label="Mobile Menu" title="Mobile Menu" href="javascript:;"><span></span><span></span><span></span></a> */}
		
  </div>
  	</div>
	</section>
<section className="bottom_header">
<div className="wrapper">
  <ul className="menus">
<li>
  <Link href={"#"}></Link>
</li>
  </ul>
</div>
</section>
  
</>
}
