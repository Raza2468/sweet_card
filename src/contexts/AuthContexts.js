import React, { Component } from "react";

const DataContext = React.createContext()


// class DataProvider extends Component(){
class DataProvider extends Component {
    state = {
        products: [
            {
                "_id": "1",
                "title": "Chamchm",
                "src": "https://cdn.pixabay.com/photo/2014/12/22/12/33/sweets-577230__340.jpg",
                "description": "welcom you Sweet",
                "price": 750,
                "count": 1
            },
            {
                "_id": "2",
                "title": "Mix",
                "src": "https://image.shutterstock.com/image-photo/mix-mithai-260nw-308679107.jpg",
                "description": "welcom you Sweet",
                "price": 750,
                "count": 2
            },
            {
                "_id": "3",
                "title": "Lucha",
                "src": "https://i.pinimg.com/originals/0f/08/21/0f082122f9dd0bc4a61ca90ca9438998.jpg",
                "description": "welcom you Sweet",
                "price": 750,
                "count": 3
            },
            {
                "_id": "4",
                "title": "Cake",
                "src": "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/317/317257/cupcakes.jpg?w=1155&h=1541",
                "description": "welcom you Sweet",
                "price": 750,
                "count": 4
            },
        ]
    }

    render() {
        const { products } = this.state;
        return (

            <DataContext.Provider value={{ products }}>
                {this.props.children}
            </DataContext.Provider>

        )
    }
}

export {
    DataProvider,
    DataContext

}