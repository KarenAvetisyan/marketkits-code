import Articles from "../components/articles";
import Banner from "../components/banner";
import Services from "../components/services";
import Contact from "../components/contact";

const Home = () => {
    return ( 
        <>
            <Banner />
            <Services />
            <Articles />
            <Contact />
        </>
     );
}
 
export default Home;