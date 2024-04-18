import { z } from "astro:content";

export default z.object({
	position: z.string().describe(".g. Software Engineer"),
	url: z.string().url().optional().describe("e.g. http://facebook.example.com"),
	startDate: z.coerce.date(),
	endDate: z.coerce.date().optional(),
	summary: z.string().describe("Give an overview of your responsibilities at the company"),
	highlights: z.string().array().describe("Specify multiple accomplishments"),
});
