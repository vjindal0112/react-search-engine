import React from 'react';
import { Result } from './Result';


class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foundProducts: props.products
    }
  }

  static getDerivedStateFromProps(props, state) {
    var foundProducts = props.products.filter(product => {
      return product.name.toLowerCase().match(props.query.toLowerCase()) ||
        product.description.toLowerCase().match(props.query.toLowerCase());
    });
    return({
      'foundProducts': foundProducts
    });
  }

  render() {
    return(
      <div className="results">
        {this.state.foundProducts.map(function(product, i) {
          return(
            <Result product={product} key={i}/>
          )
        })}
      </div>
    )
  }
}


export default Results;
