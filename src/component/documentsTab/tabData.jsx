import React, { useState } from "react";
import style from "./documentsTab.style.module.css";
import { MdArrowRightAlt } from "react-icons/md";
import Image from "next/image";

const TabData = ({ data }) => {
  return (
    <div className={style.data_wrapper}>
      {data && data?.map((ele, idx) => {
        return (
          <div key={idx} className={style.text}>
            <Image
              src="/images/arrow-right-2.png"
              alt=""
              width="50"
              height="50"
            />
            <span>{ele?.title}</span>
            <br/>
            &nbsp;
            {ele?.pdfFile && (
              <>
                <Image src="/images/pdf.png" alt="" width="8" height="8" />
                <a target="_blank" href={ele?.pdfFile?.mediaItemUrl} className="ml-2">
                  Download
                </a>
              </>
            )}
            {idx < data.length-1 && <div className={style.divider}/>}
          </div>
        );
      })}
      {/* <div className={style.readMore}>
        Read More <MdArrowRightAlt />
      </div> */}
    </div>
  );
};

export default TabData;
