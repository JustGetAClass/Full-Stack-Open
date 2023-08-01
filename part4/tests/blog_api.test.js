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

test("a blog can be added", async () => {
	const newBlog = {
		title: "Blog Exercise",
		author: "Blog Author",
		url: "Blog Link",
		likes: 1,
	};

	await api
		.post("/api/blogs")
		.send(newBlog)
		.expect(201)
		.expect("Content-Type", /application\/json/);

	const blogsAtEnd = await helper.blogsInDb();
	expect(blogsAtEnd).toHaveLength(helper.blogs.length + 1);

	const titles = blogsAtEnd.map((blog) => blog.title);
	expect(titles).toContain("Blog Exercise");
});

test("blog without likes is not added", async () => {
	const newBlog = {
		title: "Blog Exercise",
		author: "Blog Author",
		url: "Blog Link",
	};

	await api
		.post("/api/blogs")
		.send(newBlog)
		.expect(201)
		.expect("Content-Type", /application\/json/);

	const blogsAtEnd = await helper.blogsInDb();
	expect(blogsAtEnd).toHaveLength(helper.blogs.length + 1);

	const addedBlog = blogsAtEnd.find((blog) => blog.title === newBlog.title);
	expect(addedBlog.likes).toEqual(0);
});

afterAll(async () => {
	await mongoose.connection.close();
});
