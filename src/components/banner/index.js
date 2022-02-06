import banner_img from "../../svg/banner-img.svg";
import "./Banner.css";

const Banner = () => {
    return ( 
        <section className="sc-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 order-lg-2">
                        <div className="img-box">
                            <img src={banner_img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 pr-lg-0 order-lg-1">
                        <div className="head-info">
                            <h1>Добро пожаловать на MarketKits</h1>
                            <p className="primary__text">Добро пожаловать на MarketKits! Мы - команда, которая поможет Вам разобраться с веб-аналитикой и интернет-рекламой.</p>
                            <a href="#" className="primary__btn">Начать</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Banner;