import { useState, useEffect } from "react";

function GreetingTitle() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    if (name.trim() === "") {
      document.title = "Welcome!";
    } else {
      document.title = `${greeting}, ${name}`;
    }
  }, [name, greeting]);

  return (
    <div>
      <h2>Greeting Title</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

    <input
        type="text"
        placeholder="Enter greeting"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
    />
    </div>
  );
}

export default GreetingTitle;