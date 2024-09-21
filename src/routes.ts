import Router from "koa-router";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.AUTH_CGPT;
const ORG_KEY = process.env.AUTH_CGPT;
const PRJ_KEY = process.env.AUTH_CGPT;

const openai = new OpenAI({
  organization: ORG_KEY,
  project: PRJ_KEY,
  apiKey: API_KEY,
});

export const router = new Router();

router.get("/product", async (ctx, next) => {
  try {
    //Call Mongodb database
    //Get Data from db
    //Call GPT-3 API
    // const completion = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: "Tell me a debug joke" }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(completion.choices[0]);
  } catch (error) {
    console.error("Error communicating with OpenAI API:", error);
  }
  ctx.body = {
    status: "success",
    json: {
      status: "success",
      message: "Hello World from api",
    },
  };
});
