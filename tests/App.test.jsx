import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import App from "../src/App.jsx"

describe("App", () => {
  it("renders header", () => {
    render(<App />)
    const header = screen.getByText(/Jake + Kayti/i)
    expect(header).toBeInTheDocument()
  })
})
