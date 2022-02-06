import "./Footer.css";
import logo_white from "../../svg/logo-white.svg";
import FooterData from "./data.json";

const Footer = () => {

    // render footer lists 
    const renderedFooterLists = () => {
        return (
            FooterData.footerItems.map((fItem, index) => (
                <div className="f-list" key={index}>
                    <h4 className="small__subtitle text-white">{fItem.itemTitle}</h4>
                    {fItem.itemList ? 
                        <ul>
                            {fItem.itemList.map((item, index) => (
                                <li key={index}><a href="#">{item}</a></li>
                            ))}
                        </ul> : ''
                    }
                </div>
            ))
        )
    }

    return ( 
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xl-2">
                        <div className="logo">
                            <a href="#"><img src={logo_white} alt="" /></a>
                            <p className="primary__text text-white">© 2021, MarketKits.com</p>
                        </div>
                        
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="f-list-container">
                            {renderedFooterLists()}
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-5">
                        <div className="form-box">
                            <p className="primary__text text-white">
                                Свяжитесь с нами <a href="mailto:marketkits@info.com">marketkits@info.com</a>
                            </p>
                            <form>
                                <input type="email" placeholder="Email" required/>
                                <button className="btn primary__btn submit">Связаться</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;