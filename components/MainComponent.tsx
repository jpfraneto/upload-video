// components/VideoRecorder.tsx
import React, { ReactNode, useRef, useState } from 'react';
import { Camera } from 'lucide-react';
import { PrivyProvider, usePrivy } from '@privy-io/react-auth';
import { LogIn, LogOut } from 'lucide-react';


const MainComponent  = ({ children }: { children: React.ReactNode }) => {
    const { authenticated, logout, login } = usePrivy()

  return (
    <div className="h-screen bg-black flex items-center justify-center">
        <div className="w-full max-w-[375px] h-[812px] bg-white overflow-hidden relative shadow-lg rounded-lg">
        
        <span 
        className={`absolute top-2 right-2 z-10 w-12 h-12 ${authenticated ? "bg-purple-600 hover:bg-purple-700" : "bg-green-600 hover:bg-green-700"} hover:cursor-pointer rounded-full p-2 text-white  flex justify-center items-center transition duration-300`}
        onClick={authenticated ? logout : login}
        >
        {authenticated ? <LogOut/> : <LogIn />}
        </span>
        <main className="h-full overflow-y-auto relative">
            {children}
        </main>
        </div>
  </div>
  );
};

export default MainComponent;