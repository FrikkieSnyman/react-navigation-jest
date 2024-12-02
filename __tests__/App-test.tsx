import { render, userEvent, screen, act } from '@testing-library/react-native';
import { App } from '../src/App';

jest.useFakeTimers();

describe('<App />', () => {
  const asyncEvent = userEvent.setup({
    advanceTimers: jest.advanceTimersByTime,
  });
  test('Text renders correctly on App', async () => {
    render(<App />);

    screen.getByText('Home Screen');
    await asyncEvent.press(screen.getByText('Go to Profile'));
    screen.getByText("jane's Profile");
  });
});
