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

test("all blogs are returned", async () => {
	const response = await api.get("/api/blogs");
	expect(response.body).toHaveLength(helper.blogs.length);
});

afterAll(async () => {
    await mongoose.connection.close()
  })
