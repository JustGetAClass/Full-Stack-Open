const supertest = require("supertest");
const mongoose = require("mongoose");

const helper = require("./test_helper");
const app = require("../app");
const api = supertest(app);

const Blog = require("../models/blog");

beforeEach(async () => {
	await Blog.deleteMany({});
	await Blog.insertMany(helper.blogs);
}, 100000);

test("blogs are returned in JSON format", async () => {
	const response = await api
		.get("/api/blogs")
		.expect(200)
		.expect("Content-Type", /application\/json/);

	expect(response.body).toHaveLength(helper.blogs.length);
});

test("blogs have an id", async () => {
	const response = await api
		.get("/api/blogs")
		.expect(200)
		.expect("Content-Type", /application\/json/);

	expect(response.body[0].id).toBeDefined();
});

afterAll(async () => {
	await mongoose.connection.close();
});
