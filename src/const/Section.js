import { formatMs } from '@material-ui/core'
import React, { Component } from 'react';
import Products from '../section/Products';
import Detail from '../section/Detail';
import { Route } from "react-router-dom"

class Section extends Component {
    render() {
        return (
            <div>
                <section>
                    <Route path="/product" component={Products} exact />
                    <Route path="/product/:id" component={Detail} />
                    {/* <Route path="/Detail" component={Detail}></Route> */}
                </section>
            </div >
        )
    }
}

export { Section }