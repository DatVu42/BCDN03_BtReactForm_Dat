import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    renderShoes = () => {
        return this.props.shoesArray.map((product) => { 
            return <div className="col-4" key={product.id}>
                <ProductItem renderDetail={this.props.renderDetail} product={product} />
              </div>
         })
      }

  render() {
    // console.log("productList props", this.props)
    return (
        <div className="row">{this.renderShoes()}</div>
    );
  }
}
