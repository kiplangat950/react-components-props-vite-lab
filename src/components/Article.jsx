import react from "react";

function Article({ title, date = "Feb 4, 2030", preview }) {
    return(
        <article>
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{preview}</p>
        </article>  

    );
}
export default Article;