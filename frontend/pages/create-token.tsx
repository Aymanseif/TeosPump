import { useState } from "react";
import { Connection, PublicKey, Transaction, SystemProgram, Keypair } from "@solana/web3.js";
import ErrorAlert from "../components/ErrorAlert";

const CreateToken = () => {
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleMint = async () => {
    try {
      setErrorMessage("");
      const response = await fetch("/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tokenName, symbol, supply }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Minting failed");
      alert("Token created! Mint: " + result.mint);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create SPL Token</h2>
      <input value={tokenName} onChange={e => setTokenName(e.target.value)} placeholder="Token Name" className="mb-2 p-2 border w-full" />
      <input value={symbol} onChange={e => setSymbol(e.target.value)} placeholder="Symbol" className="mb-2 p-2 border w-full" />
      <input value={supply} onChange={e => setSupply(e.target.value)} placeholder="Total Supply" className="mb-2 p-2 border w-full" />
      <button onClick={handleMint} className="bg-blue-600 text-white px-4 py-2 rounded">Mint Token</button>
      <ErrorAlert message={errorMessage} />
    </div>
  );
};

export default CreateToken;
