const Counter = () => {
  let [val, setVal] = useState(0);
  const handleDecrement = () => {
    setVal(val - 1);
    console.log(val);
  };
  const handleIncrement = () => {
    setVal(val + 1);
    console.log(val);
  };
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <div className="counter">
        <p>{val}</p>
        <div className="btnContainer">
          <button className="inc" onClick={handleIncrement}>
            INC
          </button>
          <button className="dec" onClick={handleDecrement}>
            DEC
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
