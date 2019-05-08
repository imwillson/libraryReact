import React, { Component } from 'react'
import { render } from 'react-dom' //ReactDOM.render()
import Library from './Library'


let bookList = [
    {"title": "The Sun also rises", author: "Willson", pages: 123},
    {"title": "The moon", author: "Wendy", pages: 13},
    {"title": "Star Sun falls", pages: 43}
]


// form example
// class FavoriteColorForm extends React.Component {
//     state = { value: ''}

//     newColor = e => {
//         this.setState({value: e.target.value})
//     }

//     submit = e => {
//         console.log(`New Color: ${this.state.value}`)
//         e.preventDefault()
//     }
//     render() {
//         return (
//             <form onSubmit={this.submit}>
//                 <label> Favorite Color: 
//                     <input 
//                     type="color" 
//                     onChange={this.newColor} />
//                 </label>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }



render(
    <Library books={bookList} />,
    document.getElementById('root')
)