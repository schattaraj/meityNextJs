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
<section className="top_head">
		<div className="wrapper">
			<div className="region region-header">
        <div className="region-inner clearfix">
          <div id="block-block-4" className="block block-block no-title">
            <div className="block-inner clearfix">  
  
  <div className="block-content content">       
<div className="tophead_left">
<span className="social_icons">
<a href="https://www.facebook.com/nationalportalofindia" target="_blank" title="Visit Our Facebook Page (External Website that opens in a new window)"><img src="/images/facebook.png" alt="Facebook Icon"/></a>
<a href="https://twitter.com/indiagovin" target="_blank" title="Visit Our Twitter Page (External Website that opens in a new window)"><img src="/images/twitter.png" alt="Twitter Icon"/></a>

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
      <div className="flex">
<h1 style={{display: "none"}}><img src="https://www.india.gov.in/sites/upload_files/npi/files/newsletter/logo_share.png" alt="NPI Logo"/></h1>
        			  <div id="logo">
				 <a href="https://www.india.gov.in/" aria-label="Go to home" title="Go to home"><img alt="India Gov Logo" src={logo?.pages?.edges[0]?.node?.homePage.logo.mediaItemUrl} typeof="foaf:Image" className="site-logo"/></a>
			  </div>
			              <a className="mobileNav" aria-label="Mobile Menu" title="Mobile Menu" href="javascript:;"><span></span><span></span><span></span></a>
			<div id="menu-bar" className="nav clearfix"><div id="block-panels-mini-main-menu" className="block block-panels-mini no-title menu-wrapper menu-bar-wrapper clearfix">  
  
  <div className="one-column at-panel panel-display clearfix" id="mini-panel-main_menu">
  <div className="region region-one-main">
    <div className="region-inner clearfix">
      <div className="panel-pane pane-custom pane-8 no-title block">
  <div className="block-inner clearfix">
    
            
    
    <div className="block-content">
          <nav>
