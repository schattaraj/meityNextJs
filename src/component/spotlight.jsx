const Spotlight = () => {
  return (
    <div className="bg-wrapper top-bg-wrapper gray-bg padding-top-bott my-5">
      <div className="container common-container four_content body-container top-body-container padding-top-bott2" role="complementary">
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex flex-column justify-content-center h-100">
              <h2 className="mb-4" style={{ fontSize: '21px' }}>
                <em>Welcome to</em> <span style={{ color: '#E22D15' }}>Ministry of Skill Development and Entrepreneurship</span>
              </h2>
              <p className="mb-4" style={{ fontSize: '17px' }}>
                The Ministry is responsible for co-ordination of all Skill Development efforts across the country,
                removal of disconnect between demand and supply of skilled manpower, building the vocational and
                technical training framework, skill up-gradation, building of new skills and innovative
                thinking not only for existing jobs but also jobs that are to be created.
              </p>
              <p style={{ fontSize: '17px' }}>
                The Ministry aims to skill on a large scale with speed and high standards in order to achieve
                its vision of a 'Skilled India'.
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
                            <ul>
                              <li className="minister-list" style={{
                                display: ' flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column'

                              }}>
                                <a href="/en/ministers/profile-honble-minister" hrefLang="en">
                                  <img
                                    src="https://www.msde.gov.in/sites/default/files/styles/photo_gallery_grid_300x250/public/2021-11/minister.jpg?itok=l-SRxkbZ"
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
                                    Shri Dharmendra Pradhan
                                  </span>
                                </div>
                                <div className="views-field views-field-field-name">
                                  <h3 className="field-content minister-desination">
                                    <a href="/en/ministers/profile-honble-minister" hrefLang="en" style={{ fontSize: '14px', color: '#E22D15' }}>
                                      Hon’ble Minister
                                    </a>
                                  </h3>
                                </div>
                              </li>
                              <li className="minister-list" style={{
                                display: ' flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column'

                              }}>
                                <a href="/en/ministers/profile-honble-minister-of-state" hrefLang="en">
                                  <img
                                    src="https://www.msde.gov.in/sites/default/files/styles/photo_gallery_grid_300x250/public/2021-07/mos_3.jpg?itok=oxZo4-EJ"
                                    width={105}
                                    height={126}
                                    alt=" Shri Rajeev Chandrasekhar"
                                    className="img-fluid rounded"
                                    style={{
                                      border: '1px solid rgba(o, o, o, 0.3)',
                                      width: '105px',
                                      height: '105px',
                                    }}
                                  />
                                </a>
                                <div className="views-field views-field-title">
                                  <span className="field-content minister-title" style={{ fontSize: '17px' }}>
                                    Shri Rajeev Chandrasekhar
                                  </span>
                                </div>
                                <div className="views-field views-field-field-name">
                                  <h3 className="field-content minister-desination">
                                    <a href="/en/ministers/profile-honble-minister-of-state" hrefLang="en"
                                      style={{ fontSize: '14px', color: '#E22D15' }}>
                                      Hon’ble Minister of State
                                    </a>
                                  </h3>
                                </div>
                              </li>
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