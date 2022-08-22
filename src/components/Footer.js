import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert(
        "Error: This is not a valid address because it is missing an @ symbol 😥"
      );
    }
  }

  return (
    <footer className="jh-footer">
      <div className="jh-footer-elem">For PC enthusiasts 💻 🖥️ </div>
      <div className="jh-footer-elem">Subscribe to our newsletter:</div>
      <input
        placeholder="Enter your email"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
    </footer>
  );
}

export default Footer;
