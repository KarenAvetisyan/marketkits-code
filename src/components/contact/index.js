import "./Contact.css";
import contact_img from "../../svg/contact-img.svg"

const Contact = () => {
    return ( 
        <section className="sc-contact">
            <div className="container contact-container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-box">
                            <div className="form-title">
                                <h2>Связаться с нами</h2>
                                <p className="primary__text">Бесплатное вводное обучение<br/>
                                    Свяжитесь с нами прямо сейчас и мы подарим бесплатный вводный видеокурс по онлайн-продажам!
                                </p>
                            </div>
                            <form>
                                <div className="form-content">
                                    <div className="row">
                                        <div className="col-lg-6 custom__my"><input type="text" placeholder="Имя" required /></div>
                                        <div className="col-lg-6 custom__my"><input type="tel" placeholder="Телефон" required /></div>
                                        <div className="col-12 custom__my"><input type="email" placeholder="Email" required /></div>
                                    </div>
                                    <button className="btn primary__btn submit">Связаться</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                    <div className="contact-img">
                        <img src={contact_img} alt="" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;