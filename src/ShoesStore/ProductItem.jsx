import React, { Component } from 'react';

export default class ProductItem extends Component {
  render() {
    let {image, name, description } = this.props.product;
    // console.log("product item", this.props);
    return (
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <button onClick={() => {
            this.props.renderDetail(this.props.product);
          }} data-toggle="modal" data-target="#exampleModal" type='button' className='btn btn-success'>Xem chi tiết</button>
        </div>
      </div>
    )
  }
}