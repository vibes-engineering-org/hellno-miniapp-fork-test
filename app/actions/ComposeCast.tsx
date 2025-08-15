"use client";
import { useComposeCast, useIsInMiniApp } from "../../lib/minikit-stubs";
import { Button } from "../ui/Button";

export function ComposeCast() {
  const { isInMiniApp } = useIsInMiniApp();
  const { composeCast } = useComposeCast();

  return (
    <Button
      disabled={!isInMiniApp}
      onClick={() => {
        composeCast({
          text: "Hello, world!",
        });
      }}
    >
      Compose Cast
    </Button>
  );
}
