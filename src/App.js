import React from "react";

// import { ConnectButton } from "@rainbow-me/rainbowkit";
import img from "./assets/ud-things.png"
import Header from "./components/Header";
import ConnectButton from "./components/Wallet"
import { Mint } from "./integration";

const App = () => {
  const handleClick = async() => {
    console.log("Cle");
    try {
      const res = await Mint("0xced92587E448f15765073A37E77b1286F0f034Ad",0.00000001);
      console.log("res",res);
      console.log("minteed");
    } catch (error) {
      console.log("erroir in miuntinfs",error);
    }
  }
  return (
    <div className="flex justify-center items-center mx-auto bg-gradient-to-t from-customStart via-customStart to-blue-950 min-h-screen">
      <div className=" items-center space-y-6 ">
        <Header />
        <div className="flex justify-center">
          <ConnectButton />
        </div>
        <div className="items-center mx-auto pt-[16px]">
        <div className="text-center">
          <p className=" text-[24px] md:text-[30px] font-bold text-white">         Donate (Relevant text)</p>
     
        </div>
        {/* <div className="flex justify-center px-0 py-4">      <ConnectButton />
</div> */}
        <div className="w-[350px] md:w-[455px] mx-auto pt-[34px] space-y-4 text-[16px]">
          <div className="">
            <label
              className="block text-sm font-medium text-white" 
              htmlFor="walletaddress"
            >
              Recipient&apos;s Wallet Address
            </label>
            <input
              type="text"
              id="walletaddress"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              placeholder="0xced92587E448f15765073A37E77b1286F0f034Ad"
value={"0xced92587E448f15765073A37E77b1286F0f034Ad"}
              required
readonlu            />
          </div>
      
          <div className="">
            <label className="block text-sm font-medium text-white" htmlFor="amount">
              Amount to Send
            </label>
            <input
              type="text"
              id="amount"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              placeholder="00"
              value={0.00000001}
              required
            //   onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        
        </div>
      </div>
        <div className="flex justify-center">
          <button  onClick={handleClick} className="text-white w-[350px] md:w-[455px] h-[48px] bg-customBorder border-2 border-customButtonStroke font-bold hover:bg-blue-900 rounded-[32px]">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
