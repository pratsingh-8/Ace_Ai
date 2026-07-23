const puppeteer = require("puppeteer");

(async () => {
  try {
    console.log("1");
    const browser = await puppeteer.launch({
      headless: false,
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    });
    console.log("2");

    const page = await browser.newPage();
    console.log("3");

    await page.setContent("<h1>hello world</h1>");
    console.log("4");

    await page.pdf({
      path: "test.pdf",
      format: "A4",
      printBackground: true,
    });
    console.log("5");

    await browser.close();
    console.log("6");
  } catch (err) {
    console.error(err);
  }
})();