import React from 'react'
import { Component } from 'react';
import { DataContext } from '../contexts/AuthContexts'

class Detail extends Component {
    static contextType = DataContext
    state = {
        product: []
    }
    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            const data = res.filter(item => {
                return item._id === this.props.match.params.id
            })
            // console.log(data);
            this.setState({ product: data })
        }
    }
    componentDidMount() {
        this.getProduct()
    }

    render() {
        const { product } = this.state
        // console.log(this.context.products);


        return (
            <>
                {product.map(item => (
                    <div className="detail" key={item._id}>
                        <img src={item.src} alt="" />
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                            </div>
                                <span>${item.price}</span>
                                <p>{item.description}</p>
                        </div>
                    </div>
                )
                )}
            </>
        )
    }
}
export default Detail