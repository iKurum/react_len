import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  return <input value={name} onChange={e => setName(e.target.value)} />;
}