import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const endpoint = process.env.NEXT_PUBLIC_BASE_URL;

const ABOUT_QUERY = gql`
{
  pages{
    edges{
      node{
        homePage{
         	homeAboutTitle
          homeAboutDetails
          ministers {
            ministerName
            misinterDesignation
            url
            ministerPhoto {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
}
`;

const Spotlight = () => {


  const { data: about } = useQuery("about", async () => {
    const res = await request(endpoint, ABOUT_QUERY);
    return res;
  });

  return (
    <div className="bg-wrapper top-bg-wrapper gray-bg padding-top-bott gap" id="skipContent">
      <div className="container common-container four_content body-container top-body-container padding-top-bott2" role="complementary">
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex flex-column justify-content-center h-100">
              <h2 className="mb-4" style={{ fontSize: '21px' }}>
                {about && <><span style={{ color: '#E22D15' }}>{about?.pages?.edges[0]?.node?.homePage?.homeAboutTitle}</span></>}
              </h2>
              <p className="mb-4" style={{ fontSize: '17px' }}>
                {about && about?.pages?.edges[0]?.node?.homePage?.homeAboutDetails}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="minister-box clearfix">
              <div className="minister-sub1">
                <div className="region region-sidebar-first">
                  <div className="views-element-container block block-views block-views-blockminister-block-1" id="block-msde-views-block-minister-block-1">
                    <div>
                      <div className="view view-minister view-id-minister view-display-id-block_1 js-view-dom-id-8c1df3f2a8a9f2e1706e2212df6c01532ea09cc3a7936326a1fd33febc901e9d">
                        <div className="view-content">
                          <div className="cmf-right-miister"
                            style={{
                              display: ' flex',
                              justifyContent: 'center'
                            }}>
                            <ul className="p-0">
                            {about && about?.pages?.edges[0]?.node?.homePage?.ministers?.map((item,index)=>{
                              return  <li key={"minister"+index} className="minister-list" style={{
                                display: ' flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column'

                              }}>
                                <a href={item?.url} hrefLang="en">
                                  <img
                                    src={item?.ministerPhoto?.mediaItemUrl}
                                    width='105px'
                                    height='105px'
                                    alt="Hon'ble Minister"
                                    className="img-fluid rounded"
                                    style={{
                                      border: '1px solid rgba(o,o,o, 0.3)',
                                      width: '105px',
                                      height: '105px',
                                    }}
                                  />
                                </a>
                                <div className="views-field views-field-title">
                                  <span className="field-content minister-title" style={{ fontSize: '17px' }}>
                                    {item?.ministerName}
                                  </span>
                                </div>
                                <div className="views-field views-field-field-name">
                                  <h3 className="field-content minister-desination">
                                    <a href={item?.url} hrefLang="en" style={{ fontSize: '14px', color: '#E22D15' }}>
                                    {item?.misinterDesignation}
                                    </a>
                                  </h3>
                                </div>
                              </li>
                            })
                            
                            }
                             
                            </ul>
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
      </div>
    </div>

  );
}
export default Spotlight;