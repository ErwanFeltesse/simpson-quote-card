import React from 'react';
import './QuoteCard.css';

function QuoteCardApi({data}) {
    return (

        <figure className="QuoteCard">
            <img src={data.image} alt={data.character} />
            <figcaption>
                <blockquote>{data.quote}</blockquote>
                <p>
                    <cite>{data.character}</cite> 
                </p>        
            </figcaption>
        </figure>
        

    )

}

export default QuoteCardApi;