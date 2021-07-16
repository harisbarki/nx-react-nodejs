import { useState } from 'react';

import './prime-median.scss';

import { requestPrimeMedian as apiRequestPrimeMedian } from '@boilerplate/frontend/api-connectors';
import SearchBarComponent from '../search-bar/search-bar';

export function PrimeMedian() {
  const [median, setMedian] = useState([] as number[]);
  const [errorMessage, setErrorMessage] = useState('');

  const requestPrimeMedian = async (e: Event, searchNumber: number) => {
    e.preventDefault();
    if (!searchNumber) {
      setMedian([]);
      return setErrorMessage('Please provide a number');
    }

    if (searchNumber > 100000000) {
      setMedian([]);
      return setErrorMessage('Number too big, maximum is 100000000');
    }

    const res = await apiRequestPrimeMedian(searchNumber);
    setMedian([]);
    setErrorMessage('');
    res.data?.length
      ? setMedian(res.data)
      : setErrorMessage(res.errorMessage as string);
  };

  return (
    <div className="prime-median-component">
      <SearchBarComponent requestPrimeMedian={requestPrimeMedian} />

      <br />

      {errorMessage ? <div className="errorMessage">{errorMessage}</div> : ''}

      {median?.length > 0 ? (
        <div className="result">{median.join(',')}</div>
      ) : undefined}
    </div>
  );
}
