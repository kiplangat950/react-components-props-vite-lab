import react from "react";

function Article({ title, date = "January 1, 1970", preview }) {
    return(
        <article>
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{preview}</p>
        </article>  

    );
}
export default Article;