<ul id="nav">
  <li className="topics            "><a href="/topics" className="topicsLink"><img src="https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav1.png" alt="Topics"/><span>Topics</span></a>
    <ul style={{display: "block;"}}>
      <li className="   "><span className="fa fa-pagelines"></span><a href="/topics/agriculture">Agriculture</a></li>
      <li><span className="fa fa-paint-brush"></span><a href="/topics/art-culture">Art &amp; Culture</a></li>
      <li><span className="fa fa-pencil-square-o"></span><a href="/topics/commerce">Commerce</a></li>
      <li><span className="fa fa-laptop"></span><a href="/topics/communications-it">Communications &amp; IT</a></li>
      <li className=" "><span className="fa fa-space-shuttle"></span><a href="/topics/defence">Defence</a></li>
      <li><span className="fa fa-graduation-cap"></span><a href="/topics/education">Education</a></li>
      <li><span className="fa fa-tree"></span><a href="/topics/environment-forest">Environment &amp; Forest</a></li>
      <li className=" "><span className="fa fa-bar-chart"></span><a href="/topics/finance-taxes">Finance &amp; Taxes</a></li>
      <li><span className="fa fa-cutlery"></span><a href="/topics/food-public-distribution">Food &amp; Public Distribution</a></li>
      <li className=" "><span className="fa fa-globe"></span><a href="/topics/foreign-affairs">Foreign Affairs</a></li>
      <li className=" "><span className="fa fa-university"></span><a href="/topics/governance-administration">Governance &amp; Administration</a></li>
      <li><span className="fa fa-plus"></span><a href="/topics/health-family-welfare">Health &amp; Family Welfare</a></li>
      <li><span className="fa fa-cogs"></span><a href="/topics/home-affairs-enforcement">Home Affairs &amp; Enforcement</a></li>
      <li><span className="fa fa-home"></span><a href="/topics/housing">Housing</a></li>
      <li className=" "><span className="fa fa-building"></span><a href="/topics/industries">Industries</a></li>
      <li className="  "><span className="fa fa-building-o"></span><a href="/topics/infrastructure">Infrastructure</a></li>
      <li className=" "><span className="fa fa-video-camera"></span><a href="/topics/information-broadcasting">Information &amp; Broadcasting</a></li>
      <li><span className="fa fa-male"></span><a href="/topics/labour-employment">Labour &amp; Employment</a></li>
      <li><span className="fa fa-gavel"></span><a href="/topics/law-justice">Law &amp; Justice</a></li>
      <li className=" "><span className="fa fa-plug"></span><a href="/topics/power-energy">Power &amp; Energy</a></li>
      <li><span className="fa fa-bicycle"></span><a href="/topics/rural">Rural</a></li>
      <li><span className="fa fa-wifi"></span><a href="/topics/science-technology">Science &amp; Technology</a></li>
      <li><span className="fa fa-wheelchair"></span><a href="/topics/social-development">Social Development</a></li>
      <li><span className="fa fa-bus"></span><a href="/topics/transport">Transport</a></li>
      <li><span className="fa fa-plane"></span><a href="/topics/travel-tourism">Travel &amp; Tourism</a></li>
      <li><span className="fa fa-futbol-o"></span><a href="/topics/youth-sports">Youth &amp; Sports</a></li>
    </ul>
  </li>
  <li className="how      "><a href="https://services.india.gov.in/" target="_BLANK" title="External Website that opens in a new window" className="howDiID"><img src="https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav2.png" alt="Services"/><span>Services</span></a>
  </li>
  <li className="government"><a href="/my-government" className="myGovt"><img src="https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav3.png" alt="My Government"/><span>My Government</span></a>
    <ul style={{display: "block;"}}>
      <li><span className="fa fa-pencil-square"></span><a href="/my-government/constitution-india">Constitution of India</a></li>
      <li><span className="fa fa-floppy-o"></span><a href="/my-government/government-directory">Government Directory</a></li>
      <li><span className="fa fa-university"></span><a href="/my-government/indian-parliament">Indian Parliament</a></li>
      <li><span className="fa fa-book"></span><a href="/my-government/publications">Publications</a></li>
      <li><span className="fa fa-users"></span><a href="/my-government/whos-who">Who&apos;s Who</a></li>
      <li><span className="fa fa-gavel"></span><a href="https://indiacode.nic.in/" target="_BLANK" title="External Website that opens in a new window">Acts</a></li>
      <li><span className="fa fa-file-excel-o"></span><a href="/my-government/schemes">Schemes</a></li>
      <li><span className="fa fa-file-word-o"></span><a href="/my-government/documents">Documents</a></li>
    </ul>
  </li>
  <li className="people"><a href="/people-groups" className="peopleGroups"><img src="https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav4.png" alt="People Groups"/><span>People Groups</span></a>
    <ul style={{display: "block;"}}>
      <li><span className="fa fa-users"></span><a href="/people-groups/community">Community</a></li>
      <li><span className="fa fa-refresh"></span><a href="/people-groups/life-cycle">Life Cycle</a></li>
    </ul>
  </li>
  <li className="egov"><a href="/india-glance" className="indGlance"><img src="https://www.india.gov.in/sites/all/themes/adaptivetheme/npi_adaptive/images/nav5.png" alt="India at a Glance"/><span>India at a Glance</span></a> 
  <ul style={{display: "block;"}}>
      <li className="  "><span className="fa fa-flag"></span><a href="/india-glance/profile" role="link">Profile</a></li>
      <li className=" "><span className="fa fa-globe"></span><a href="/india-glance/states-india" role="link">States of India</a></li>
      <li className=" "><span className="fa fa-trophy"></span><a target="_blank" href="https://knowindia.gov.in/my-india-my-pride/" role="link">My India My Pride</a></li>
      <li className=" "><span className="fa fa-inr"></span><a href="/india-glance/national-symbols" role="link">National Symbols</a></li>
      <li className=" "><span className="fa fa-music"></span><a href="/india-glance/culture-heritage" role="link">Culture &amp; Heritage</a></li>
	  <li className=" "><span className="fa fa-list"></span><a href="/india-glance/districts-india" role="link">Districts of India</a></li>
      <li className=" "><span className="fa fa-female"></span><a href="/india-glance/people-and-lifestyle" role="link">People and Lifestyle</a></li>
      <li className=" "><span className="fa fa-binoculars"></span><a href="/india-glance/places-visit" role="link">Places to Visit</a></li>
      <li className=" "><span className="fa fa-map-marker"></span><a href="/india-glance/natural-wonders" role="link">Natural Wonders</a></li>
      <li className="   "><span className="fa fa-building-o"></span><a href="/india-glance/where-stay" role="link">Where to stay</a></li>
      <li className="   "><span className="fa fa-car"></span><a href="/topics/travel-tourism/modes-travel" role="link">Modes of Travel</a></li>
      <li className=" "><span className="fa fa-user"></span><a href="/india-glance/travel-agents" role="link">Travel Agents</a></li>
    </ul>   
  </li>  
