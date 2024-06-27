import React, { useEffect, useState } from 'react';

const Messages = ({ contactId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!contactId) return;

      try {
        const response = await fetch(`http://localhost:5000/getmessages/${contactId}`);
        if (!response.ok) {
          console.log(response.error);
        }
        const result = await response.json();
        setMessages(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessages();
  }, [contactId]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow p-4 overflow-auto bg-white rounded-lg shadow-inner">
        <div className="flex flex-col space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`self-${message.sender === 'me' ? 'end' : 'start'} bg-${message.sender === 'me' ? 'green' : 'blue'}-300 p-3 rounded-lg shadow`}
            >
              <p>{message.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-grow p-2 border border-gray-300 rounded-l-lg"
        />
        <button className="p-2 bg-blue-600 text-white rounded-r-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default Messages;
