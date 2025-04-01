"use client";

import Button from "@/components/general/button";

const DownloadCV = () => {
  return (
    <Button
      onClick={() =>
        window?.open(
          "https://docs.google.com/document/d/1YD15DkB7sEMtK9SOx9sSQy3JsJkV7BJhGxjjqu6K2-g/edit?tab=t.0",
          "_blank"
        )
      }
    >
      Download CV
    </Button>
  );
};

export default DownloadCV;
