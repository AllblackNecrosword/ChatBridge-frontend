import React from 'react';

const Messages = () => {

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow p-4 overflow-auto bg-white rounded-lg shadow-inner">
        <div className="flex flex-col space-y-4">

            <h1>Welcome to the Chat Bridge</h1>
          {/* <div className="self-start bg-blue-300 p-3 rounded-lg shadow">
            <p>Hello, how are you?</p>
          </div>
          <div className="self-end bg-green-300 p-3 rounded-lg shadow">
            <p>I'm good, thank you!</p>
          </div>
          <div className="self-start bg-blue-300 p-3 rounded-lg shadow">
            <p>Hello, how are you?</p>
          </div>
          <div className="self-end bg-green-300 p-3 rounded-lg shadow">
            <p>I'm good, thank you!</p>
          </div>
          <div className="self-start bg-blue-300 p-3 rounded-lg shadow">
            <p>Hello, how are you?</p>
          </div>
          <div className="self-end bg-green-300 p-3 rounded-lg shadow">
            <p>I'm good, thank you!</p>
          </div>
          <div className="self-start bg-blue-300 p-3 rounded-lg shadow">
            <p>Hello, how are you?</p>
          </div>
          <div className="self-end bg-green-300 p-3 rounded-lg shadow">
            <p>I'm good, thank you!</p>
          </div> */}
          {/* Add more messages here */}
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
