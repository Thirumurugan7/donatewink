
import Web3 from "web3";

import { ethers } from "ethers";

import abi from "./abi.json";




const isBrowser = () => typeof window !== "undefined";

const {ethereum } = isBrowser();


if (ethereum){
    isBrowser().web3 = new Web3(ethereum);
    isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}


const contract_address = "0x284DAFC430a7AA660925fAf018918f3Ecd216CB8";


export const Mint = async (address,amount) => {
console.log("addre",address);

console.log("am",amount);

    // provider
    const provider = window.ethereum != null ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider();
console.log("provider",provider)

    //signer

    const signer = provider.getSigner();

console.log("signer",signer)
    // contract instance

    const tx = await signer.sendTransaction({
        to: address,
        value: ethers.utils.parseEther(amount.toFixed(10).toString()),
      });

      console.log("tx",tx);
      await tx.wait();



}