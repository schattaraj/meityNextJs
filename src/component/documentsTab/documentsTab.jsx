import React, { useState } from "react";
import style from "./documentsTab.style.module.css";
import {
  advertisement,
  circular,
  pressRelease,
  tender,
  whatsNew,
} from "./data";
import TabData from "./tabData";
import Image from "next/image";

const DocumentsTab = () => {
  const [key, setKey] = useState(0);
  const [dataToShow, setDataToShow] = useState(whatsNew);

  return (
    <div className={style.container}>
      <div
        className="container common-container four_content body-container top-body-container padding-top-bott2"
        role="complementary"
      >
        <div className={`row ${style.row}`}>
          <div className="col-lg-8">
            <div className={style.wrapper}>
              <div className={style.tabs_container}>
                <button
                  className={`${style.tabs} ${key == 0 && style.active_tab}`}
                  onClick={() => {
                    setKey(0);
                    setDataToShow(whatsNew);
                  }}
                >
                  What's New
                </button>
                <button
                  className={`${style.tabs} ${key == 1 && style.active_tab}`}
                  onClick={() => {
                    setKey(1);
                    setDataToShow(circular);
                  }}
                >
                  Circular
                </button>
                <button
                  className={`${style.tabs} ${key == 2 && style.active_tab}`}
                  onClick={() => {
                    setKey(2);
                    setDataToShow(pressRelease);
                  }}
                >
                  Press Release
                </button>
                <button
                  className={`${style.tabs} ${key == 3 && style.active_tab}`}
                  onClick={() => {
                    setKey(3);
                    setDataToShow(advertisement);
                  }}
                >
                  Advertisement
                </button>
                <button
                  className={`${style.tabs} ${key == 4 && style.active_tab}`}
                  onClick={() => {
                    setKey(4);
                    setDataToShow(tender);
                  }}
                >
                  Tender
                </button>
              </div>
              <div>
                <TabData data={dataToShow} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className={`row ${style.image_wrapper}`}>
              <Image src="/images/dgt-logo-1.jpg" alt="" width="170" height="188" className={`{col-3 col-lg-6 mb-4 ${style.image}`}/>
              <Image src="/images/ncvet-logo-2.jpg" alt="" width="170" height="188" className={`{col-3 col-lg-6 mb-4 ${style.image}`}/>
              <Image src="/images/NSDC_LOGO.jpg" alt="" width="170" height="188" className={`{col-3 col-lg-6 ${style.image}`}/>
              <Image src="/images/3-logo.jpg" alt="" width="170" height="188" className={`{col-3 col-lg-6 ${style.image}`}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsTab;
