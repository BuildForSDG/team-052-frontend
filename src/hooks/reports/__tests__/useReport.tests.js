import { render, cleanup, waitForElement } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useReports from '../useReports';
import { GET_AUTH_REPORTS_URL } from '../../../Urls/ReportUrl';

const getControlledPromise = () => {
  let deferred;
  const promise = new Promise((resolve, reject) => {
    deferred = { resolve, reject };
  });
  return { deferred, promise };
};
describe('reports controller', () => {
  //   it('makes a post request with this url', async () => {
  //     global.fetch = jest.fn();
  //     // await act(async () => (renderHook = () => useReports()));
  //     expect(global.fetch).toBeCalledWith(`${GET_AUTH_REPORTS_URL}`);
  //   });
  it('loading while fextching admin reports', async () => {
    const { deferred, promise } = getControlledPromise();
    global.fetch = jest.fn(() => promise);
    const { result, waitForNextUpdate } = renderHook(useReports);
    expect(result.current.loading).toBe(true);
    deferred.resolve();
    await waitForNextUpdate();
    //   console.log(result.current.loading)
    expect(result.current.loading).toBe(false);
  });
  it('handles error correctly', async () => {
    global.fetch = jest.fn(() => {
      return new Promise(() => {
        throw 'Fetch error';
      });
    });
    const { result, waitForNextUpdate } = renderHook(useReports);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
    // expect(result.current.report).toBe();
  });
});
