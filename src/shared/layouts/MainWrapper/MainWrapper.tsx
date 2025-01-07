import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import style from './MainWrapper.module.scss';

export default function MainWrapper() {
  return (
      <div className={style.mainWrapper}>
        <Header/>
          <Main/>
        <Footer/>
      </div>
  )
}
