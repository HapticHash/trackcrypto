import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";
import { Container, Row, Table } from "react-bootstrap";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="coin__app">
      <Container>
        <div className="coin__search">
          <h1 className="coin__text">Search a currency</h1>
          <form>
            <input
              type="text"
              placeholder="Search"
              className="coin__input"
              onChange={handleChange}
            />
          </form>
        </div>
        <Row>
          <Table hover variant="dark" responsive>
            <thead>
              <tr>
                <th>Logo</th>
                <th>Coin</th>
                <th>Symbol</th>
                <th>Market Cap</th>
                <th>Price</th>
                <th>Volume 24H</th>
                <th>Change</th>
              </tr>
            </thead>
          </Table>
        </Row>

        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketCap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default App;
