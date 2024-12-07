/** @format */
import { getMonth } from "./index";

describe("Date helper", () => {
	describe("When getMonth is called", () => {
		it("the function return janvier for 2022-01-01 as date", () => {
			// Create a new Date object for January
			const date = new Date("2022-01-01");
			// Test the function with this date
			expect(getMonth(date)).toBe("janvier");
		});
		it("the function return juillet for 2022-07-08 as date", () => {
			// Create a new Date object for July
			const date = new Date("2022-07-08");
			// Test the function with this date
			expect(getMonth(date)).toBe("juillet");
		});
	});
});
