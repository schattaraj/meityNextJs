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
            }
          }
        }
      }
}`;