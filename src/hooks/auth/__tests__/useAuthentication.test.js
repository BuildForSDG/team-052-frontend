import { render, cleanup, waitForElement } from '@testing-library/react';
// import axiosMock from 'axios';
import useAuthentication from '../useAuthentication';
import { renderHook, act } from '@testing-library/react-hooks';

afterEach(cleanup);
describe('login', () => {
  it('login a user', async () => {
    const { result } = renderHook(() => useAuthentication());
    const data = {
      email: 'me@me.com',
      password: 'password',
    };

    await act(async () => {
      result.current.loginUser(data);
    });
  });
});
