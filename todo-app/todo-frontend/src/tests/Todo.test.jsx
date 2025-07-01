import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import TodoList from "../Todos/List";

test('Testing todo', () => {
    const mockDelete = vi.fn();
    const mockToggle = vi.fn();

    const todos = [{ id: 1, text: 'Testing', done: false }];

    render(
        <TodoList
            todos={todos}
            onDelete={mockDelete}
            onToggle={mockToggle}
        />
    );

    expect(screen.getByText('Testing')).toBeInTheDocument();
});
