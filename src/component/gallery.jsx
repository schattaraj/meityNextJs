import React from 'react';

const Gallery = () => {
  return (
    <div className="container common-container four_content gallery-container" role="complementary">
      <div className="row">
        {/* Video Gallery */}
        <div className="col-md-5 col-xs-12 col-sm-12">
          <div className="video-wrapper" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', float: 'left', top: 0, }}>
              <h3 style={{
                backgroundColor: '#E22D15',
                textTransform: 'uppercase',
                padding: "10px 15px",
                fontSize: '14px',
                color: 'white',
                display: 'inline-block'
              }}><a style={{ textDecoration: 'none', color: 'white', }}
                class="bttn-more bttn-view" href="/en/media/video-gallery" title="View All About video">
                  <span>Video Gallery</span>
                </a></h3>
              <h3 style={{
                backgroundColor: '#454545',
                textTransform: 'uppercase',
                padding: "10px 15px",
                fontSize: '14px',
                color: 'white',
                display: 'inline-block',
                textDecoration: 'none'
              }}>
                <a style={{ textDecoration: 'none', color: 'white', }}
                  class="bttn-more bttn-view" href="/en/media/video-gallery" title="View All About video">
                  <span>View All</span>
                </a>
              </h3>
            </div>

            <img
              src="https://www.msde.gov.in/sites/default/files/styles/photo_gallery_large_800x650/public/2023-10/video-42.jpg?itok=UdECNmHn"
              alt="कौशल दीक्षांत समारोह 12 अक्टूबर 2023"
              style={{ width: 'auto', height: '390px' }}
              className="img-fluid"
            />
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="col-md-7 col-xs-12 col-sm-12 row" >


          {/* gallery carousel */}
          <div className='col-md-9 col-xs-12' style={{ position: 'relative', }}>
            <div style={{ position: 'absolute', float: 'left', top: 0, zIndex: 9999 }}>
              <h3 style={{
                backgroundColor: '#E22D15',
                textTransform: 'uppercase',
                padding: "10px 15px",
                fontSize: '14px',
                color: 'white',
                display: 'inline-block'
              }}><a style={{ textDecoration: 'none', color: 'white', }}
                class="bttn-more bttn-view" href="/en/media/video-gallery" title="View All About video">
                  <span>Photo Gallery</span>
                </a></h3>
              <h3 style={{
                backgroundColor: '#454545',
                textTransform: 'uppercase',
                padding: "10px 15px",
                fontSize: '14px',
                color: 'white',
                display: 'inline-block',
                textDecoration: 'none'
              }}>
                <a style={{ textDecoration: 'none', color: 'white', }}
                  class="bttn-more bttn-view" href="/en/media/video-gallery" title="View All About video">
                  <span>View All</span>
                </a>
              </h3>
            </div>
            <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://www.msde.gov.in/sites/default/files/styles/home_gallery/public/2023-11/05.jpg?itok=uCWx0a_M"
                    className="d-block w-100"
                    alt="Felicitation of winners of WorldSkills Competition 2022: 17th October 2023"
                    style={{ width: 'auto', height: '390px' }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.msde.gov.in/sites/default/files/styles/home_gallery/public/2023-11/04.jpg?itok=nfMd8dMX"
                    className="d-block w-100"
                    alt="Felicitation of winners of WorldSkills Competition 2022: 17th October 2023"
                    style={{ width: 'auto', height: '390px' }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.msde.gov.in/sites/default/files/styles/home_gallery/public/2023-11/03.jpg?itok=txSjy-IK"
                    className="d-block w-100"
                    alt="Felicitation of winners of WorldSkills Competition 2022: 17th October 2023"
                    style={{ width: 'auto', height: '390px' }}
                  />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* list image */}
          <div className="col-md-3 col-xs-12">
            <div className="d-flex justify-content-between flex-column flex-xs-row h-100 w-100">
              <div className="h-100 w-100 p-2">
                <img
                  src="https://www.msde.gov.in/sites/default/files/styles/home_gallery/public/2023-11/05.jpg?itok=uCWx0a_M"
                  alt="Felicitation of winners of WorldSkills Competition 2022: 17th October 2023"
                  className="img-fluid h-100"
                  draggable="false"

                />
              </div>
              <div className="h-100 w-100 p-2">
                <img
                  src="https://www.msde.gov.in/sites/default/files/styles/home_gallery/public/2023-11/04.jpg?itok=nfMd8dMX"
                  alt="Felicitation of winners of WorldSkills Competition 2022: 17th October 2023"
                  className="img-fluid h-100"
                  draggable="false"
                />
              </div>
              <div className="h-100 w-100 p-2">
                <img
                  src="https://www.msde.gov.in/sites/default/files/styles/home_gallery/public/2023-11/03.jpg?itok=txSjy-IK"
                  alt="Felicitation of winners of WorldSkills Competition 2022: 17th October 2023"
                  className="img-fluid h-100"
                  draggable="false"
                />
              </div>
            </div>

          </div>
        </div>


      </div>
    </div >
  );
};

export default Gallery;
