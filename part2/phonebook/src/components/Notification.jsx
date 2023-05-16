const Notification = ({ message, changeColor }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className="error" style={{ color: changeColor ? "green" : "red" }}>
      {message}
    </div>
  );
};

export default Notification;
