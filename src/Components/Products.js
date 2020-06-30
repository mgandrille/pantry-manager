import React, { Component } from 'react';

//Bootstrap
import CardColumns from 'react-bootstrap/CardColumns'

//My COmponents
import Product from './Product'

class Products extends Component {
  render() {
    return (
      <CardColumns>

        {Object.keys(this.props.products).map(key =>
          <Product
            key={key}
            id={key}
            product={{
              name: this.props.productData[key].product.product_name_fr,
              quantity: this.props.products[key].quantity,
              desiredQuantity: this.props.products[key].desiredQuantity,
              photo: this.props.productData[key].product.image_front_url
            }} />
        )}

      </CardColumns>
    );
  }
}

export default Products;