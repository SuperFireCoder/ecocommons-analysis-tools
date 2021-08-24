import { render } from "@testing-library/react";
import IndexPage from "../../pages/index";

describe("IndexPage", () => {
    it("renders without crashing", () => {
        render(<IndexPage />);
    });
});
