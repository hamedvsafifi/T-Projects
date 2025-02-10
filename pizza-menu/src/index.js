import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 16,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Order({ closeHour, openHour }) {
  const Hour = new Date().getHours();
  const isStoreOpen = Hour >= openHour && Hour <= closeHour;

  return (
    <>
      {isStoreOpen === true ? (
        <>
          <button className="btn">Order Now</button>
          <p>we are currently open!, contact us now</p>
        </>
      ) : (
        <p>sorry we currently closed</p>
      )}
    </>
  );
}

function Pizza({ pizzaobj }) {
  return (
    <li className={"pizza" + (pizzaobj.soldOut ? " sold-out" : "")}>
      <img src={pizzaobj.photoName} alt={"img of" + pizzaobj.name} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        {pizzaobj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{"$" + pizzaobj.price}</span>
        )}
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>pizza pizza pizza</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Order closeHour={12 + 10} openHour={8} />
    </footer>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaobj={pizza} />
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
