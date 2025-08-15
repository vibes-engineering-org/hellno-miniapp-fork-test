// Temporary stubs for @coinbase/onchainkit/identity functionality
"use client";
import React from "react";

export function Name({ ...props }: { address?: string; className?: string; style?: React.CSSProperties }) {
  return React.createElement('span', props, 'Anonymous');
}

export function Identity({ children, ...props }: { address?: string; children?: React.ReactNode; className?: string; style?: React.CSSProperties; hasCopyAddressOnClick?: boolean }) {
  return React.createElement('div', props, children);
}

export function Address({ address, ...props }: { address?: string; className?: string; style?: React.CSSProperties }) {
  return React.createElement('span', props, address || '0x...');
}

export function Avatar({ ...props }: { address?: string; className?: string; style?: React.CSSProperties }) {
  return React.createElement('div', {
    ...props,
    style: { 
      width: '32px', 
      height: '32px', 
      backgroundColor: '#ccc', 
      borderRadius: '50%',
      display: 'inline-block',
      ...props.style
    }
  });
}

export function EthBalance({ ...props }: { address?: string; className?: string; style?: React.CSSProperties }) {
  return React.createElement('span', props, '0.0 ETH');
}