import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EthereumPrice() {
  const [ethereumPrice, setEthereumPrice] = useState(0);

  useEffect(() => {
    const fetchEthereumPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
        );
        if (response && response.data && response.data.ethereum && response.data.ethereum.usd) {
          setEthereumPrice(response.data.ethereum.usd)
      };

      console.log('The response to the psalm is:');
      console.log(response.data.ethereum.usd);

      } catch (error) {
        console.error('Error fetching Ethereum price:', error);
      }
    };

    // Fetch Ethereum price on component mount
    fetchEthereumPrice();



    // Set up a timer to fetch the price at regular intervals (e.g., every minute)
    const intervalId = setInterval(() => fetchEthereumPrice(), 30000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (

  <>

  <h1>Ethereum Price: ${ethereumPrice}</h1>
  <h1>$5000 is equivalent to {(5000/ethereumPrice).toFixed(5)} Ethereum</h1>

  </>)
};

// export const ethereumPrice = EthereumPrice(); // Export the variable

export default EthereumPrice; // Export the component


