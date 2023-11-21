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

export default function Header(){
  const {data:logo} = useQuery("logo",async()=>{
    const res = await request(endpoint, Logo_Query)
    return res;
  })
return <>
<div id="header-wrapper">
    <div id="header-container">

		<div className="logo"> <a href="/" title="Home | Ministry of Electronics and Information Technology, Government of India"> <img src={logo?.pages?.edges[0]?.node?.homePage.logo.mediaItemUrl} alt="Emblam"/> </a> </div>
       
        <div id="search-home">
              <div className="region region-search-box">
    
<div id="block-block-30" className="block block-block first odd">

      
  <a href="https://digitalindia.gov.in/" title="Digital India" target="_blank" rel="noopener noreferrer"> <img alt="DI Logo" src="https://www.meity.gov.in/writereaddata/files/dp-logo.png" />
</a>
<a href="https://www.g20.org/en/" title="G20 Logo" target="_blank" rel="noopener noreferrer"> <img alt="G20 Logo" src="https://www.meity.gov.in/writereaddata/files/banner/g20-logo.png" />
</a>



</div>

<div id="block-search-form" className="block block-search last even" role="search">

      
  <form autoComplete="off" action="/" method="post" id="search-block-form" acceptCharset="UTF-8"><div><div className="container-inline d-none">
      <h2 className="element-invisible">Search form</h2>
    <div className="form-item form-type-textfield form-item-search-block-form">
  <label className="element-invisible" htmlFor="edit-search-block-form--2">Search </label>
 <input title="Enter the terms you wish to search for." type="text" id="edit-search-block-form--2" name="search_block_form" value="Enter Your keywords" size="40" maxLength="128" className="form-text"/>
</div>
<div className="form-actions form-wrapper" id="edit-actions"><input type="submit" id="edit-submit" name="op" value="Search" className="form-submit"/></div><input type="hidden" name="form_build_id" value="form-FhuH0_VQgxxkEwodXrFwT4lSWi-F0ZySUNkX-FZuQxU"/>
<input type="hidden" name="form_id" value="search_block_form"/>
</div>
</div></form>
</div>
  </div>
        </div>
    </div>
</div>
<div id="header_menu">
    
      <div className="region region-navigation">
    
<div id="block-nice-menus-1" className="block block-nice-menus first last odd responsive-menus-mean-menu-processed">

      
  <ul className="nice-menu nice-menu-down nice-menu-main-menu nice-menus-processed sf-js-enabled sf-arrows" id="nice-menu-1"><li className="menu__item menu-4043 menu-path-node-275 active-trail first odd"><a href="/home" title="Home Page" className="menu__link active">Home</a></li>
<li className="menu__item menu-3563 menuparent  menu-path-node-277  even"><a href="/about-meity" title="About MeitY" className="menu__link sf-with-ul">About MeitY</a><ul style={{display: "none"}}><li className="menu__item menu-3564 menu-path-node-278 first odd "><a href="/about-meity/vision-mission" title="Vision &amp; Mission" className="menu__link">Vision &amp; Mission</a></li>
<li className="menu__item menu-3593 menu-path-node-281  even "><a href="/about-meity/organization-chart" title="Organization Chart" className="menu__link">Organization Chart</a></li>
<li className="menu__item menu-3566 menu-path-node-280  odd "><a href="/about-meity/functions-of-meity" title="Functions of Ministry of Electronics and Information Technology" className="menu__link">Functions of MeitY</a></li>
<li className="menu__item menu-3594  menu-path-node-282  even "><a href="/about-meity/who-is-who" title="Who's who" className="menu__link">Who's who</a></li>
<li className="menu__item menu-3656  menu-path-node-338  odd "><a href="/official-language-activities" title="Official Language Activities" className="menu__link">Official Language Activities</a></li>
<li className="menu__item menu-3595 menu-path-node-283  even "><a href="/clients-citizens-charter" title="Citizens' Charter" className="menu__link">Citizens' Charter</a></li>
<li className="menu__item menu-3598  menu-path-node-286  odd "><a href="/vigilance-grievances" title="Vigilance &amp; Grievances" className="menu__link">Vigilance &amp; Grievances</a></li>
<li className="menu__item menu-7440  menu-path-node-2342  even "><a href="/acts-and-rules" title="" className="menu__link">Acts &amp; Rules</a></li>
<li className="menu__item menu-6395  menu-path-node-2064  odd "><a href="/policies-guidelines" title="Policies &amp; Guidelines" className="menu__link">Policies &amp; Guidelines</a></li>
<li className="menu__item menu-6624  menu-path-node-2250  even "><a href="/schemes-services" title="Schemes &amp; Services" className="menu__link">Schemes &amp; Services</a></li>
<li className="menu__item menu-3599  menu-path-node-287  odd "><a href="/integrated-finances" title="Integrated Finances" className="menu__link">Integrated Finances</a></li>
<li className="menu__item menu-3601  menu-path-node-289  even "><a href="/performance-management" title="Performance Management" className="menu__link">Performance Management</a></li>
<li className="menu__item menu-3600 menu-path-node-288  odd "><a href="/controller-accounts" title="Chief Controller of Accounts" className="menu__link">Chief Controller of Accounts</a></li>
<li className="menu__item menu-4600 menu-path-node-899  even last"><a href="/web-information-manager" className="menu__link">Web Information Manager</a></li>
</ul></li>
<li className="menu__item menu-4682 menuparent  menu-path-node-979  odd"><a href="/divisions" title="Divisions" className="menu__link sf-with-ul">Divisions</a><ul style={{display: "none"}}><li className="menu__item menu-3616  menu-path-node-304 first odd "><a href="/esdm" title="Electronics System Design &amp; Manufacturing" className="menu__link">Electronics System Design &amp; Manufacturing</a></li>
<li className="menu__item menu-3614  menu-path-node-302  even "><a href="/electronics-it-industry-0" title="Software Industry Promotion" className="menu__link">Software Industry Promotion</a></li>
<li className="menu__item menu-3604  menu-path-node-292  odd "><a href="/e-governance" title="e-Governance" className="menu__link">e-Governance</a></li>
<li className="menu__item menu-3639  menu-path-node-323  even "><a href="/cyber-security" title="Cyber Laws Division" className="menu__link">Cyber Laws Division</a></li>
<li className="menu__item menu-8017  menu-path-node-3060  odd "><a href="/cyber-security-division" title="Cyber Security Division" className="menu__link">Cyber Security Division</a></li>
<li className="menu__item menu-3637  menu-path-node-321  even "><a href="/infrastructure-governance" title="Infrastructure &amp; Governance" className="menu__link">Infrastructure &amp; Governance</a></li>
<li className="menu__item menu-3597  menu-path-node-285  odd "><a href="/economic-planning" title="Economic Planning" className="menu__link">Economic Planning</a></li>
<li className="menu__item menu-3638  menu-path-node-322  even "><a href="/hrdknowledge-management" title="HRD/Knowledge Management" className="menu__link">HRD/Knowledge Management</a></li>
<li className="menu__item menu-3622  menu-path-node-310  odd "><a href="/research-development" title="Research &amp; Development" className="menu__link">Research &amp; Development</a></li>
<li className="menu__item menu-3603  menu-path-node-291  even "><a href="/international-co-operation" title="International Co-operation" className="menu__link">International Co-operation</a></li>
<li className="menu__item menu-4693 menu-path-node-2517  odd "><a href="/parliament-questions" title="Parliament Matters" className="menu__link">Parliament Matters</a></li>
<li className="menu__item menu-3621  menu-path-node-309  even "><a href="/trade-and-investment" title="Trade and Investment" className="menu__link">Trade and Investment</a></li>
<li className="menu__item menu-6222  menu-path-node-1846  odd "><a href="/human-centred-computing" title="Human Centred Computing" className="menu__link">Human Centred Computing</a></li>
<li className="menu__item menu-7999 menu-path-node-2850  even "><a href="/emerging-technologies-division" title="AI &amp; Emerging Technologies Division" className="menu__link">AI &amp; Emerging Technologies Division</a></li>
<li className="menu__item menu-7496  menu-path-node-2468  odd "><a href="/digital-payment-division" title="" className="menu__link">Digital Economy Division</a></li>
<li className="menu__item menu-8334 menu-path-node-1206  even last"><a href="/content/innovation-ipr" title="Innovation &amp; IPR and Centre of Excellence (CoE) Projects" className="menu__link">Innovation &amp; IPR and Centre of Excellence (CoE) Projects</a></li>
</ul></li>
<li className="menu__item menu-5298 menuparent  menu-path-node-279  even"><a href="/content/meity-organisations" title="MeitY Organisations" className="menu__link sf-with-ul">Organisations</a><ul style={{display: "none"}}><li className="menu__item menu-4304 menu-path-snicin- first odd "><a href="https://www.nic.in/" title="National Informatics Centre" className="menu__link" target="_blank" rel="noopener noreferrer">NIC</a></li>
<li className="menu__item menu-4310 menu-path-sstqcgovin  even "><a href="https://www.stqc.gov.in" title="Standardisation Testing and Quality Certification" className="menu__link" target="_blank" rel="noopener noreferrer">STQC</a></li>
<li className="menu__item menu-6216 menu-path-suidaigovin-  odd "><a href="https://uidai.gov.in/" title="Unique Identification Authority of India" className="menu__link" target="_blank" rel="noopener noreferrer">UIDAI</a></li>
<li className="menu__item menu-4332 menu-path-sccagovin-  even "><a href="https://cca.gov.in/" title="Controller of Certifying Authorities" className="menu__link" target="_blank" rel="noopener noreferrer">CCA</a></li>
<li className="menu__item menu-4695 menu-path-scert-inorgin-  odd "><a href="https://www.cert-in.org.in/" title="Indian Computer Emergency Response Team" className="menu__link" target="_blank" rel="noopener noreferrer">ICERT</a></li>
<li className="menu__item menu-4699 menu-path-smygovin-  even "><a href="https://www.mygov.in/" title="MyGov" className="menu__link" target="_blank" rel="noopener noreferrer">MyGov</a></li>
<li className="menu__item menu-4697 menu-path-sdicgovin-  odd "><a href="https://dic.gov.in/" title="Digital India Corporation " className="menu__link" target="_blank" rel="noopener noreferrer">DIC</a></li>
<li className="menu__item menu-7474 menu-path-snegdgovin-  even "><a href="https://negd.gov.in/" title="National e-Governance Division " className="menu__link" target="_blank" rel="noopener noreferrer">NeGD</a></li>
<li className="menu__item menu-4702 menu-path-snicsinicin-  odd "><a href="https://nicsi.nic.in/" title="National Informatics Centre Services Inc." className="menu__link" target="_blank" rel="noopener noreferrer">NICSI</a></li>
<li className="menu__item menu-4698 menu-path-sixnixiin-  even "><a href="https://ix.nixi.in/" title="National Internet Exchange of India" className="menu__link" target="_blank" rel="noopener noreferrer">NIXI</a></li>
<li className="menu__item menu-8058 menu-path-sbisag-ngovin-  odd "><a href="https://bisag-n.gov.in/" title="Bhaskaracharya National Institute for Space Applications and Geo-informatics" className="menu__link" target="_blank" rel="noopener noreferrer">BISAG-N</a></li>
<li className="menu__item menu-4700 menu-path-scdacin-  even "><a href="https://cdac.in/" title="Centre for Development of Advanced Computing" className="menu__link" target="_blank" rel="noopener noreferrer">C-DAC</a></li>
<li className="menu__item menu-4701 menu-path-scmetgovin-  odd "><a href="https://cmet.gov.in/" title="Centre for Materials for Electronics Technology" className="menu__link" target="_blank" rel="noopener noreferrer">C-MET</a></li>
<li className="menu__item menu-4703 menu-path-sernetin-  even "><a href="https://ernet.in/" title="Education and Research Network" className="menu__link" target="_blank" rel="noopener noreferrer">ERNET</a></li>
<li className="menu__item menu-4705 menu-path-snielitgovin-  odd "><a href="https://nielit.gov.in/" title="National Institute of Electronics &amp; Information Technology" className="menu__link" target="_blank" rel="noopener noreferrer">NIELIT (Formerly DOEACC Society)</a></li>
<li className="menu__item menu-4706 menu-path-ssameergovin-  even "><a href="https://www.sameer.gov.in/" title="Society for Applied Microwave Electronics Engineering &amp; Research" className="menu__link" target="_blank" rel="noopener noreferrer">SAMEER</a></li>
<li className="menu__item menu-4707 menu-path-sstpiin-  odd "><a href="https://www.stpi.in/" title="Software Technology Parks of India" className="menu__link" target="_blank" rel="noopener noreferrer">STPI</a></li>
<li className="menu__item menu-8060 menu-path-scscgovin-  even "><a href="https://csc.gov.in/" title="CSC e-Governance Services India Ltd." className="menu__link" target="_blank" rel="noopener noreferrer">CSC</a></li>
<li className="menu__item menu-8319 menu-path-ssclgovin-  odd last"><a href="https://www.scl.gov.in/" title="Semi-Conductor Laboratory" className="menu__link" target="_blank" rel="noopener noreferrer">Semi-Conductor Laboratory</a></li>
</ul></li>
<li className="menu__item menu-7443 menu-path-node-327  odd"><a href="/rti" title="Right to Information" className="menu__link">RTI</a></li>
<li className="menu__item menu-6397 menuparent  menu-path-front  even"><a href="/" title="MeitY Notifications" className="menu__link active sf-with-ul">Notifications</a><ul style={{display: "none"}}><li className="menu__item menu-6398 menu-path-tenders first odd "><a href="/tenders" title="Tenders" className="menu__link">Tenders</a></li>
<li className="menu__item menu-6402 menu-path-vacancies  even "><a href="/vacancies" title="Vacancies" className="menu__link">Vacancies</a></li>
<li className="menu__item menu-6400 menu-path-node-2067  odd "><a href="/press-releases" title="Press Releases" className="menu__link">Press Releases</a></li>
<li className="menu__item menu-7471 menu-path-node-2436  even "><a href="/notifications/office-memorandum" title="Office Memorandum" className="menu__link">Office Memorandum (OMs)</a></li>
<li className="menu__item menu-6638  menu-path-node-1448  odd "><a href="/content/documents-and-publications" title="Documents &amp; Publications /Reports" className="menu__link">Documents &amp; Publications /Reports</a></li>
<li className="menu__item menu-7682 menu-path-node-843  even last"><a href="/content/gazettes" title="" className="menu__link">Gazette Notifications </a></li>
</ul></li>
<li className="menu__item menu-5297 menu-path-samritmahotsavnicin-  odd last"><a href="https://amritmahotsav.nic.in/" title="Azadi Ka Amrit Mahotsav" className="menu__link" target="_blank" rel="noopener noreferrer">Azadi Ka Amrit Mahotsav</a></li>
</ul>

</div>
  </div>

</div>
</>
}
