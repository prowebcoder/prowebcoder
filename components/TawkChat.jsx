"use client";
import { useEffect } from "react";

export default function TawkChat() {
  useEffect(() => {
    // Avoid adding script multiple times
    if (document.getElementById("tawkScript")) return;

    const s1 = document.createElement("script");
    s1.id = "tawkScript";
    s1.async = true;
    s1.src = "https://embed.tawk.to/67de927d175050190bd0212b/1imumoepp"; // replace with your ID
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return null; // no UI, just script injection
}
