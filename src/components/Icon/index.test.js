/** @format */

import { render, screen } from "@testing-library/react";
import md5 from "md5";
import Icon from ".";

describe("Icon component", () => {
	describe("When a icon is created with name twitch", () => {
		it("the icon contain this path hash value 327fbc38c8e878259c3ec35ef231517a", () => {
			render(<Icon name="twitch" />);
			expect(md5(screen.getByTestId("icon").getAttribute("d"))).toEqual(
				"327fbc38c8e878259c3ec35ef231517a"
			);
		});
	});
	describe("When a icon is created with name facebook", () => {
		it("the icon contain this path hash value bbea4c9e40773b969fdb6e406059f853", () => {
			render(<Icon name="facebook" />);
			expect(md5(screen.getByTestId("icon").getAttribute("d"))).toEqual(
				"bbea4c9e40773b969fdb6e406059f853"
			);
		});
	});

	describe("When an icon is created with name 'twitter'", () => {
		it("the icon contains the correct path hash value", () => {
			render(<Icon name="twitter" />);

			expect(md5(screen.getByTestId("icon").getAttribute("d"))).toEqual(
				"82f5be4a5c07199cb75dacec50b90b2a"
			);
		});
	});

	describe("When an icon is created with name 'youtube'", () => {
		it("the icon contains the correct path hash value", () => {
			render(<Icon name="youtube" />);

			let combinedPathData = "";

			screen
				.getByTestId("icon")
				.querySelectorAll("path")
				.forEach((path) => {
					combinedPathData += path.getAttribute("d");
				});

			expect(md5(combinedPathData)).toEqual("c6205440272b9aa56ca98073a335cbc8");
		});
	});

	describe("When an icon is created with name 'close'", () => {
		it("the icon contains the correct path hash value", () => {
			render(<Icon name="close" />);
			expect(md5(screen.getByTestId("icon").getAttribute("d"))).toEqual(
				"fe53fa5bf815b6d5983fcadf9a15d3d1"
			);
		});
	});
});
