import "./style.css";


import IconHeart from "../../assets/icon/Heart.png";
import IconLogo from "../../assets/icon/Logo.png";
import IconArrowGray from "../../assets/icon/gray-arrow.png";
import IconSearch from "../../assets/icon/search.png";
import Rectangle from "../../assets/icon/Rectangle.png";
import IconMapPin from "../../assets/icon/map-pin.png";
import IconGroup from "../../assets/icon/group.png";
import NavLink from "./NavLink";



const Header = () => {


    return(
        <header className="header">
            <article className="header__article"> 
                <section className="header__locationandloginbutton header__locationandloginbutton--flex">
                    <section className="header__sectioniconmappin header__sectioniconmappin--flex">
                        <img src={IconMapPin}/>
                        <p className="fontpoppins">Store Location: LincoIn- 344, illinois, Chicago, USA</p>
                    </section>

                    <section className="header__changeoptionsandregister header__changeoptionsandregister--flex">
                        <div className="header__languageandprice header__languageandprice--flex">
                            <div>
                                <p className="fontpoppins">Eng</p>
                                <i>
                                    <img src={IconArrowGray}/>
                                </i>
                            </div>

                            <div>
                                <p className="fontpoppins">USD</p>
                                <i>
                                    <img src={IconArrowGray}/>
                                </i>
                            </div>
                        </div>
                        <hr/>
                        <div className="header__singinandsingup header__singinandsingup--flex fontpoppins">
                            <a>Sing In</a>
                            <p>/</p>
                            <a>Sing Up</a>
                        </div>
                    </section>
                </section>

                <hr/>

                <section className="header__logosearchanddetails header__logosearchanddetails--flex">
                    <section className="header__sectionlogo" >
                        <img className="header__logo" src={IconLogo}/>
                    </section>

                    <section className="header__search header__search--flex">
                        <div>
                            <i>
                                <img src={IconSearch}  />
                            </i>

                            <input placeholder="Search" type="search" name="" id="" />
                        </div>

                        <div>
                            <button>
                                Search
                            </button>
                        </div>
                    </section>

                    <section className="header__favoritesandprices header__favoritesandprices--flex">
                        <div>
                            <i>
                                <img src={IconHeart}/>
                            </i>
                        </div>

                        <hr/>

                        <div>
                            <div>
                                <i>
                                    <img src={Rectangle} />
                                </i>
                            </div>

                            <div className="fontpoppins">
                                <p>Shopping Cart:</p>
                                <span>$0.00</span>
                            </div>
                        </div>
                    </section>
                </section>
                
                <section className="header__menu header__menu--flex">
                    <div className="header__divmenu">
                        <nav className="header__nav header__nav--flex">
                            <NavLink text="Home"/>
                            <NavLink text="Shop"/>
                            <NavLink text="Pages"/>
                            <NavLink text="Blog"/>
                            <a>About Us</a>
                            <a>Contact Us</a>
                        </nav>
                    </div>

                    <div className="header__phonenumber header__phonenumber--flex">
                        <i>
                            <img src={IconGroup}/>
                        </i>

                        <p>
                            219 555-0114
                        </p>
                    </div>
                </section>
            </article>
        </header>
    )
};

export default Header;