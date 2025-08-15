"use client";
import { useMiniKit, useOpenUrl } from "../lib/minikit-stubs";
import {
  Name,
  Identity,
  Address,
  Avatar,
  EthBalance,
} from "../lib/identity-stubs";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "../lib/wallet-stubs";
import { useEffect } from "react";
import { Button } from "./ui/Button";
import { IsInMiniApp } from "./actions/IsInMiniApp";
import { AddFrame } from "./actions/AddFrame";
import { ComposeCast } from "./actions/ComposeCast";
import { ViewCast } from "./actions/ViewCast";
import { SendToken } from "./actions/SendToken";
import { SwapToken } from "./actions/SwapToken";
import { CloseFrame } from "./actions/CloseFrame";
import { UserInfo } from "./components/UserInfo";

export default function App() {
  const { setFrameReady, isFrameReady } = useMiniKit();
  const openUrl = useOpenUrl();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-[var(--app-foreground)]" style={{ background: "var(--app-background)" }}>
      <div className="w-full max-w-4xl mx-auto p-4">
        {/* XP Window Container */}
        <div className="xp-window rounded-none">
          {/* Window Title Bar */}
          <div className="xp-title-bar flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-600 border border-blue-800 rounded-sm"></div>
              <span>MiniKit Examples - Base</span>
            </div>
            <div className="flex space-x-1">
              <button className="w-5 h-4 bg-gradient-to-b from-gray-200 to-gray-400 border border-gray-600 flex items-center justify-center text-xs text-black hover:from-gray-300 hover:to-gray-500">
                <span className="font-bold leading-none" style={{fontSize: '8px'}}>_</span>
              </button>
              <button className="w-5 h-4 bg-gradient-to-b from-gray-200 to-gray-400 border border-gray-600 flex items-center justify-center text-xs text-black hover:from-gray-300 hover:to-gray-500">
                <span className="font-bold leading-none" style={{fontSize: '8px'}}>□</span>
              </button>
              <button className="w-5 h-4 bg-gradient-to-b from-red-400 to-red-600 border border-red-700 flex items-center justify-center text-xs text-white hover:from-red-500 hover:to-red-700">
                <span className="font-bold leading-none" style={{fontSize: '8px'}}>×</span>
              </button>
            </div>
          </div>

          {/* Window Content */}
          <div className="p-4">
            <header className="flex justify-between items-center mb-4 bg-[var(--app-gray)] xp-panel p-2">
              <div className="flex items-center space-x-2">
                <Wallet className="z-10">
                  <ConnectWallet>
                    <Name className="text-inherit" />
                  </ConnectWallet>
                  <WalletDropdown>
                    <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                      <Avatar />
                      <Name />
                      <Address />
                      <EthBalance />
                    </Identity>
                    <WalletDropdownDisconnect />
                  </WalletDropdown>
                </Wallet>
              </div>
            </header>

            <main className="flex-1">
              <div className="space-y-4">
                <div className="text-center xp-panel p-4">
                  <h1 className="text-lg font-bold text-[var(--app-foreground)] mb-2">
                    MiniKit Examples
                  </h1>
                  <p className="text-xs text-[var(--app-foreground-muted)]">
                    This mini app is meant to show how you can use the actions
                    available in MiniKit.
                  </p>
                </div>

                <div className="xp-panel p-4">
                  <div className="flex flex-col gap-3 justify-center items-stretch max-w-md mx-auto">
                    <IsInMiniApp />
                    <UserInfo />
                    <AddFrame />
                    <ComposeCast />
                    <ViewCast />
                    <SendToken />
                    <SwapToken />
                    <CloseFrame />
                  </div>
                </div>
              </div>
            </main>

            {/* XP-style Status Bar */}
            <div className="xp-status-bar mt-4">
              <span className="text-[var(--app-foreground-muted)]">Ready</span>
              <div className="flex-1"></div>
              <Button
                variant="ghost"
                size="sm"
                className="text-[var(--app-foreground-muted)] text-xs !bg-transparent !border-none !shadow-none h-auto py-0"
                onClick={() => openUrl("https://base.org/builders/minikit")}
              >
                Built on Base with MiniKit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
