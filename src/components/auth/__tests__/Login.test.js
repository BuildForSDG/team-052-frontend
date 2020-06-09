import { createMemoryHistory } from 'history';
import Login from '../Login';
import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
// import { renderHook, act } from '@testing-library/react-hooks';
// import AppContext from '../../../context/AppContext';
import { AppState } from '../../../context/AppState';
// import { configure } from 'enzyme';
// import Adapter from 'enzyme';
// import { mount } from 'enzyme';

// configure({ adapter: new Adapter() });

describe('login component', () => {
  it('submits the the login form', () => {
    const history = createMemoryHistory();
    const LoginComponent = () => {
      // const { loginUser } = useContext(AppContext);

      return (
        <AppState>
          <Router history={history}>
            <Login />
          </Router>
        </AppState>
      );
    };
    // const wrapper = mount(
    //   <AppState>
    //     <LoginComponent />
    //   </AppState>,
    // );
    const { getByText } = render(<LoginComponent />);

    // console.log(wrapper);

    // const { login, getByTestId } = renderHook(() =>
    //   render(
    //     <Router history={history}>
    //       <Login />
    //     </Router>,
    //   ),
    // );

    //   const {render} = ren
    // const login = {
    //   email: 'me@me.com',
    //   password: 'password',
    // };

    // const { getByTestId, findByPlaceholderText, findByText, getByText } = render(
    //   <Router history={history}>
    //     <Login login={login} />
    //   </Router>,
    // );

    // const searchInput = await findByPlaceholderText('Search value');
    // fireEvent.change(searchInput, { target: { value: 'search-string' } });
    const submitButton = getByText('Submit');
    // act(() => {
    //   /* fire events that update state */
    //   fireEvent.click(submitButton);
    //
    // });
    expect(submitButton).toHaveBeenCalled(1);

    // const submitId = getByTestId('select-testid');
  });
  // const {render} =
});