</ul>
</nav>

    </div>

    
    
  </div>
</div>
    </div>
  </div>
</div>

  </div>
  </div>	
  </div>
  	</div>
	</section>

  <section class="header_botton">
		<div class="wrapper">
      <div className="flex">
			<div class="search_section">
				<div class="searchform">
					<div class="searchrow"> 
                    	<div class="search_form">
							<div class="region region-goi-search"><div class="region-inner clearfix"><div id="block-block-16" class="block block-block no-title"><div class="block-inner clearfix">  
  
  <div class="block-content content">
    <form action="https://www.india.gov.in/gsearch" id="searchForm" autocomplete="off">
   <label for="search_key">Search</label>
      <input type="text" value="" maxlength="128" name="s" id="search_key" size="15" placeholder="Search - Keyword, Phrase" class="form-text searchText ui-autocomplete-input" autocomplete="off"/>                
{/* <input type="submit" name="op" value="Search" id="edit-submit1" class="form-submit"/> */}
<button className="form-submit">Search</button>
<div id="auto_suggesion"></div>
    </form>
</div>
  </div></div></div></div>                        </div>
						 <a href="javascript:void(0)" id="advsearchbtn">Advanced Search</a>
						<div id="light" class="white_box" style={{width: "380px", display: "none"}}>	
							<div class="search-form">
								                                <form action="/advance-search/results" method="get" id="views-exposed-form-advance-metadata-search-page-1" accept-charset="UTF-8" autocomplete="off"><div><div class="views-exposed-form">
  <div class="views-exposed-widgets clearfix">
          <div id="edit-title-wrapper" class="views-exposed-widget views-widget-filter-title">
                  <label for="edit-title">
            Title        </label>
                        <div class="views-widget">
          <div class="form-item form-type-textfield form-item-title">

 <input placeholder="Search Keyword" type="text" id="edit-title" name="title" value="" size="30" maxlength="128" class="form-text"/>
