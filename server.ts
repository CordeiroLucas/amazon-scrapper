import express from "express";
import axios from "axios";
import { JSDOM } from "jsdom"; 

const app = express();
const HOST = "localhost";
const PORT = 3000;
const URL = `http://${HOST}:${PORT}`;
const DIR = "/api/scrape";

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
	res.setHeader("Access-Control-Allow-Methods", "GET");

	next();
});

app.get(DIR, async (req, res) => {
	const keyword = req.query.keyword as string;
	if (!keyword) { // checks if the 'keyword' parameter was passed
		// console.log("Parameter 'keyword' is required"); // =================== log
		res.status(400).json({ error: "Parameter 'keyword' is required" });
	}
	else {

		const url = `https://www.amazon.com.br/s?k=${encodeURIComponent(keyword)}`; // Amazon URL with the passed 'keyword'
		const response = await axios.get(url, { // makes a GET request to the Amazon URL
			headers: {
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/webkit-version (KHTML, like Gecko)", // Browser User-Agent to avoid being blocked by Amazon
			},
		});

		const dom = new JSDOM(response.data); // creates a new JSDOM object with the HTML of the Amazon page
		const document = dom.window.document;

		const products = Array.from(document.querySelectorAll("[data-asin]")).map((product) => { // maps the found products
			const title = product.querySelector(".a-link-normal h2 span")?.textContent?.trim();
			const rating = product.querySelector(".a-icon-star-small")?.textContent?.trim();
			const reviews = product.querySelector(".a-size-small .a-link-normal")?.textContent?.trim();
			const image = product.querySelector(".s-image")?.getAttribute("src");

			// returns the product data if the title exists (to avoid products without a title)
			if (title) {
				// console.log({ title, rating, reviews, image }); // =================== log
				return { title, rating, reviews, image };
			}
		}).filter(Boolean); // filters out products that are 'undefined'
		res.json(products); // returns the found products
	};
});

app.listen(PORT, () => {
	console.log(`Server running at ${URL}${DIR}?keyword=`); // =================== log
});
