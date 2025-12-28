import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";
import { TextBox } from "./ui/TextBox";
import { Button } from "./ui/Button";

export const Airdrop = () => {

    const [amount, setAmount] = useState(0);

    const wallet = useWallet();
    const {connection} = useConnection();
   
    async function sendAirdropToUser() {
        if (!wallet.publicKey) {
        alert("Wallet not connected");
    return;
  }

    await connection.requestAirdrop( wallet.publicKey, amount*LAMPORTS_PER_SOL );
    alert("Airdropped SOL");
}

    return <div className="flex items-center justify-center gap-2">
        <TextBox type="number" onchange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount here" styles="w-40vh" />
        <Button variant="secondary" size="sm" text="Airdrop" function={sendAirdropToUser}/>
    </div>
}