</div>
        </div>
              </div>
          <div id="edit-term-node-tid-depth-wrapper" class="views-exposed-widget views-widget-filter-term_node_tid_depth">
                  <label for="edit-term-node-tid-depth">
             Section         </label>
                        <div class="views-widget">
          <div class="form-item form-type-select form-item-term-node-tid-depth">
 <select id="edit-term-node-tid-depth" name="term_node_tid_depth" class="form-select"><option value="All" selected="selected">- Any -</option><option value="166659"> Topics</option><option value="166665">- Agriculture</option><option value="166691">-- Agricultural Licence</option><option value="166692">-- Agricultural Machinery</option><option value="166693">-- Agricultural Produces</option><option value="166694">-- Research &amp; Extension</option><option value="166695">-- Storage</option><option value="166696">-- Marketing &amp; Prices</option><option value="166697">-- Animal Husbandry</option><option value="166698">-- Certification &amp; Gradation</option><option value="166699">-- Crops</option><option value="166700">-- Dairy</option><option value="166701">-- Fertilizers &amp; Pesticides</option><option value="166702">-- Fisheries</option><option value="166703">-- Floriculture</option><option value="166704">-- Horticulture</option><option value="166705">-- Irrigation</option><option value="166706">-- Loans &amp; Credit</option><option value="166707">-- Organic Farming</option><option value="166708">-- Plant Protection</option><option value="166709">-- Seeds</option><option value="166710">-- Sericulture</option><option value="166711">-- Soil and Water Conservation</option><option value="166712">-- Weather</option><option value="166666">- Art &amp; Culture</option><option value="166713">-- Archaeology</option><option value="166714">-- Dance</option><option value="166715">-- Fairs &amp; Festivals</option><option value="166716">-- Handicrafts</option><option value="166717">-- Heritage</option><option value="166718">-- Literature</option><option value="166719">-- Monuments</option><option value="166720">-- Music</option><option value="166721">-- Painting</option><option value="166722">-- Theatre</option><option value="166667">- Commerce</option><option value="166723">-- Export</option><option value="166724">-- Import</option><option value="166725">-- SEZs</option><option value="166726">-- Trade Promotion</option><option value="166668">- Communications &amp; IT</option><option value="166727">-- Electronics &amp; IT</option><option value="166728">-- Post</option><option value="166729">-- Telecom</option><option value="166669">- Defence</option><option value="166730">-- Air Force</option><option value="166731">-- Army</option><option value="166732">-- Navy</option><option value="166733">-- Paramilitary Forces</option><option value="166670">- Education</option><option value="166734">-- Elementary Education</option><option value="166735">-- Secondary &amp; Higher Secondary Education</option><option value="166736">-- Higher Education</option><option value="166737">-- Adult Education</option><option value="166671">- Environment &amp; Forest</option><option value="166738">-- Environment</option><option value="166739">-- Forest</option><option value="166740">-- Natural Resources</option><option value="166741">-- Wildlife</option><option value="166672">- Finance &amp; Taxes</option><option value="166742">-- Insurance</option><option value="166743">-- Pension</option><option value="166744">-- Banking</option><option value="166745">-- Economy</option><option value="166746">-- Trade</option><option value="166747">-- Taxes</option><option value="166673">- Food &amp; Public Distribution</option><option value="166748">-- Commodities</option><option value="166749">-- Consumer Affairs</option><option value="166750">-- Consumer Cooperatives</option><option value="166751">-- Public Distribution</option><option value="166674">- Foreign Affairs</option><option value="166752">-- Embassy &amp; Consulates</option><option value="166753">-- India &amp; World</option><option value="166754">-- India and Its Neighbours</option><option value="166755">-- NRIs</option><option value="166756">-- Passport &amp; Visa</option><option value="166675">- Governance &amp; Administration</option><option value="166757">-- Constitution</option><option value="166758">-- Parliament</option><option value="166759">-- State Legislature</option><option value="166760">-- Union/State Government</option><option value="166761">-- District Administration</option><option value="166762">-- Local Administration</option><option value="166763">-- RTI &amp; Grievances</option><option value="166676">- Health &amp; Family Welfare</option><option value="166764">-- Family Welfare</option><option value="166765">-- Health</option><option value="166677">- Housing</option><option value="166769">-- EWS Housing</option><option value="166770">-- Rural Housing</option><option value="166771">-- Urban Housing</option><option value="166678">- Home Affairs &amp; Enforcement</option><option value="166766">-- Enforcement Organizations</option><option value="166767">-- Internal Security</option><option value="166679">- Industries</option><option value="166772">-- Micro, Small &amp; Medium Enterprises</option><option value="166773">-- Mining</option><option value="166774">-- Chemicals and Petrochemicals</option><option value="166775">-- Corporate Governance</option><option value="166776">-- Cottage</option><option value="166777">-- Defence Products</option><option value="166778">-- Fertilizers</option><option value="166779">-- Food Processing</option><option value="166780">-- Heavy Industries</option><option value="166781">-- Manufacturing</option><option value="166782">-- Oil and Natural Gas</option><option value="166783">-- Pharmaceuticals</option><option value="166784">-- Retail</option><option value="166785">-- Textiles</option><option value="166786">-- Tourism</option><option value="166680">- Infrastructure</option><option value="166790">-- Power</option><option value="166791">-- Bridges</option><option value="166792">-- Dams</option><option value="166793">-- Roads</option><option value="166794">-- Urban</option><option value="166681">- Information &amp; Broadcasting</option><option value="166787">-- Broadcasting</option><option value="166788">-- Film</option><option value="166789">-- Print Media</option><option value="166682">- Labour &amp; Employment</option><option value="166803">-- Employment</option><option value="166804">-- Organized Sector Workers</option><option value="166805">-- Unorganized Sector Workers</option><option value="166683">- Law &amp; Justice</option><option value="166795">-- Judiciary</option><option value="166796">-- Alternative Dispute Redressal (ADR)</option><option value="166797">-- Enactment of Laws</option><option value="166798">-- Institutions</option><option value="166799">-- Law Commission of India</option><option value="166800">-- Legal Aid</option><option value="166801">-- Legal Profession</option><option value="166802">-- Personal Law</option><option value="166684">- Power &amp; Energy</option><option value="166806">-- Coal</option><option value="166807">-- Conservation of Energy</option><option value="166808">-- Petroleum &amp; Natural Gas</option><option value="166809">-- Power</option><option value="166810">-- Renewable Energy</option><option value="166685">- Rural</option><option value="166811">-- Rural Employment</option><option value="166812">-- Development</option><option value="166813">-- Panchayati Raj</option><option value="166686">- Science &amp; Technology</option><option value="166814">-- Scientific Education</option><option value="166815">-- Research &amp; Development</option><option value="166687">- Social Development</option><option value="166816">-- Other Backward Classes</option><option value="166817">-- Scheduled Castes</option><option value="166818">-- Children</option><option value="166819">-- Disabled</option><option value="166820">-- Minority Community</option><option value="166821">-- Senior Citizen</option><option value="166822">-- Tribal</option><option value="166823">-- Women</option><option value="166688">- Transport</option><option value="166828">-- Aviation</option><option value="166829">-- Metro</option><option value="166830">-- Railways</option><option value="166831">-- Surface Transport</option><option value="166832">-- Water Ways</option><option value="166689">- Travel &amp; Tourism</option><option value="166824">-- Places</option><option value="166826">-- Modes of Travel</option><option value="166827">-- Approved Agents</option><option value="166690">- Youth &amp; Sports</option><option value="166833">-- Sports Infrastructure</option><option value="166834">-- Games</option><option value="166835">-- Youth Affairs</option><option value="166661"> My Government</option><option value="166848">- Constitution of India</option><option value="166858">-- Constitution of India (Full Text)</option><option value="166849">- Government Directory</option><option value="303137">-- Districts</option><option value="166890">-- Union Government</option><option value="166891">-- States &amp; UTs</option><option value="166893">-- Judiciary</option><option value="166850">- Indian Parliament</option><option value="166861">-- President of India</option><option value="166862">-- Rajya Sabha</option><option value="166863">-- Lok Sabha</option><option value="166851">- Publications</option><option value="166889">-- Books</option><option value="166852">- Who&apos;s Who</option><option value="166864">-- President</option><option value="166865">-- Vice-President</option><option value="166866">-- Prime Minister</option><option value="166867">-- Council of Ministers</option><option value="166868">-- Governors</option><option value="166869">-- Lt. Governors &amp; Administrators</option><option value="166870">-- Chief Ministers</option><option value="166871">-- Judges of Supreme Court</option><option value="166872">-- Chiefs of Armed Forces</option><option value="166873">-- Members of Parliament</option><option value="166874">-- MLAs/MLCs</option><option value="166853">- Acts</option><option value="166854">- Schemes</option><option value="166855">- Documents</option><option value="166875">-- Annual Report</option><option value="166876">-- Budget</option><option value="303144">-- Demand for Grant</option><option value="166877">-- Census Report</option><option value="166878">-- Citizens Charter</option><option value="166879">-- E-Books</option><option value="166880">-- Gazetteer Notification</option><option value="166881">-- Guidelines</option><option value="166882">-- Others</option><option value="166883">-- Plan Document</option><option value="166884">-- Policy</option><option value="166885">-- Reports</option><option value="166662"> People Groups</option><option value="166894">- Community</option><option value="166899">-- Businesspersons</option><option value="166900">-- Indians Travelling Abroad</option><option value="166901">-- Minority Community</option><option value="166902">-- Rural Indian</option><option value="166903">-- Scheduled Tribes/Schedule Caste</option><option value="166904">-- Self-Employed</option><option value="166905">-- Social Workers</option><option value="166906">-- Sportsperson</option><option value="166907">-- Student</option><option value="166908">-- Tourists</option><option value="166909">-- Women</option><option value="166910">-- Defence &amp; Paramilitary Personnel</option><option value="166911">-- Differently Abled</option><option value="166912">-- Entrepreneur</option><option value="166913">-- Environmentalists</option><option value="166914">-- Government Employee</option><option value="166915">-- Importers and Exporters</option><option value="166916">-- Job Seekers</option><option value="166917">-- Non-Resident Indians</option><option value="166895">- Life Cycle</option><option value="166896">-- Kids</option><option value="166897">-- Senior Citizens</option><option value="166898">-- Youth</option><option value="166664"> India at a Glance</option><option value="166927">- Profile</option><option value="166929">- States of India</option><option value="166930">- My India My Pride</option><option value="166931">- National Symbols</option><option value="166932">- Culture &amp; Heritage</option><option value="303138">- Districts of India</option><option value="166933">- People and Lifestyle</option><option value="166934">- Places to Visit</option><option value="166935">- Natural Wonders</option><option value="166936">- Where to stay</option><option value="166937">- Modes of Travel</option><option value="166939">- Travel Agents</option></select>
