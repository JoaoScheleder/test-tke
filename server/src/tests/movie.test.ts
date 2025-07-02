import request from "supertest";
import app from "../app";

describe("Movie Routes", () => {
  it("GET /movies should return all movies", async () => {
    const response = await request(app).get("/movies");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("GET /movies/1 should return movie with ID 1", async () => {
    const response = await request(app).get("/movies/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", 1);
  });

  it("GET /movies/title/Inception should return movies matching title", async () => {
    const response = await request(app).get("/movies/title/Inception");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("GET /movies/9999 should return 404 for nonexistent movie", async () => {
    const response = await request(app).get("/movies/9999");
    expect(response.status).toBe(404);
  });
});
