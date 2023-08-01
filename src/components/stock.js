import React, { useState } from "react";

const Stocks = () => {
  const [ticker, setTicker] = useState("AAPL");
  const [price, setPrice] = useState(0);
  const [strike, setStrike] = useState(0);
  const [cost, setCost] = useState(0);
  const [expire, setExpire] = useState(null);
  const [daysLeft, setDaysLeft] = useState(0);

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return (
    <div>
      <h1>Covered Calls</h1>
      <h2>FinViz settings</h2>
      <a
        href="https://finviz.com/screener.ashx?v=111&f=an_recom_buybetter,fa_div_none,geo_usa,sh_avgvol_o500,sh_opt_option,ta_sma50_pa&ft=4"
        target="_blank"
      >
        Starting Settings
      </a>
      <table>
        <tr>
          <th>Setting</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Price</td>
          <td>Down to your 1/100th of your spending money</td>
        </tr>
        <tr>
          <td>Performance</td>
          <td>Month up</td>
        </tr>
        <tr>
          <td>Net Profit Margin</td>
          <td>Positive to Over 15%</td>
        </tr>
        <tr>
          <td>Return on Investment</td>
          <td>Positive</td>
        </tr>
        <tr>
          <td>Financial Earnings date</td>
          <td>Not within option period</td>
        </tr>
      </table>
      <h2>Contract</h2>
      <table>
        <tr>
          <th>Sign</th>
          <th>Stock Price($)</th>
          <th>Strike</th>
          <th>Cost of contract</th>
          <th>Today</th>
          <th>Expiration Date</th>
          <th>Length of Contract in days</th>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
            />
          </td>
          <td>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </td>
          <td>
            <input
              type="number"
              value={strike}
              onChange={(e) => setStrike(e.target.value)}
            />
          </td>
          <td>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </td>
          <td>
            {month} / {day} / {year}
          </td>
          <td>
            <input type="date" onChange={(e) => setExpire(e.target.value)} />
          </td>
          <td>
            <input
              type="number"
              onChange={(e) => setDaysLeft(e.target.value)}
            />
          </td>
        </tr>
      </table>
      <h2>Possible Profit</h2>
      <table>
        <tr>
          <th>Total cost of stock($)</th>
          <th>Profit from Contract</th>
          <th>profit of Sale</th>
          <th>% Gain on Contract</th>
          <th>% Gain on Sale</th>
          <th>Total Gain on sale and Contract</th>
          <th>Total % Gain on sale and contract</th>
        </tr>
        <tr>
          <td>${price * 100}</td>
          <td>${cost * 100}</td>
          <td>${(strike * 100 - price * 100).toFixed(2)}</td>
          <td>{((((cost * 100) / price) * 100) / 100).toFixed(2)}%</td>
          <td>
            {(((strike * 100 - price * 100) / (price * 100)) * 100).toFixed(2)}%
          </td>
          <td>${cost * 100 + (strike * 100 - price * 100)}</td>
          <td>
            {(
              ((cost * 100 + (strike * 100 - price * 100)) / (price * 100)) *
              100
            ).toFixed(2)}
            %
          </td>
        </tr>
      </table>
      <h2>Annualized Profit</h2>
      <table>
        <tr>
          <th>Annual % Gain on Contract</th>
          <th>Annual % Gain on Sale</th>
          <th>Total Annual % Gain on sale and contract</th>
        </tr>
        <tr>
          <td>
            {(
              (365 / daysLeft) *
              ((((cost * 100) / price) * 100) / 100)
            ).toFixed(2)}
            %
          </td>
          <td>
            {(
              (365 / daysLeft) *
              ((strike * 100 - price * 100) / (price * 100)) *
              100
            ).toFixed(2)}
            %
          </td>
          <td>
            {(
              (365 / daysLeft) *
              ((cost * 100 + (strike * 100 - price * 100)) / (price * 100)) *
              100
            ).toFixed(2)}
            %
          </td>
        </tr>
      </table>
      <h2>Loss Potential</h2>
      <table>
        <table>
          <tr>
            <th>Max loss</th>
            <th>Break even Price</th>
          </tr>
          <tr>
            <td>${price * 100 - cost * 100}</td>
            <td>${(price - cost).toFixed(2)}</td>
          </tr>
        </table>
      </table>
    </div>
  );
};

export default Stocks;
