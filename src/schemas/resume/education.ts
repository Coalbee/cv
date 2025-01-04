import { z } from "astro:content";
import experience from "./experience";

export default experience
	.pick({ endDate: true, startDate: true, url: true })
	.extend({
		institution: z
			.string()
			.describe("e.g. Massachusetts Institute of Technology"),
		area: z.string().describe("e.g. Arts"),
		studyType: z.string().describe("e.g. Bachelor"),
		score: z.string().describe("grade point average, e.g. 3.67/4.0"),
		courses: z
			.array(
				z.string().describe("e.g. H1302 - Introduction to American history"),
			)
			.describe("List notable courses/subjects"),
	});
