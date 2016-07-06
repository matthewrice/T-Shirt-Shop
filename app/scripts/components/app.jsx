var React = require('react');
var ShirtCollection = require('../models/shop').ShirtCollection;
var CartCollection = require('../models/cart').CartCollection;


var Cart = React.createClass({
  render: function(){
    var self = this;
    var collection = this.props.cartItems;

    var cartItemList = this.props.cartItems.map(function(model){
      return (
        <li key={model.cid}>
          {model.get('image')} {model.get('name')}
          <button onClick={function(){self.props.handleRemoveFromCart(model)}}>Remove From Cart</button>
        </li>
      )
    })
    console.log(cartItemList);


    return (
      <div className="row">
        <ul className="cart-list">
          <span className="your-order">Your Order</span>
          {cartItemList}
        </ul>
      </div>
    );
  }
});

// this component shows available shirts
var Store = React.createClass({
  render: function(){
    var self = this;

    var shirt = this.props.storeItems.map(function(model){
      return (
        <li key={model.cid} className="shirt-list-item">
          <div className="shirt col-md-4">
            <div className="row">
              <img  className="col-md-offset-3 col-md-6 shirt-image" src={model.get('image')} />
            </div>
            <div className="row shirt-names">
              {model.get('name')}
            </div>
            <div className="row shirt-description">
              {model.get('description')}
            </div>
            <div className="col-md-offset-3 col-md-6">
              <button onClick={function(){self.props.handleAddToCart(model)}} className="add-button">Add To Cart</button>
            </div>
          </div>
        </li>
      )
    });

    return(
      <div className="row">
        <ul className="shirt-list">
          {shirt}
        </ul>
      </div>
    );
  }
});

// this component is the entire application
var AppContainer = React.createClass({
  getInitialState: function(){
    return {
      storeItems: [],
      cartItems: []
    };
  },

  componentWillMount: function(){
    var storeItems = new ShirtCollection();
    var cartItems = new CartCollection();

    storeItems.add([
      {'image': 'https://images-na.ssl-images-amazon.com/images/I/51P0-G6ANfL._AC_US160_.jpg', 'name': 'Cookie T-Shirt', 'description': 'Nom Nom Nom'},
      {'image': 'https://images-na.ssl-images-amazon.com/images/I/41-97H41nhL._AC_US160_.jpg', 'name': 'Cookie T-Shirt', 'description': 'Nom Nom Nom'},
      {'image': 'https://images-na.ssl-images-amazon.com/images/I/31vyQk0MjVL._AC_US160_.jpg', 'name': 'Cookie T-Shirt', 'description': 'Nom Nom Nom'}
    ]);
    this.setState({
      'storeItems': storeItems,
      'cartItems': cartItems
    });
  },
  handleAddToCart: function(model){
    this.state.cartItems.add(model);
    this.forceUpdate();
  },
  handleRemoveFromCart: function(model){
    this.state.cartItems.remove(model);
    this.forceUpdate();
  },
  render: function(){
    return(
      <div>
        <div className="row">
          <div className="header well">
            <span>Cookie Monster</span>
            <img className="icon" src="./images/cookie-monster.jpg" />
            <a href="index.html" className="store-link">T-shirts</a>
            <a href="cart.html" className="cart-link">Cart</a>
          </div>
        </div>
        <div className="row">
          <div className="well deal-container">
            <div className="deal"> Cookie Monster T-Shirt Deals! </div>
            <div className="deal-expiration"> You have 10 minutes to purchase once you cart an item. </div>
          </div>
        </div>

        <Store handleAddToCart={this.handleAddToCart} storeItems={this.state.storeItems}/>
        <Cart handleRemoveFromCart={this.handleRemoveFromCart} cartItems={this.state.cartItems}/>
      </div>
    );
  }
});

module.exports = AppContainer;
