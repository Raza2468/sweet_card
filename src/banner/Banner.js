import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import "./Banner.css"
import { DataContext } from '../contexts/AuthContexts'
// import Section from '../const/Section'

import React, { Component } from 'react'

 class Banner extends Component {
    static contextType = DataContext
    render() {
        const { cart } = this.context
        return (
            <div>
                 <br />
            {/* <Card> */}
                <div className="nav-cart">

                    <Link to="/cart">
                        <span>{cart.length}</span>
                        <i class="fa fa-shopping-cart" ></i>
                    </Link>
{/* <Section /> */}
                </div>
                {/* <h1>Banner</h1> */}

            {/* </Card> */}
            </div>
        )
    }
}

export {
    Banner
}

// function Banner() {
//     return (
//         <div>
           
//         </div>
//     )
// }

