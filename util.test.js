const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

const javan = "javan (38 years old)";
const Anna = "Anna (29 years old)";

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

test("should generate a valid text output", () => {
  const text = checkAndGenerate("javan", 38);
  expect(text).toBe(javan);
});

test("should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    headless: true,
    // slowMo: 80,
    // args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:5500/index.html");
  await page.click("input#name");
  await page.click("input#name");
  await page.type("input#name", 'Anna');
  await page.type("input#age", '29');
	await page.click('#btnAddUser')
	const finalText = await page.$eval('.user-item', el => el.textContent)
	expect(finalText).toBe(Anna)
}, 10000);
