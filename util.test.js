const { generateText, checkAndGenerate } = require("./util");

const javan = "javan (38 years old)"

test("should output name and age", () => {
  const text = generateText("javan", 38);
  expect(text).toBe(javan);
  const text2 = generateText("anna", 298);
  expect(text2).toBe("anna (298 years old)");
});

test("should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});

test('should generate a valid text output', () => {
	const text = checkAndGenerate('javan', 38)
	expect(text).toBe(javan)
})