import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import "./Banner.css"
// import Section from '../const/Section'

function Banner() {
    return (
        <div>
            <br />
            {/* <Card> */}
                <div className="nav-cart">

                    <Link to="/cart">
                        <span>0</span>
                        <i class="fa fa-shopping-cart" ></i>
                    </Link>
{/* <Section /> */}
                </div>
                {/* <h1>Banner</h1> */}

            {/* </Card> */}
        </div>
    )
}

export {
    Banner
}
