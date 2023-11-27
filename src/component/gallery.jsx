import React from 'react';
import { VGallery_QUery, PGallery_QUery } from './query';
import { request } from "graphql-request";
import { useQuery } from 'react-query';

const endpoint = process.env.NEXT_PUBLIC_BASE_URL;

const Gallery = () => {

  const { data: vGallery } = useQuery("vgallery", async () => {
    const res = await request(endpoint, VGallery_QUery);
    return res;
  });

  const { data: pGallery } = useQuery("pgallery", async () => {
    const res = await request(endpoint, PGallery_QUery);
    return res;
  });


  return (
    <div className="container common-container four_content gallery-container gap" role="complementary">
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
                className="bttn-more bttn-view" href="/en/media/video-gallery" title="View All About video">
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
                  className="bttn-more bttn-view" href="/en/media/video-gallery" title="View All About video">
                  <span>View All</span>
                </a>
              </h3>
            </div>

            {vGallery && <img
              src={vGallery?.pages?.edges[0].node.homePage.videothumbnail.mediaItemUrl}
              alt="कौशल दीक्षांत समारोह 12 अक्टूबर 2023"
              style={{ width: 'auto', height: '390px' }}
              className="img-fluid"
            />
            }


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
                className="bttn-more bttn-view" href="/en/media/video-gallery" title="View All About video">
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
                  className="bttn-more bttn-view" href="/en/media/video-gallery" title="View All About video">
                  <span>View All</span>
                </a>
              </h3>
            </div>
            <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={pGallery ? pGallery.pages.edges[0].node.homePage.photos[0].image.mediaItemUrl : ""}
                    className="d-block w-100"
                    alt="Felicitation of winners of WorldSkills Competition 2022: 17th October 2023"
                    style={{ width: 'auto', height: '390px' }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={pGallery ? pGallery.pages.edges[0].node.homePage.photos[1].image.mediaItemUrl : ""}
                    className="d-block w-100"
                    alt="Felicitation of winners of WorldSkills Competition 2022: 17th October 2023"
                    style={{ width: 'auto', height: '390px' }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={pGallery ? pGallery.pages.edges[0].node.homePage.photos[2].image.mediaItemUrl : ""}
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
                  src={pGallery ? pGallery.pages.edges[0].node.homePage.photos[0].image.mediaItemUrl : ""}
                  alt="Felicitation of winners of WorldSkills Competition 2022: 17th October 2023"
                  className="img-fluid h-100"
                  draggable="false"

                />
              </div>
              <div className="h-100 w-100 p-2">
                <img
                  src={pGallery ? pGallery.pages.edges[0].node.homePage.photos[1].image.mediaItemUrl : ""}
                  alt="Felicitation of winners of WorldSkills Competition 2022: 17th October 2023"
                  className="img-fluid h-100"
                  draggable="false"
                />
              </div>
              <div className="h-100 w-100 p-2">
                <img
                  src={pGallery ? pGallery.pages.edges[0].node.homePage.photos[2].image.mediaItemUrl : ""}
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
