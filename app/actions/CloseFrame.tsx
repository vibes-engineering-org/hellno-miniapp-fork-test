"use client";
import { useClose, useIsInMiniApp } from "../../lib/minikit-stubs";
import { Button } from "../ui/Button";

export function CloseFrame() {
  const { isInMiniApp } = useIsInMiniApp();
  const closeFrame = useClose();

  return (
    <Button
      disabled={!isInMiniApp}
      onClick={() => {
        closeFrame();
      }}
    >
      Close Frame
    </Button>
  );
}
