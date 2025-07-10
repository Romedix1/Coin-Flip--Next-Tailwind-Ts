'use client'

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {

  const [result, setResult] = useState("Heads");
  const [tempResult, setTempResult] = useState("Heads");
  const [loading, setLoading] = useState(false);

  function flip() {
    setLoading(true);

    const interval = setInterval(() => {
      setTempResult(prev => (prev === "Heads" ? "Tails" : "Heads"));
    }, 400);

    const finalResult = Math.random() < 0.5 ? "Heads" : "Tails";

    setTimeout(() => {
      clearInterval(interval);
      setTempResult(finalResult);
    }, 1800);

    setTimeout(() => {
      setResult(finalResult);
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="pt-12 px-6">
      <h1 className="kanit-semibold text-4xl text-center text-white" style={{textShadow: '-4px 0 0 #35383f, 4px 0 0 #35383f, 0 4px 0 #35383f, 0 -4px 0 #35383f, 4px 4px 0 #35383f, -4px -4px 0 #35383f, 4px -4px 0 #35383f, -4px 4px 0 #35383f'}}>
        Flip the coin
      </h1>
      <p className='text-center text-white mt-12 font-semibold text-xl'>Press the coin or the button to flip the coin</p>

      <div className='flex items-center justify-center flex-col mt-12'>
        <Image src={`${(loading ? tempResult : result).toLowerCase()}.svg`} alt={result} width={170} height={170} onClick={!loading ? flip : undefined} className={`cursor-pointer ${loading ? "coinFlip" : ""}`}/>
        <Image src={`shadow.svg`} alt={result ? result : 'coin'} width={140} height={170} className={`mt-6 ${loading ? "coinFlip" : ""}`}/>
      </div>

      <p className='text-center mt-12 font-semibold text-xl text-white'>{result}</p>

      <div className='flex justify-center mt-24'>
        <button className='cursor-pointer text-center font-semibold text-white bg-[#1F6FB0] rounded-lg px-12 py-3 text-xl' style={{boxShadow: '0px 4px 0px 0px #23649b;'}} onClick={!loading ? flip : undefined}>Random</button>
      </div>
    </div>
  );
}
