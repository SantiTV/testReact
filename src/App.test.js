import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Like from "./components/Likes";


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Desplegar por default en 0", () => {
  render(<Like />);
  expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});

test("Incrementar likes", () => {
  render(<Like />);


  const likeButton = screen.getByText("Like");
  fireEvent.click(likeButton);


  expect(screen.getByText("Likes: 1")).toBeInTheDocument();
});

test("Decrementar likes", () => {
  render(<Like />);


  const dislikeButton = screen.getByText("Dislike");
  fireEvent.click(dislikeButton);


  expect(screen.getByText("Likes: -1")).toBeInTheDocument();
});
