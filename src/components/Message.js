let count = 0;
const Message = () => {
  console.log("Message Called", count);
  count++;
  return <h2>Message {count}</h2>;
};

export default Message;
