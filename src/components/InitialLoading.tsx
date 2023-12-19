"use client";
import React from "react";

export default function Loading() {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.remove();
    }
  }, []);
  return (
    <div id="globalLoader">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
        alt=""
      />
    </div>
  );
}
