// import React, { useEffect, useRef, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// const Messages = ({ contactId, adminuser, socket }) => {
//   const [data, setData] = useState([]);
//   const [message, setMessage] = useState("");
//   const [arrivalMessage, setArrivalMessage] = useState(null);
//   const scrollRef = useRef();

//   const handlesentMessage = async () => {
//     const response = await fetch("http://localhost:5000/message/setMessage", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         from: adminuser, // Sender
//         to: contactId, // Receiver
//         message: message, // Message content
//       }),
//     });

//     if (response.ok) {
//       // Emit the message through socket
//       socket.current.emit("send-msg", {
//         to: contactId,
//         from: adminuser,
//         message,
//       });

//       // Update the messages state
//       const msgs = [...data];
//       msgs.push({ fromSelf: true, message: message });
//       setData(msgs);

//       setMessage(""); // Clear the input field after sending a message
//     } else {
//       console.log(await response.text());
//     }
//   };

//   useEffect(() => {
//     if (socket.current) {
//       socket.current.on("msg-recieve", (message) => {
//         setArrivalMessage({ fromSelf: false, message: message });
//       });
//     }
//   }, [socket]);

//   useEffect(() => {
//     if (arrivalMessage) {
//       setData((prev) => [...prev, arrivalMessage]);
//     }
//   }, [arrivalMessage]);

//   useEffect(() => {
//     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [data]);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       if (!contactId) return;
//       try {
//         const response = await fetch(
//           `http://localhost:5000/message/getMessage`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               from: adminuser, // Sender
//               to: contactId, // Receiver
//             }),
//           }
//         );
//         if (!response.ok) {
//           console.log(await response.text());
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchMessages();
//   }, [contactId, adminuser]);

//   const handleMessage = (e) => {
//     setMessage(e.target.value);
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <div className="flex-grow p-4 overflow-auto bg-white rounded-lg shadow-inner">
//         <div className="flex flex-col space-y-4 ">
//           {data.map((msg, index) => (
//             <div
//               key={index}
//               ref={scrollRef}
//               className={`self-${msg.fromSelf ? "end" : "start"} bg-${
//                 msg.fromSelf ? "green" : "blue"
//               }-300 p-3 rounded-lg shadow`}
//             >
//               <p>{msg.message}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mt-4 flex">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           className="flex-grow p-2 border border-gray-300 rounded-l-lg"
//           value={message}
//           onChange={handleMessage}
//         />
//         <button
//           className="p-2 bg-blue-600 text-white rounded-r-lg"
//           onClick={handlesentMessage}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Messages;
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Messages = ({ contactId, adminuser, socket }) => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  const handlesentMessage = async () => {
    const response = await fetch("http://localhost:5000/message/setMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: adminuser, // Sender
        to: contactId, // Receiver
        message: message, // Message content
      }),
    });

    if (response.ok) {
      // Emit the message through socket
      socket.current.emit("send-msg", {
        to: contactId,
        from: adminuser,
        message,
      });

      // Update the messages state
      const msgs = [...data];
      msgs.push({ fromSelf: true, message: message });
      setData(msgs);

      setMessage(""); // Clear the input field after sending a message
    } else {
      console.log(await response.text());
    }
  };

  // useEffect(() => {
  //   if (socket.current) {
  //     socket.current.on("msg-recieve", (message) => {
  //       setArrivalMessage({ fromSelf: false, message: message });
  //     });
  //   }
  // }, [socket]);
  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (message) => {
        console.log(`Received message: ${message}`);
        setArrivalMessage({ fromSelf: false, message: message });
      });
    }
  }, [socket]);

  useEffect(() => {
    if (arrivalMessage) {
      setData((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!contactId) return;
      try {
        const response = await fetch(
          `http://localhost:5000/message/getMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: adminuser, // Sender
              to: contactId, // Receiver
            }),
          }
        );
        if (!response.ok) {
          console.log(await response.text());
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessages();
  }, [contactId, adminuser]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow p-4 overflow-auto bg-white rounded-lg shadow-inner">
        <div className="flex flex-col space-y-4 ">
          {data.map((msg, index) => (
            <div
              key={index}
              ref={scrollRef}
              className={`self-${msg.fromSelf ? "end" : "start"} bg-${
                msg.fromSelf ? "green" : "blue"
              }-300 p-3 rounded-lg shadow`}
            >
              <p>{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-grow p-2 border border-gray-300 rounded-l-lg"
          value={message}
          onChange={handleMessage}
        />
        <button
          className="p-2 bg-blue-600 text-white rounded-r-lg"
          onClick={handlesentMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Messages;
