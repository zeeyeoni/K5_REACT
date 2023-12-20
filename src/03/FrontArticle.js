import style from './Front.module.css';


/* rfce + tab  1. probs의 대표값을 사용할 것인가
function FrontArticle(probs) {
    return (
        <article id="divHtml">
            <h2>{probs.title}</h2>
            <div>
                <div className="divimg">
                    <img src={probs.href} alt={probs.title} />
                </div>
                <p>{probs.content}</p>
            </div>
        </article>
    )
}
*/

// 2. Object의 속성값으로 넣을 것인가
function FrontArticle({title, href, content}) {
    return (
        <article className={style.divArticle} id="divHtml">
            <h2>{title}</h2>
            <div>
                <div className={style.divImg}>
                    <img src={href} alt={title} />
                </div>
                <p>{content}</p>
            </div>
        </article>
        
    )
}

export default FrontArticle;