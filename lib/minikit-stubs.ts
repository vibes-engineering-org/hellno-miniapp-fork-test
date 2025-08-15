// Temporary stubs for @coinbase/onchainkit/minikit functionality
"use client";
import React from "react";

export function useMiniKit() {
  return {
    context: {
      client: {
        added: false
      }
    },
    setFrameReady: () => {
      console.log("Frame ready set");
    },
    isFrameReady: false
  };
}

export function useIsInMiniApp() {
  return {
    isInMiniApp: false
  };
}

export function useAddFrame() {
  return () => {
    console.log("Add frame clicked");
  };
}

export function useClose() {
  return () => {
    console.log("Close frame clicked");
  };
}

export function useComposeCast() {
  return {
    composeCast: (options: { text: string }) => {
      console.log("Compose cast:", options.text);
    }
  };
}

export function useSendToken() {
  return {
    sendToken: (options: { token: string; amount: string; recipientAddress: string }) => {
      console.log("Send token:", options);
    }
  };
}

export function useSwapToken() {
  return {
    swapToken: (options: { sellToken: string; buyToken: string; sellAmount: string }) => {
      console.log("Swap token:", options);
    }
  };
}

export function useViewCast() {
  return {
    viewCast: (options: { hash: string }) => {
      console.log("View cast:", options);
    }
  };
}

export function useOpenUrl() {
  return (url: string) => {
    console.log("Open URL:", url);
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };
}

export function MiniKitProvider({ children }: { children: React.ReactNode, apiKey?: string, chain?: unknown, config?: unknown }) {
  return React.createElement(React.Fragment, {}, children);
}