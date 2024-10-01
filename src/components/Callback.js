import React, { useState, useCallback } from 'react';

const NumberSorter = () => {
  const [numbers, setNumbers] = useState([10,8,5,6,9]);
  const [sortedNumbers, setSortedNumbers] = useState([]);

  const sortNumbers = useCallback(() => {
    const sorted = [...numbers].sort((a, b) => a - b);
    setSortedNumbers(sorted);
  }, [numbers]);

  return (
    <div>
      <h3>Original Numbers: {numbers.join(', ')}</h3>
      <h3>Sorted Numbers: {sortedNumbers.join(', ')}</h3>
      <button onClick={sortNumbers}>Sort Numbers</button>
    </div>
  );
};

export default NumberSorter;
