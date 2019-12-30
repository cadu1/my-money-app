import axios from 'axios'
import { toastr } from 'react-redux-toastr';

const BASE_URL = 'http://localhost:3003/api';

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycle`);
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {
  axios.post(`${BASE_URL}/billingCycle`, values)
  .then();
  return {
    type: 'whatever',
  };
}