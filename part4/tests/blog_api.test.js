const supertest = require("supertest");
const mongoose = require("mongoose");

const app = require("../app");
const api = supertest(app);

const Blog = require("../models/blog");

test("all blogs are returned", async() => {
    
})
