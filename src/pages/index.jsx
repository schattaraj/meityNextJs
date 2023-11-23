import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/component/header'
import Carousel from 'react-bootstrap/Carousel';
import Footer from '@/component/footer';
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import { useEffect, useState } from 'react';
import Spotlight from '@/component/spotlight';
import SocialFeed from '@/component/socialFeeds';

const endpoint = "http://localhost/wordpress/graphql/";

const BANNER_QUERY = gql`
  {
    pages {
      edges {
        node {
          homePage {
            fieldGroupName
            bannerDetails {
              bannerTitle
              bannerImage {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`;
const History_Query = gql`
{
  pages {
    edges {
      node {
        homePage {
         historyText
          historyImage {
            mediaItemUrl
          }
        }
      }
    }
  }
}`

const Mission_Query = gql`
{
  pages {
    edges {
      node {
        homePage {
         missionText
          missionImage {
            mediaItemUrl
          }
        }
      }
    }
  }
}
`

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [state, setState] = useState(false)
  const { data: banner, isLoading, error } = useQuery("posts", async () => {
    const res = await request(endpoint, BANNER_QUERY);
    return res;
  });

  const { data: history } = useQuery("pages", async () => {
    const res = await request(endpoint, History_Query)
    return res;
  });

  const { data: mission } = useQuery("mission", async () => {
    const res = await request(endpoint, Mission_Query)
    return res;
  })

  console.log("data", banner)
  console.log("historyData", history)

  //   if (isLoading) return "Loading...";
  //   if (error) return <pre>{error.message}</pre>;
  return (
    <>
      <Head>
        <title>MEIT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="banner1">
        <Carousel>
          {
            banner && banner?.pages?.edges[0]?.node?.homePage?.bannerDetails?.map((item, index) => {
              return <Carousel.Item key={index}>
                <img typeof="foaf:Image" src={item.bannerImage.mediaItemUrl} />
              </Carousel.Item>
            })
          }
    </Carousel>
    </div>
      <Spotlight />
      <SocialFeed/>
      <Footer />
    </>
  )
}
