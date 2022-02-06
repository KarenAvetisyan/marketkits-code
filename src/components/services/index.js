import Title from "../my-comps/Titles";
import "./Services.css";
import { ServiceData } from "./data.js";

const Services = () => {
    return ( 
        <section className="sc-services">
            <div className="container">
                <div className="row">
                   <Title title="Услуги" />
                   {
                    ServiceData.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6 custom__my">
                            <div className="service-box">
                                <h4 className="small__subtitle">{service.serviceTitle}</h4>
                                <p className="primary__text">{service.serviceDescr}</p>
                                <span className="ser-img"><img src={service.serviceImage} alt="" /></span>
                            </div>
                        </div>
                    ))
                   }
                </div>
            </div>
        </section>
     );
}
 
export default Services;