import Image from "next/image";
import React from "react";
import style from "./socialFeed.style.module.css";

const SocialFeed = () => {
  return (
    <div className="bg-wrapper top-bg-wrapper gray-bg padding-top-bott">
      <div
        className="container common-container four_content body-container top-body-container padding-top-bott2"
        role="complementary"
      >
        <h3 className={style.heading}>Social Feeds</h3>
        <div className={`row ${style.row}`}>
          <div className="col-lg-4">
            <div className={`${style.content} ${style.facebook}`}>
              <h3>Facebook</h3>
              <div className={style.inner_content}>
                <div className={style.header}>
                  <Image
                    src="/images/logo.png"
                    alt=""
                    width="20"
                    height="20"
                  />
                  <h4>muyayam</h4>
                </div>
                <div className={style.action}>
                  <a href="#">
                    <svg
                      width={12}
                      height={11}
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7143 0H1.28571C0.944722 0 0.617695 0.124171 0.376577 0.345196C0.135459 0.566221 0 0.865995 0 1.17857L0 9.82143C0 10.134 0.135459 10.4338 0.376577 10.6548C0.617695 10.8758 0.944722 11 1.28571 11H4.96205V7.26025H3.27455V5.5H4.96205V4.15839C4.96205 2.63239 5.95313 1.78946 7.47107 1.78946C8.19804 1.78946 8.95821 1.9083 8.95821 1.9083V3.40607H8.12063C7.29536 3.40607 7.03795 3.87554 7.03795 4.35703V5.5H8.88027L8.58562 7.26025H7.03795V11H10.7143C11.0553 11 11.3823 10.8758 11.6234 10.6548C11.8645 10.4338 12 10.134 12 9.82143V1.17857C12 0.865995 11.8645 0.566221 11.6234 0.345196C11.3823 0.124171 11.0553 0 10.7143 0Z"
                        fill="#3A579D"
                      />
                    </svg>
                    Like Page
                  </a>
                  <a href="#">
                    <svg
                      width={12}
                      height={13}
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8053 4.66108L7.68016 0.929305C7.31909 0.60262 6.75 0.867823 6.75 1.3753V3.34088C2.98526 3.38604 0 4.17649 0 7.91418C0 9.42278 0.92768 10.9173 1.95312 11.6987C2.27311 11.9425 2.72916 11.6365 2.61117 11.2412C1.54842 7.68063 3.11524 6.73536 6.75 6.68058V8.83921C6.75 9.34747 7.31953 9.6115 7.68016 9.2852L11.8053 5.55306C12.0647 5.31828 12.0651 4.89618 11.8053 4.66108Z"
                        fill="#4B4F56"
                      />
                    </svg>
                    Share
                  </a>
                </div>
                <div className={style.image}>
                  <Image
                    src="/images/banner3.webp"
                    alt=""
                    width="20"
                    height="20"
                  />
                </div>
                <div className={style.text}>
                  <div className={style.flex}>
                    <div className={style.left}>
                      <Image
                        src="/images/logo.png"
                        alt=""
                        width="20"
                        height="20"
                      />
                      <h5>
                        muyayam <span>On Today</span>
                      </h5>
                    </div>
                    <div className={style.right}>
                      <svg
                        width={25}
                        height={25}
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.6094 12.5C24.6094 5.81055 19.1895 0.390625 12.5 0.390625C5.81055 0.390625 0.390625 5.81055 0.390625 12.5C0.390625 18.5439 4.81885 23.5537 10.6079 24.4629V16.0005H7.53174V12.5H10.6079V9.83203C10.6079 6.79736 12.4146 5.12109 15.1816 5.12109C16.5068 5.12109 17.8926 5.35742 17.8926 5.35742V8.33594H16.3652C14.8613 8.33594 14.3921 9.26953 14.3921 10.2271V12.5H17.7505L17.2134 16.0005H14.3921V24.4629C20.1812 23.5537 24.6094 18.5439 24.6094 12.5Z"
                          fill="#1877F2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.{" "}
                  </p>
                  <div className={style.footer_action}>
                    <a href="#" className="d-flex">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.25 7H0.75C0.335781 7 0 7.33578 0 7.75V15.25C0 15.6642 0.335781 16 0.75 16H3.25C3.66422 16 4 15.6642 4 15.25V7.75C4 7.33578 3.66422 7 3.25 7ZM2 14.75C1.58578 14.75 1.25 14.4142 1.25 14C1.25 13.5858 1.58578 13.25 2 13.25C2.41422 13.25 2.75 13.5858 2.75 14C2.75 14.4142 2.41422 14.75 2 14.75ZM12 2.54538C12 3.87088 11.1884 4.61438 10.9601 5.5H14.1389C15.1826 5.5 15.9951 6.36706 16 7.31556C16.0026 7.87613 15.7642 8.47959 15.3925 8.85297L15.3891 8.85641C15.6964 9.58569 15.6465 10.6076 15.0982 11.3398C15.3695 12.149 15.096 13.1431 14.5863 13.676C14.7206 14.2259 14.6564 14.6939 14.3941 15.0707C13.7563 15.9871 12.1755 16 10.8387 16L10.7498 16C9.24084 15.9994 8.00588 15.45 7.01356 15.0086C6.51491 14.7867 5.86291 14.5121 5.36822 14.503C5.16384 14.4993 5 14.3325 5 14.1281V7.44775C5 7.34775 5.04006 7.25178 5.11119 7.18147C6.34912 5.95822 6.88144 4.66313 7.89609 3.64675C8.35872 3.18325 8.52697 2.48312 8.68962 1.80606C8.82859 1.22791 9.11928 0 9.75 0C10.5 0 12 0.25 12 2.54538Z"
                          fill="#7F7F7F"
                        />
                      </svg>
                      Like
                    </a>
                    <a href="#">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_45_57)">
                          <path
                            d="M14 0H2C0.896875 0 0 0.896875 0 2V11C0 12.1031 0.896875 13 2 13H5V15.625C5 15.9312 5.35 16.1094 5.59688 15.9281L9.5 13H14C15.1031 13 16 12.1031 16 11V2C16 0.896875 15.1031 0 14 0Z"
                            fill="#7F7F7F"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_45_57">
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Comment
                    </a>
                    <a href="#">
                      <svg
                        width={12}
                        height={13}
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.8053 4.66108L7.68016 0.929305C7.31909 0.60262 6.75 0.867823 6.75 1.3753V3.34088C2.98526 3.38604 0 4.17649 0 7.91418C0 9.42278 0.92768 10.9173 1.95312 11.6987C2.27311 11.9425 2.72916 11.6365 2.61117 11.2412C1.54842 7.68063 3.11524 6.73536 6.75 6.68058V8.83921C6.75 9.34747 7.31953 9.6115 7.68016 9.2852L11.8053 5.55306C12.0647 5.31828 12.0651 4.89618 11.8053 4.66108Z"
                          fill="#7F7F7F"
                        />
                      </svg>
                      Share
                    </a>
                  </div>
                </div>
                <div className={style.footer}>
                  <a href="#">
                    Find us on Facebook
                    <span>
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.94085 6.39773L4.38591 10.9526C4.16623 11.1723 3.81008 11.1723 3.59042 10.9526L3.05916 10.4214C2.83986 10.2021 2.83944 9.84666 3.05823 9.62684L6.66809 5.99998L3.05823 2.37314C2.83944 2.15332 2.83986 1.79789 3.05916 1.57859L3.59042 1.04733C3.8101 0.827648 4.16626 0.827648 4.38591 1.04733L8.94083 5.60224C9.16051 5.8219 9.16051 6.17805 8.94085 6.39773Z"
                          fill="#4B4F56"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className={`${style.content} ${style.twitter}`}>
              <h3>Twitter</h3>
              <div className={style.inner_content}>
                <div className={style.header}>
                  <h4>
                    Tweets{" "}
                    <span>
                      by <a href="#">@SjagGambia</a>
                    </span>
                  </h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="#E1E8ED"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </div>
                <div className={style.text}>
                  <small>
                    Sports Journalists Association of the Gambia SJAG Retweeted
                  </small>
                  <div className={style.flex}>
                    {/* <img src="assets/images/avatartwitter.png" alt="" /> */}
                    <Image
                      src="/images/avatartwitter.png"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <div className={style.name}>
                      <h5>
                        Nick Cavell BCC Africa{" "}
                        <svg
                          width={14}
                          height={16}
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.65625 8.29226C0.65625 9.20893 1.12919 10.0091 1.82941 10.4309C1.81716 10.5347 1.80972 10.6391 1.80972 10.7465C1.80972 12.1027 2.84222 13.2009 4.11666 13.2009C4.39994 13.2009 4.67272 13.1489 4.92319 13.0485C5.29813 13.8667 6.08716 14.4289 7 14.4289C7.91306 14.4289 8.70231 13.8667 9.07594 13.0483C9.32706 13.1483 9.59875 13.2005 9.88313 13.2005C11.1576 13.2005 12.1901 12.1027 12.1901 10.746C12.1901 10.6387 12.182 10.5343 12.1697 10.4305C12.8691 10.0089 13.3438 9.20893 13.3438 8.29204C13.3438 7.32093 12.8144 6.48093 12.0459 6.08182C12.1393 5.81448 12.1898 5.52626 12.1898 5.22293C12.1898 3.86648 11.1573 2.76848 9.88313 2.76848C9.59831 2.76848 9.32684 2.82004 9.07594 2.92137C8.70253 2.10248 7.91328 1.54004 7 1.54004C6.08716 1.54004 5.29856 2.10226 4.92362 2.92137C4.67294 2.82026 4.40016 2.76848 4.11687 2.76848C2.84222 2.76848 1.81016 3.86626 1.81016 5.22293C1.81016 5.52604 1.86047 5.81448 1.95366 6.08159C1.18562 6.48071 0.65625 7.32093 0.65625 8.29204V8.29226Z"
                            fill="#1DA1F2"
                          />
                          <path
                            d="M3.909 8.68456L5.44353 10.2352C5.5715 10.3646 5.73885 10.4292 5.90641 10.4292C6.07485 10.4292 6.24372 10.3639 6.37169 10.233C6.44694 10.1561 9.86732 6.68322 9.86732 6.68322C10.1237 6.42278 10.1237 6.001 9.86732 5.74033C9.61138 5.48033 9.19575 5.47989 8.93938 5.74033L5.90532 8.821L4.83519 7.73922C4.57838 7.47967 4.16275 7.48055 3.90725 7.74144C3.65175 8.00278 3.65285 8.42478 3.90944 8.68456H3.909Z"
                            fill="white"
                          />
                        </svg>
                      </h5>
                      <span>@BCC_NickCavell</span>
                    </div>
                  </div>
                  <p>'i'm not saying you have to kill him'</p>
                  <p>
                    The Gambia Football Federation have demanded action against{" "}
                    <a href="#">#Algeria</a> coach Djamel Belmadi's attack on
                    referee Bakary Gassama.
                  </p>
                  <p>
                    By <a href="#">@modoubah bcc.co.uk/sport/football...</a>
                  </p>
                  <div className={style.card}>
                    {/* <img src="assets/images/twitter.jpg" alt="" /> */}
                    <Image
                      src="/images/twitter.jpg"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <div className={style.info}>
                      <h6>Action wanted after Belma...</h6>
                      <p>Algeria coach Djamel Belma..</p>
                      <span>bcc.co.uk</span>
                    </div>
                  </div>
                  <div className={style.action}>
                    <div className={style.left}>
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
                          className="feather feather-heart"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
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
                          className="feather feather-log-out"
                        >
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                          <polyline points="16 17 21 12 16 7" />
                          <line x1={21} y1={12} x2={9} y2={12} />
                        </svg>
                      </a>
                    </div>
                    <div className={style.right}>17h</div>
                  </div>
                  <div className={style.link}>
                    <a href="#">Embed</a>
                    <a href="#">View on Twitter</a>
                  </div>
                </div>
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
                  Navigate to "Memory...
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
                  <Image
                    src="/images/like.svg"
                    alt=""
                    width="20"
                    height="20"
                  />
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
                  Navigate to "Memory...
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
                  <Image
                    src="/images/like.svg"
                    alt=""
                    width="20"
                    height="20"
                  />
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
    </div>
  );
};

export default SocialFeed;
