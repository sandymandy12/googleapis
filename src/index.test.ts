import { youtube } from "./index";
import { youtube_v3 as v3 } from "googleapis";

const { youtube: yt, search } = youtube


test("initialize youtube object", () => {
  expect(yt).toBeInstanceOf(v3.Youtube);
});

test("create search function", () => {
  expect(search("naruto")).resolves.toBeTruthy();
});

test("search returns result", () => {
  expect(search("naruto")).resolves.toBeInstanceOf(Object);
});
