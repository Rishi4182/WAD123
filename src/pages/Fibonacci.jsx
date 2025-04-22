import { useState } from 'react';

function Fibonacci() {
  const [number, setNumber] = useState('');
  const [sequence, setSequence] = useState([]);

  const calculateFibonacci = (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = parseInt(number);
    if (n > 0) {
      setSequence(calculateFibonacci(n));
    }
  };

  return (
    <div className="fibonacci-container">
      <h2>Fibonacci Series Generator</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
            min="1"
          />
          <button type="submit">Generate</button>
        </div>
      </form>
      {sequence.length > 0 && (
        <div className="result">
          <h3>Fibonacci Sequence:</h3>
          <p>{sequence.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default Fibonacci;