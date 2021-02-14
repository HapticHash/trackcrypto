import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import "./App.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className="coin__container">
      <Container>
        <Row>
          <Table hover variant="dark" responsive>
            <tbody>
              <tr>
                <td>
                  <img className="coin__image" src={image} alt="crypto" />
                </td>
                <td>
                  <div className="coin__name">{name}</div>
                </td>

                <td>
                  <p className="coin__symbol">{symbol}</p>
                </td>

                <td>
                  <p className="coin__marketcap">
                    ${marketCap.toLocaleString()}
                  </p>
                </td>

                <td>
                  <p className="coin__price">CA$ {price.toLocaleString()}</p>
                </td>

                <td>
                  <p className="coin__vol"> CA$ {volume.toLocaleString()}</p>
                </td>

                <td>
                  {priceChange < 0 ? (
                    <p className="coin__percent red">
                      {priceChange.toFixed(2)}%
                    </p>
                  ) : (
                    <p className="coin__percent green">
                      {priceChange.toFixed(2)}%
                    </p>
                  )}
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
        {/* <div className="coin__row">
          <div className="coin">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="coin__symbol">{symbol}</p>
          </div>
          <div className="coin__data">
            <p className="coin__price">CA$ {price.toLocaleString()}</p>
            <p className="coin__vol"> CA$ {volume.toLocaleString()}</p>
            {priceChange < 0 ? (
              <p className="coin__percent red"> {priceChange.toFixed(2)}% </p>
            ) : (
              <p className="coin__percent green"> {priceChange.toFixed(2)}% </p>
            )}
            <p className="coin__marketcap">
              Mkt Cap: ${marketCap.toLocaleString()}
            </p>
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default Coin;
