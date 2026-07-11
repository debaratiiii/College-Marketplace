import { useState } from "react";

function AI() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    const text = message.toLowerCase();

    if (text.includes("book")) {
      setReply(
        "CampusCart AI: You can sell your books by filling out the Sell form and uploading an image.",
      );
    } else if (text.includes("calculator")) {
      setReply(
        "CampusCart AI: Compare prices from different sellers before purchasing a calculator.",
      );
    } else if (text.includes("laptop")) {
      setReply(
        "CampusCart AI: Check the laptop's condition and verify it before buying.",
      );
    } else if (text.includes("note")) {
      setReply(
        "CampusCart AI: Notes are available from different students at affordable prices.",
      );
    } else if (text.includes("sell")) {
      setReply(
        "CampusCart AI: Go to the Sell page, fill in your product details, and click Post Item.",
      );
    } else {
      setReply(
        "CampusCart AI: Sorry, I couldn't understand your question. Try asking about books, calculators, laptops, notes, or selling.",
      );
    }

    setMessage("");
  };
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">AI Assistant</h1>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <div className="h-80 border rounded-lg p-4 overflow-y-auto bg-gray-50">
          <p className="text-[#0F2D6B] font-semibold">AI:</p>

          <p className="text-gray-700 mt-2">
            Hi! I'm CampusCart AI. Ask me anything about buying or selling
            products.
          </p>
          {reply && <p className="text-green-700 mt-4 font-medium">{reply}</p>}
        </div>

        <div className="flex gap-3 mt-5">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-2"
          />

          <button
            onClick={handleSend}
            className="bg-[#0F2D6B] text-white px-6 rounded-lg hover:bg-[#0F2D6B]"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default AI;
