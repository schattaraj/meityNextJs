import React, { useState } from "react";
import style from "./documentsTab.style.module.css";
import Image from "next/image";

const TabData = ({ data }) => {
  return (
    <div className={style.data_wrapper}>
      {data?.map((ele, idx) => {
        console.log("eeeeeeeee", ele);
        return (
          <p key={idx} className={style.text}>
            <Image
              src="/images/arrow-right-2.png"
              alt=""
              width="50"
              height="50"
            />
            <span>{ele?.text}</span>
            &nbsp;
            {ele?.file && (
              <>
                <Image src="/images/pdf.png" alt="" width="8" height="8" />
                <a target="_blank" href={ele?.file} className="ml-2">
                  Download
                </a>
              </>
            )}
          </p>
        );
      })}
      <div className={style.readMore}>
        Read More
      </div>
    </div>
  );
};

export default TabData;
