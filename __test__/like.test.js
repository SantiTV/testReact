import { fireEvent, render, screen } from "@testing-library/react";
import Like from "../Like";

test("Desplegar por default en ", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});

test("Incrementar likes", () => {
    render(<Like />);


    const likeButton = screen.getByText("Like");
    fireEvent.click(likeButton);


    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
});

test("Decremetar likes", () => {
    render(<Like />);


    const dislikeButton = screen.getByText("Dislike");
    fireEvent.click(dislikeButton);


    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
});
