const { expect } = require("chai");
const { request } = require("express");
const express = require("express");
const req = require("supertest");
const app = express();
app.get("/first", (err, res) => {
  res.status(200).json({});
});

describe("First test", () => {
  it("OK response", () => {
    req(app)
      .get("/first")
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
      });
  });
});
