import { render, cleanup, waitForElement } from '@testing-library/react';
// import axiosMock from 'axios';
import useAuthentication from '../useAuthentication';
import { renderHook, act } from '@testing-library/react-hooks';
import { LOGIN_URL } from '../../../Urls/AuthenticationUrl';
import axios from 'axios';
jest.mock('axios');
afterEach(cleanup);
describe('login', () => {
  it('login a user', async () => {
    const { result } = renderHook(() => useAuthentication());
    const data = {
      email: 'me@me.com',
      password: 'password',
    };
    axios.post.mockedResolvedValue([
      {
        data: {
          // eslint-disable-next-line @typescript-eslint/camelcase
          api_token: 'TkpGRnUwV3hBcVRpMjU5cDVDdFBxZDl2azYzZDM1WTdmeGtrcndxUg==',
        },
        message: 'login successful',
      },
    ]);
    expect(axios.post).toHaveBeenCalledWith(`${LOGIN_URL}`);

    await act(async () => {
      result.current.loginUser(data);
    });
  });
});
