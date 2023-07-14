import { render } from "@testing-library/react";
import { getByText, Matcher } from "@testing-library/dom";
import IndexPage from "../../pages/index";

describe("IndexPage", () => {
    it("renders without crashing", () => {
        render(<IndexPage />);
    });

    it("displays the title correctly", () => {
        const { container } = render(<IndexPage />);
        expect(getByText(container as HTMLElement, "Analysis Hub")).toBeInTheDocument();
    });
});