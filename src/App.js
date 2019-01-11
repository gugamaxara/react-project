import React, { Component } from 'react';
import './App.css';


class ProductRow extends Component{
  render(){
    const product = this.props.product;
    const name = product.stocked == true ? product.name : 
      <span style={{color:'red'}}>
          {product.name}
      </span>;

    return(
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

class ProductCategoryRow extends Component{
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan='2'>{this.props.category}</th>
      </tr>
    )
  }
}

class ProductName extends Component{
  render(){
    const rows = [];
    let lastCategory = null; 
    this.props.products.forEach(product => {
      if(product.category !== lastCategory){
          rows.push(
            <ProductCategoryRow
            category={product.category}
            key={product.category}
            />
          )
      }
      rows.push(
        <ProductRow
        product={product}
        key={product.name}
        />
      )
      lastCategory = product.category;
    });
    return(
     <table>
       <thead>
         <tr>
           <th>Name</th>
           <th>Price</th>
         </tr>
       </thead>
       <tbody>{rows}</tbody>
     </table>
    )
  }
}

class SearchBar extends Component{
  constructor(){
    super()
    this.state = {
      checkbox: false,
      value: ''
    }
  }

  handleInput = e => {
    this.setState({
      value: e.target.value
    })
  }
  render(){

    return(
      <form>
        <input type="text" placeholder="Search..." onChange={this.handleInput}/>          
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
}

class App extends Component {


  render() {
    return (
      <div>
        <SearchBar/>
        <ProductName products={PRODUCTS}/>
      </div>
    )
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default App;
