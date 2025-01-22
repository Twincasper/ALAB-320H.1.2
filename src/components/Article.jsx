/* eslint-disable react/prop-types */

export function Article({title, content, date, image}) {
    return (
        <article>
            <p className="date">{date}</p>
            <h3 className="article-title">{title}</h3>
            <img src={image} alt="article banner image" />
            <p className="article-content">{content}</p>
            <p>Continues ...</p>
        </article>
    )
}