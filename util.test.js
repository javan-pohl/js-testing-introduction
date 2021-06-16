const { generateText } = require("./util");

test("should output name and age", () => {
  const text = generateText("javan", 38);
  expect(text).toBe("javan (38 years old)");
  const text2 = generateText("anna", 298);
  expect(text2).toBe("anna (298 years old)");
});

test("should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});