</div>
        </div>
              </div>
              <div class="views-exposed-widget views-widget-sort-by">
        <div class="form-item form-type-select form-item-sort-by">
  <label for="edit-sort-by">Sort by  </label>
 <select id="edit-sort-by" name="sort_by" class="form-select"><option value="created" selected="selected">Recent</option><option value="changed">Most Updated</option></select>
</div>
      </div>
      <div class="views-exposed-widget views-widget-sort-order">
        <div class="form-item form-type-select form-item-sort-order">
  <label for="edit-sort-order">Order </label>
 <select id="edit-sort-order" name="sort_order" class="form-select"><option value="ASC">Asc</option><option value="DESC" selected="selected">Desc</option></select>
</div>
      </div>
                <div class="views-exposed-widget views-submit-button">
                  {/* <button className="form-submit">Search</button> */}
      <input type="submit" id="edit-submit-advance-metadata-search" value="Search" class="form-submit" name="Advance search Submit Botton"/>   
       </div>
      </div>
</div>
</div></form>
	                          	
							</div>
	
						</div>
                        
					</div> 	
				</div>

			</div>
			<div class="heraderbtm_col2">
				<div class="region region-leaderboard"><div class="region-inner clearfix"><section id="block-views-most-search-block" class="block block-views"><div class="block-inner clearfix">  
      <h2 class="block-title">Most Searched</h2>
  
  <div class="block-content content"><div class="view view-most-search view-id-most_search view-display-id-block view-dom-id-2df1eb12346f51c650c49f99c92cb63c">
        
  
  
      <div class="view-content">
      <div class="item-list">    <ul>          <li class="views-row views-row-1 views-row-odd views-row-first">  
          <a href="/gsearch?s=Birth%20Certificate">Birth Certificate</a>  </li>
          <li class="views-row views-row-2 views-row-even">  
          <a href="/gsearch?s=Driving%20Licence">Driving Licence</a>  </li>
          <li class="views-row views-row-3 views-row-odd views-row-last">  
          <a href="/gsearch?s=Pan%20card">Pan card</a>  </li>
      </ul></div>    </div>
  
  
  
  
  
  
</div>
</div>
  </div>
  </section>
  </div>
  </div>		
  	</div>
    </div>
		</div>
	</section>
</>
}
