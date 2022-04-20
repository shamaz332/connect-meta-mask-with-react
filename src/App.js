import './App.css';

import { Contract, providers } from "ethers";
import { useEffect, useState } from "react";

import React from 'react'

const App = () => {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  // state for keeping track of current connected account.
	const [account, setAccount] = useState(null);

  useEffect(() => {
		if (window.ethereum) {
			setIsWalletInstalled(true);
		}
	}, []);

  async function connectWallet() {
		window.ethereum
			.request({
				method: "eth_requestAccounts",
			})
			.then((accounts) => {
				setAccount(accounts[0]);
			})
			.catch((error) => {
				alert("Something went wrong");
			});
	}
  if (account === null) {
    return (
      <div className="App">
        { 
          isWalletInstalled ? (
            <button onClick={connectWallet}>Connect Wallet</button>
          ) : (
            <p>Install Metamask wallet</p>
          )
        }


      </div>
    );
  }
    return (
      <div className="App"> 
        <p>Connected as: {account}</p>
      </div>
  ); 

}

export default App