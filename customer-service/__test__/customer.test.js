"use strict";

const request = require("supertest");
const app = require("../app");

beforeAll(async () => {
    // to implement
});

beforeEach(async () => {
    // to implement
});

afterEach(async () => {
    // to implement
});

afterAll(async () => {
    // to implement
});

describe("GET /api/v1/customer", () => {
  test("It should respond with an array of customers", async () => {
    const response = await request(app).get("/api/v1/customer");
    expect(response.body.length).toBe(5);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("active");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test a 404", () => {
  test("It should respond with a 404 status", async () => {
    const response = await request(app).get("/api/v1/nowhere");
    expect(response.statusCode).toBe(404);
  });
});
