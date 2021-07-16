import axios from 'axios';

const PRIME_GET_URL = '/api/prime';

interface RequestPrimeMedianResponseInterface {
  data?: number[];
  errorMessage?: string;
}

export const requestPrimeMedian = async (
  searchNumber: number
): Promise<RequestPrimeMedianResponseInterface> => {
  const funcResponse: RequestPrimeMedianResponseInterface = {};

  try {
    const res = await axios.get(PRIME_GET_URL, {
      params: { q: searchNumber },
    });
    if (!res.data.data) {
      funcResponse.errorMessage = 'No response from server!';
    }
    funcResponse.data = res.data.data;
    funcResponse.errorMessage = '';
    return funcResponse;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      funcResponse.errorMessage = error?.response?.data?.errorMessage;
    } else if (error.request) {
      // The request was made but no response was received
      funcResponse.errorMessage = 'Server Error!';
    } else {
      // Something happened in setting up the request that triggered an Error
      funcResponse.errorMessage = 'Some error happened!';
      console.log('Error', error.message);
    }
  }

  if (!funcResponse?.data && !funcResponse.errorMessage) {
    funcResponse.errorMessage = 'Some error happened!';
  }

  return funcResponse;
};
