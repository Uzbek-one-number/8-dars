import "./App.css";
import { IoMenu, IoClose } from "react-icons/io5";

import { useState } from "react";

import imgEl from './img/texnomax.37d01b3d0c33f631b62b.webp';
import { GoPeople } from "react-icons/go";



//iconlar
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";
import { HiCube } from "react-icons/hi2";
import { IoLanguage } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { PiCaretRightBold } from "react-icons/pi";
import { MdLanguage } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
function App() {
  const [sidebar, setSidebar] = useState(false);


  return (
    <div className="sidebar_container">
      <IoMenu className="active_sidebar" onClick={() => setSidebar(true)} />
      {sidebar ? (
        <div className="sidebar">
          <IoClose className="icon_close" onClick={() => setSidebar(false)} />
          <div className="ota">
            <img className="img" src={imgEl} alt="" />

          </div>

          <div className="ota_two">
            <GoPeople className="icon_ho" />
            <h3 className="h2">  Kirish  |  Ro`yxatdan o`tish</h3>
          </div>

          <div className="ul_into">
            <ul className="ul">
              <li className="li"><TfiLayoutGrid2Alt /> <h6>Mahsulot katalogi</h6></li>
              <li className="li"><LuShoppingCart /> <h6>Bizning do`konlarimiz</h6></li>
              <li className="li"><MdOutlineShoppingCart /> <h6>B2B savdosi</h6></li>
              <li className="li"><BiRefresh /> <h6>Muddatli to`lovga sotib olish</h6></li>
              <li className="li"><HiCube /> <h6>Buyurtma holati</h6></li>
              <li className="li"><IoLanguage /> <h6>Ma`lumot</h6> <PiCaretRightBold className="qalesan" />  </li>
              <div className="nnna">
                <div className="ss">
                  <li className="li"> <MdLanguage /> <h6>Til</h6></li>

                  <ul className="ul_two">
                    <li className="li_one">Ru</li>
                    <li className="li_one">Uz</li>
                    <li className="li_one">Eng</li>
                  </ul>
                </div>


              </div>
              
              <div className="aaa">
                <a  href="tel:"><li className="li"> <BsFillTelephoneFill /><h6>+998-(94)851-60-10</h6></li></a>
                </div>
            </ul>

          </div>

        </div>
      ) : null}
    </div>
  );
}

export default App;
