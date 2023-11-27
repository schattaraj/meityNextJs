import { request, gql } from "graphql-request";
export const SLIDER_QUERY = gql`
  {
    pages {
        edges {
          node {
            homePage {
             sliders {
              sliderImage {
                mediaItemUrl
              }
               pageLink
             }
            }
          }
        }
      }
  }
`;
export const FLOAT_ELEMENT_QUERY = gql`{
pages {
    edges {
      node {
        homePage {
           floatElement {
          floatImage {
            mediaItemUrl
          }
             floatElementUrl {
               url
             }
           }
        }
      }
    }
  }
}`;
export const TOP_HEADER_QUERY = gql`{
    pages {
        edges {
          node {
            homePage {
              topHeaderLeftMenu {
                pageLink
                pageTitle
              }
              topHeaderRightMenu {
                menuLink {
                    target
                    title
                    url
                  }
                  menuTitle
              }
            }
          }
        }
      }
}`;

export const WCPAT_QUERY = gql`{
    pages {
        edges {
          node {
            homePage {
              whatsNew {
                details
                title
                pdfFile {
                  mediaItemUrl
                }
              }
               circular{
                details
                title
                pdfFile{
                  mediaItemUrl
                }
              }
              pressRelease{
                details
                title
                pdfFile{
                  mediaItemUrl
                }
              }
              advertisement{
                details
               title
              pdfFile{
                mediaItemUrl
              }
              }
              tender{
                details
                title
                pdfFile{
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
}`;

export const VGallery_QUery = gql`{
  pages {
    edges {
      node {
        homePage {
        videothumbnail {
          mediaItemUrl
        }
        youtubeLink {
          url
        }
        }
      }
    }
  }
}`

export const PGallery_QUery = gql`{
  pages {
    edges {
      node {
        homePage {
          photos {
            image{
              mediaItemUrl
            }
          }
        }
      }
    }
  }
}`