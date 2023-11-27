import Image from "next/image";
import React, { useEffect, useState } from "react";
import style from "../styles/socialFeed.style.module.css";
import Footer from "@/component/footer";
import Header from "@/component/header";
import YoutubeWidget from "@/component/youtube";

const SocialFeed = () => {
  const [width, setWidth] = useState("300");
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.charset = "utf-8";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const getWidthBasedOnWindowWidth = () => {
    const windowWidth = window.innerWidth;

    const widthRanges = [
      { min: 1650, value: "400" },
      { min: 1610, max: 1650, offset: 150 },
      { min: 1550, max: 1610, offset: 140 },
      { min: 1480, max: 1550, offset: 120 },
      { min: 992, max: 1480, offset: 105 },
      { min: 560, max: 992, value: "500" },
      { min: 530, max: 560, value: "470" },
      { min: 500, max: 530, value: "450" },
      { min: 460, max: 500, value: "400" },
      { min: 430, max: 460, value: "370" },
      { min: 400, max: 430, value: "350" },
      { min: 380, max: 400, value: "320" },
      { min: 340, max: 380, value: "300" },
      { max: 340, value: "275" },
    ];

    const matchedRange = widthRanges.find((range) => {
      return (
        (range.min === undefined || windowWidth > range.min) &&
        (range.max === undefined || windowWidth < range.max)
      );
    });

    if (matchedRange) {
      if (matchedRange.offset !== undefined) {
        const calculatedWidth =
          (windowWidth / 3).toFixed(0) - matchedRange.offset;
        setWidth(calculatedWidth.toString());
      } else {
        setWidth(matchedRange.value);
      }
    }
  };

  useEffect(() => {
    getWidthBasedOnWindowWidth();

    const handleResize = () => {
      getWidthBasedOnWindowWidth();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-wrapper top-bg-wrapper gray-bg padding-top-bott">
      <Header />
      <div
        className="container common-container four_content body-container top-body-container padding-top-bott2"
        role="complementary"
      >
        <h3 className={style.heading}>Social Feeds</h3>
        <div className={`row ${style.row}`}>
          <div className="col-lg-4">
            <div className={`${style.content} ${style.facebook}`}>
              <h3>Facebook</h3>
              <div className={style.facebook_feed}>
                <iframe
                  src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSkillIndiaOfficial&tabs=timeline&width=${width}&height=730&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId`}
                  height="700"
                  width={width}
                  style={{ border: "none", overflow: "scroll" }}
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className={`${style.content_twitter_outer} ${style.twitter}`}>
              <h3>Twitter</h3>
              <div className={`${style.content_twitter_inner}`}>
                <a
                  class="twitter-timeline"
                  href="https://twitter.com/MSDESkillIndia?ref_src=twsrc%5Etfw"
                  style={{overflow:"hidden"}}
                ></a>{" "}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className={`${style.content} ${style.linkedin}`}>
              <h3>Linkedin</h3>
              <div className={style.inner_content}>
                <div className={style.header}>
                  {/* <img src="assets/images/avatartwitter.jpg" alt="" /> */}
                  <Image
                    src="/images/avatartwitter.jpg"
                    alt=""
                    width="20"
                    height="20"
                  />
                  <div className={style.info}>
                    <h5>
                      Minko Gechev <span>Following</span>
                    </h5>
                    <p>Developer Relations Lead at Google</p>
                    <span className={style.time}>
                      1d{" "}
                      <svg
                        width={25}
                        height={25}
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 0.390625C5.81201 0.390625 0.390625 5.81201 0.390625 12.5C0.390625 19.188 5.81201 24.6094 12.5 24.6094C19.188 24.6094 24.6094 19.188 24.6094 12.5C24.6094 5.81201 19.188 0.390625 12.5 0.390625ZM11.9463 12.1206C11.8052 12.356 11.5508 12.5 11.2764 12.5H11.2612C11.0542 12.5 10.8555 12.5825 10.709 12.729L10.4326 13.0054C10.2803 13.1577 10.2803 13.4053 10.4326 13.5576L10.709 13.834C10.8555 13.9805 10.938 14.1792 10.938 14.3862V14.8438C10.938 15.2754 10.5884 15.625 10.1567 15.625H9.8584C9.5625 15.625 9.29199 15.458 9.15967 15.1929L8.05518 12.9844C7.93604 12.7461 7.61816 12.6943 7.42969 12.8828L6.479 13.833C6.33252 13.9795 6.13379 14.062 5.92676 14.062H2.87158C2.78906 13.5522 2.73438 13.0332 2.73438 12.5C2.73438 7.11523 7.11523 2.73438 12.5 2.73438C13.5503 2.73438 14.5605 2.90576 15.5093 3.21387L13.0601 5.09521C12.8105 5.26172 12.834 5.63525 13.1021 5.76953L13.6309 6.03369C13.8955 6.16602 14.0625 6.43652 14.0625 6.73242V10.5469C14.0625 10.7627 13.8877 10.9375 13.6719 10.9375H13.5225C13.3745 10.9375 13.2393 10.854 13.1733 10.7217C13.0972 10.5693 12.8823 10.561 12.7944 10.707L11.9463 12.1206V12.1206ZM20.3125 17.5015C20.3125 17.7085 20.23 17.9072 20.0835 18.0537L19.6162 18.521C19.4697 18.6675 19.271 18.75 19.064 18.75H18.3237C18.1167 18.75 17.918 18.6675 17.7715 18.521L17.1362 17.8857C16.9766 17.7261 16.7784 17.6106 16.5609 17.5504C16.3434 17.4901 16.114 17.4872 15.895 17.542L14.8564 17.8018C14.7944 17.8174 14.731 17.8252 14.667 17.8252H14.1621C13.9551 17.8252 13.7563 17.7427 13.6099 17.5962L13.0283 17.0146C12.9551 16.9413 12.914 16.8419 12.9141 16.7383V16.2402C12.9141 16.0806 13.0112 15.937 13.1597 15.8774L15.0806 15.1089C15.1772 15.0703 15.269 15.02 15.3535 14.96L16.5112 14.1353C16.5774 14.0881 16.6566 14.0629 16.7378 14.063H17.3281C17.4858 14.063 17.6284 14.1577 17.689 14.3037L17.9502 14.9312C17.965 14.9667 17.9901 14.9971 18.0221 15.0185C18.0542 15.0398 18.0918 15.0513 18.1304 15.0513H18.3159C18.4028 15.0513 18.4795 14.9937 18.5034 14.9106L18.7085 14.2041C18.7329 14.1206 18.8091 14.0635 18.896 14.0635H19.1919C19.2998 14.0635 19.3872 14.1509 19.3872 14.2588V14.8901C19.3872 14.9937 19.4282 15.0933 19.5015 15.1665L20.083 15.748C20.2295 15.8945 20.312 16.0933 20.312 16.3003V17.5015H20.3125Z"
                          fill="#636363"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <p>✨ Detecting memory leaks in 50 seconds:</p>
                <p>Open Chrome Dev Tools</p>
                <p>
                  Navigate to &quot;Memory...
                  <a href="#">see more</a>
                </p>
                <video
                  className="vjs-tech"
                  id="vjs_video_3_html5_api"
                  tabIndex={-1}
                  role="application"
                  preload="metadata"
                  muted="muted"
                  src="https://dms.licdn.com/playlist/C5605AQEXShZvXsuHLw/mp4-720p-30fp-crf28/0/1651127414396?e=1652166000&v=beta&t=AqObNPIQPKiAQc19QlNQ7K3FvevLQFwDp6qCq74Yu1M"
                  autoPlay="autoplay"
                />
                <div className={style.react}>
                  {/* <img src="assets/images/like.svg" alt="" /> */}
                  <Image src="/images/like.svg" alt="" width="20" height="20" />
                  {/* <img src="assets/images/light.svg" alt="" /> */}
                  <Image
                    src="/images/light.svg"
                    alt=""
                    width="20"
                    height="20"
                  />
                  {/* <img src="assets/images/claps.svg" alt="" /> */}
                  <Image
                    src="/images/claps.svg"
                    alt=""
                    width="20"
                    height="20"
                  />
                  <span>2,501</span>
                </div>
                <div className={style.actions}>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-thumbs-up"
                    >
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                    <span>Like</span>
                  </a>
                  <a href="#">
                    <svg
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_224_199)">
                        <path
                          d="M3.34785 18.709L3.41573 18.4353L3.2166 18.2356C1.55766 16.572 0.579346 14.4776 0.579346 12.2068C0.579346 6.9646 5.84915 2.55054 12.5793 2.55054C19.3095 2.55054 24.5793 6.9646 24.5793 12.2068C24.5793 17.449 19.3095 21.863 12.5793 21.863C10.7661 21.863 9.05322 21.5278 7.51124 20.9478L7.2456 20.8479L7.02363 21.0247C5.89599 21.9232 3.67099 23.346 0.717977 23.4223C0.930592 23.1775 1.30789 22.7203 1.71713 22.1242C2.32195 21.2433 3.022 20.0228 3.34785 18.709ZM0.548039 23.6119C0.549053 23.6109 0.550146 23.6097 0.551316 23.6085C0.550271 23.6096 0.549195 23.6108 0.548088 23.612L0.548039 23.6119Z"
                          fill="white"
                          stroke="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_224_199">
                          <rect
                            width={25}
                            height={25}
                            fill="white"
                            transform="translate(0.0793457 0.488037)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Comment</span>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-corner-up-right"
                    >
                      <polyline points="15 14 20 9 15 4" />
                      <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
                    </svg>
                    <span>Share</span>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-send"
                    >
                      <line x1={22} y1={2} x2={11} y2={13} />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    <span>send</span>
                  </a>
                </div>
              </div>
              <div className={style.inner_content}>
                <div className={style.header}>
                  {/* <img src="assets/images/avatartwitter.jpg" alt="" /> */}
                  <Image
                    src="/images/avatartwitter.jpg"
                    alt=""
                    width="20"
                    height="20"
                  />
                  <div className={style.info}>
                    <h5>
                      Minko Gechev <span>Following</span>
                    </h5>
                    <p>Developer Relations Lead at Google</p>
                    <span className={style.time}>
                      1d{" "}
                      <svg
                        width={25}
                        height={25}
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 0.390625C5.81201 0.390625 0.390625 5.81201 0.390625 12.5C0.390625 19.188 5.81201 24.6094 12.5 24.6094C19.188 24.6094 24.6094 19.188 24.6094 12.5C24.6094 5.81201 19.188 0.390625 12.5 0.390625ZM11.9463 12.1206C11.8052 12.356 11.5508 12.5 11.2764 12.5H11.2612C11.0542 12.5 10.8555 12.5825 10.709 12.729L10.4326 13.0054C10.2803 13.1577 10.2803 13.4053 10.4326 13.5576L10.709 13.834C10.8555 13.9805 10.938 14.1792 10.938 14.3862V14.8438C10.938 15.2754 10.5884 15.625 10.1567 15.625H9.8584C9.5625 15.625 9.29199 15.458 9.15967 15.1929L8.05518 12.9844C7.93604 12.7461 7.61816 12.6943 7.42969 12.8828L6.479 13.833C6.33252 13.9795 6.13379 14.062 5.92676 14.062H2.87158C2.78906 13.5522 2.73438 13.0332 2.73438 12.5C2.73438 7.11523 7.11523 2.73438 12.5 2.73438C13.5503 2.73438 14.5605 2.90576 15.5093 3.21387L13.0601 5.09521C12.8105 5.26172 12.834 5.63525 13.1021 5.76953L13.6309 6.03369C13.8955 6.16602 14.0625 6.43652 14.0625 6.73242V10.5469C14.0625 10.7627 13.8877 10.9375 13.6719 10.9375H13.5225C13.3745 10.9375 13.2393 10.854 13.1733 10.7217C13.0972 10.5693 12.8823 10.561 12.7944 10.707L11.9463 12.1206V12.1206ZM20.3125 17.5015C20.3125 17.7085 20.23 17.9072 20.0835 18.0537L19.6162 18.521C19.4697 18.6675 19.271 18.75 19.064 18.75H18.3237C18.1167 18.75 17.918 18.6675 17.7715 18.521L17.1362 17.8857C16.9766 17.7261 16.7784 17.6106 16.5609 17.5504C16.3434 17.4901 16.114 17.4872 15.895 17.542L14.8564 17.8018C14.7944 17.8174 14.731 17.8252 14.667 17.8252H14.1621C13.9551 17.8252 13.7563 17.7427 13.6099 17.5962L13.0283 17.0146C12.9551 16.9413 12.914 16.8419 12.9141 16.7383V16.2402C12.9141 16.0806 13.0112 15.937 13.1597 15.8774L15.0806 15.1089C15.1772 15.0703 15.269 15.02 15.3535 14.96L16.5112 14.1353C16.5774 14.0881 16.6566 14.0629 16.7378 14.063H17.3281C17.4858 14.063 17.6284 14.1577 17.689 14.3037L17.9502 14.9312C17.965 14.9667 17.9901 14.9971 18.0221 15.0185C18.0542 15.0398 18.0918 15.0513 18.1304 15.0513H18.3159C18.4028 15.0513 18.4795 14.9937 18.5034 14.9106L18.7085 14.2041C18.7329 14.1206 18.8091 14.0635 18.896 14.0635H19.1919C19.2998 14.0635 19.3872 14.1509 19.3872 14.2588V14.8901C19.3872 14.9937 19.4282 15.0933 19.5015 15.1665L20.083 15.748C20.2295 15.8945 20.312 16.0933 20.312 16.3003V17.5015H20.3125Z"
                          fill="#636363"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <p>✨ Detecting memory leaks in 50 seconds:</p>
                <p>Open Chrome Dev Tools</p>
                <p>
                  Navigate to &quot;Memory...
                  <a href="#">see more</a>
                </p>
                <video
                  className="vjs-tech"
                  id="vjs_video_3_html5_api"
                  tabIndex={-1}
                  role="application"
                  preload="metadata"
                  muted="muted"
                  src="https://dms.licdn.com/playlist/C5605AQEXShZvXsuHLw/mp4-720p-30fp-crf28/0/1651127414396?e=1652166000&v=beta&t=AqObNPIQPKiAQc19QlNQ7K3FvevLQFwDp6qCq74Yu1M"
                  autoPlay="autoplay"
                />
                <div className={style.react}>
                  {/* <img src="assets/images/like.svg" alt="" /> */}
                  <Image src="/images/like.svg" alt="" width="20" height="20" />
                  {/* <img src="assets/images/light.svg" alt="" /> */}
                  <Image
                    src="/images/light.svg"
                    alt=""
                    width="20"
                    height="20"
                  />
                  {/* <img src="assets/images/claps.svg" alt="" /> */}
                  <Image
                    src="/images/claps.svg"
                    alt=""
                    width="20"
                    height="20"
                  />
                  <span>2,501</span>
                </div>
                <div className={style.actions}>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-thumbs-up"
                    >
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                    <span>Like</span>
                  </a>
                  <a href="#">
                    <svg
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_224_199)">
                        <path
                          d="M3.34785 18.709L3.41573 18.4353L3.2166 18.2356C1.55766 16.572 0.579346 14.4776 0.579346 12.2068C0.579346 6.9646 5.84915 2.55054 12.5793 2.55054C19.3095 2.55054 24.5793 6.9646 24.5793 12.2068C24.5793 17.449 19.3095 21.863 12.5793 21.863C10.7661 21.863 9.05322 21.5278 7.51124 20.9478L7.2456 20.8479L7.02363 21.0247C5.89599 21.9232 3.67099 23.346 0.717977 23.4223C0.930592 23.1775 1.30789 22.7203 1.71713 22.1242C2.32195 21.2433 3.022 20.0228 3.34785 18.709ZM0.548039 23.6119C0.549053 23.6109 0.550146 23.6097 0.551316 23.6085C0.550271 23.6096 0.549195 23.6108 0.548088 23.612L0.548039 23.6119Z"
                          fill="white"
                          stroke="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_224_199">
                          <rect
                            width={25}
                            height={25}
                            fill="white"
                            transform="translate(0.0793457 0.488037)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Comment</span>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-corner-up-right"
                    >
                      <polyline points="15 14 20 9 15 4" />
                      <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
                    </svg>
                    <span>Share</span>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-send"
                    >
                      <line x1={22} y1={2} x2={11} y2={13} />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    <span>send</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <YoutubeWidget/>
      <Footer />
    </div>
  );
};

export default SocialFeed;
