// Temporary stubs for @coinbase/onchainkit/wallet functionality
"use client";
import React from "react";

export function ConnectWallet({ children, ...props }: { children?: React.ReactNode; className?: string; onClick?: () => void }) {
  return React.createElement('button', {
    ...props,
    onClick: () => console.log("Connect wallet clicked")
  }, children || "Connect Wallet");
}

export function Wallet({ children, ...props }: { children?: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return React.createElement('div', props, children);
}

export function WalletDropdown({ children, ...props }: { children?: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return React.createElement('div', props, children);
}

export function WalletDropdownDisconnect({ children, ...props }: { children?: React.ReactNode; className?: string; onClick?: () => void }) {
  return React.createElement('button', {
    ...props,
    onClick: () => console.log("Disconnect wallet clicked")
  }, children || "Disconnect");
}