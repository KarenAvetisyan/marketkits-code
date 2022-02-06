import Title from "../my-comps/Titles";
import "./Articles.css";
import { ArticleData } from "./data.js";

const Articles = () => {
    return ( 
        <section className="sc-articles">
            <div className="container">
                <div className="row">
                    <Title title="Статьи" />
                    {
                    ArticleData.map((article, index) => (
                        <div key={index} className="col-lg-4 col-md-6 custom__my">
                            <div className="article-box">
                                <div className="article-img">
                                    <img src={article.articleImage} alt="" />
                                </div>
                                <div className="article-info">
                                    <h4 className="small__subtitle">{article.articleTitle}</h4>
                                    <p className="primary__text">{article.articleDescr}</p>
                                    <span className="read-more primary__text">{article.articleLinkTitle}</span>
                                </div>
                                <a href={article.articleLink} className="art-link"></a>
                            </div>
                        </div>
                    ))
                   }
                   <div className="col-12 text-center all-articles">
                       <a href="#" className="primary__btn">Все статьи</a>
                   </div>
                </div>
            </div>
        </section>
     );
}
 
export default Articles;