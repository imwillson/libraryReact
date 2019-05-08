import React, { Component } from 'react'

// Child component of library
// dfeault values
export const Book = ({title="No title provided",author= "no author",pages=0, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages}</p>
            {/* free bookmark is not part of booklist, it's a state */}
            <p>Free Bookmark Today: {freeBookmark ? 'yes' : 'no'}</p>
        </section>
    )
}