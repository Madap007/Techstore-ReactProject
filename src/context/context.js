import React, { useState, useEffect } from 'react';
import { linkData } from './linkData';
import { fetchData } from './productData';
import { ProductContext } from './ProductContext';

const ProductProvider = ({ children }) => {
  const [state, setState] = useState({
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,
    search: '',
    price: 0,
    company: 'all',
    
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const items = await fetchData();
        console.log('in context');
        console.log(items);

        setProducts(items);
        sortData();
        addTotals();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataAndSetState();
  }, [state.search, state.company, state.price, state.cartItems]); 

  useEffect(() => {
    syncStorage();
  }, [state.cart]); 

  useEffect(() => {
    addTotals();
  }, [state.cart, state.cartItems]); // Update totals when cart or cart items change

  const setProducts = (products) => {
    let storeProducts = products.map((item) => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };

      return product;
    });

    let featuredProducts = storeProducts.filter((item) => item.featured === true);
    let maxPrice = Math.max(...storeProducts.map((item) => item.price));

    setState((prevState) => ({
      ...prevState,
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: getStorageCart(),
      singleProduct: getStorageProduct(),
      loading: false,
      price: maxPrice,
      max: maxPrice,
    }));
  };

  const syncStorage = () => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  };

  const addTotals = () => {
    const totals = getTotals();

    setState((prevState) => ({
      ...prevState,
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total,
    }));
  };

  const getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;

    state.cart.forEach((item) => {
      subTotal += item.total;
      cartItems += item.count;
    });

    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));

    return {
      cartItems,
      subTotal,
      tax,
      total,
    };
  };

  const getStorageCart = () => {
    let cart;
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    } else {
      cart = [];
    }
    return cart;
  };

  const getStorageProduct = () => {
    return localStorage.getItem('singleProduct') ? JSON.parse(localStorage.getItem('singleProduct')) : {};
  };

  const handleSidebar = () => {
    setState((prevState) => ({ ...prevState, sidebarOpen: !prevState.sidebarOpen }));
  };

  const handleCart = () => {
    setState((prevState) => ({ ...prevState, cartOpen: !prevState.cartOpen }));
  };

  const closeCart = () => {
    setState((prevState) => ({ ...prevState, cartOpen: false }));
  };

  const openCart = () => {
    setState((prevState) => ({ ...prevState, cartOpen: true }));
  };

  const addToCart = (id) => {
    console.log(`add to cart ${id}`);
    let tempCart = [...state.cart];
    let tempProducts = [...state.storeProducts];
    let tempItem = tempCart.find((item) => item.id === id);

    if (!tempItem) {
      tempItem = tempProducts.find((item) => item.id === id);

      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };

      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }

    setState((prevState) => ({ ...prevState, cart: tempCart }), () => {
      addTotals();
      syncStorage();
      openCart();
    });
  };

  const setSingleProduct = (id) => {
    let product = state.storeProducts.find((item) => item.id === id);
    localStorage.setItem('singleProduct', JSON.stringify(product));
    setState((prevState) => ({ ...prevState, singleProduct: { ...product }, loading: false }));
  };

  const increment = (id) => {
    let tempCart = [...state.cart];
    const cartItem = tempCart.find((item) => item.id === id);
    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));

    setState((prevState) => ({ ...prevState, cart: [...tempCart] }), () => {
      addTotals();
      syncStorage();
    });
  };

  const decrement = (id) => {
    let tempCart = [...state.cart];
    const cartItem = tempCart.find((item) => item.id === id);

    cartItem.count = cartItem.count - 1;
    if (cartItem.count === 0) {
      removeItem(id);
    } else {
      cartItem.total = cartItem.count * cartItem.price;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));

      setState((prevState) => ({ ...prevState, cart: [...tempCart] }), () => {
        addTotals();
        syncStorage();
      });
    }
  };

  const removeItem = (id) => {
    let tempCart = [...state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    setState((prevState) => ({ ...prevState, cart: [...tempCart] }), () => {
      addTotals();
      syncStorage();
    });
  };

  const clearCart = () => {
    setState((prevState) => ({ ...prevState, cart: [] }), () => {
      addTotals();
      syncStorage();
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const sortData = () => {
    const { storeProducts, price, company, search } = state;
    let tempPrice = parseInt(price);
    let tempProducts = [...storeProducts];

    tempProducts = tempProducts.filter((item) => item.price <= tempPrice);

    if (company !== 'all') {
      tempProducts = tempProducts.filter((item) => item.company === company);
    }

    if (search.length > 0) {
      tempProducts = tempProducts.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.title.toLowerCase().slice(0, search.length);
        return tempSearch === tempTitle;
      });
    }

    setState((prevState) => ({ ...prevState, filteredProducts: tempProducts }));
  };

  const logout = () => {

    setIsLoggedIn(false);
    setUsername('');

  };

  return (
    <ProductContext.Provider
      value={{
        handleSidebar,
        ...state,
        handleCart,
        closeCart,
        openCart,
        addToCart,
        setSingleProduct,
        increment,
        decrement,
        clearCart,
        removeItem,
        handleChange,
        isLoggedIn,
        setIsLoggedIn,
        setUsername,
        username,
        logout,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };