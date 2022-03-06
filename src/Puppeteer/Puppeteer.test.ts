import puppeteer from 'puppeteer';

const start = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });// после того, как проведу тест надо поставить true headless: false
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });
  return { page, browser };
};

describe('Puppeteer тест должен', () => {
  it('дождаться загрузку кнопки "О сериале" и сделать скриншот', async () => {
    const { page, browser } = await start();

    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.#root > div > header > nav > a:nth-child(2) > button');
    await page.screenshot({ path: './src/Puppeteer/StartPage.png' });
    await browser.close();
  });
  it('дождаться загрузку кнопки "О сериале" и кликнуть на нее и сделать скрин', async () => {
    const { page, browser } = await start();

    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.#root > div > header > nav > a:nth-child(2) > button');
    await page.click('.#root > div > header > nav > a:nth-child(2) > button');
    await page.screenshot({ path: './src/Puppeteer/screenshotList.png' });

    await browser.close();
  });
  it('дождаться загрузку кнопки "Таблица", кликнуть на нее и сделать скрин', async () => {
    const { page, browser } = await start();

    await page.goto('http://localhost:3000/');

    await page.waitForSelector('#root > div > main > div > div:nth-child(3) > ul > li:nth-child(2) > a > button');
    await page.click('#root > div > main > div > div:nth-child(3) > ul > li:nth-child(2) > a > button');
    await page.screenshot({ path: './src/Puppeteer/screenshotTable.png' });

    await browser.close();
  });
  it('дождаться загрузку кнопки "Главная" и кликнуть на нее', async () => {
    const { page, browser } = await start();

    await page.goto('http://localhost:3000/');

    await page.waitForSelector('#root > div > header > nav > a:nth-child(1) > button');
    await page.click('#root > div > header > nav > a:nth-child(1) > button');

    await browser.close();
  });
  it('дождаться загрузку SVG картинки, кликнуть на нее и сделать скрин', async () => {
    const { page, browser } = await start();

    await page.goto('http://localhost:3000/');

    await page.waitForSelector('#Capa_1');
    await page.click('#Capa_1');
    await page.screenshot({ path: './src/Puppeteer/screenshotDogs.png' });

    await browser.close();
  });
  it('дождаться загрузки описания, сделать скрин, нажать на кнопку, сделать скрин', async () => {
    const { page, browser } = await start();

    await page.goto('http://localhost:3000/');

    const header = await page.evaluate(() => document.body.textContent);
    expect(header).toContain('Собакены всегда приносят в нашу жизнь радость))');

    await page.waitForSelector('#root > div > main > div > div > img');
    await page.waitForSelector('#root > div > main > div > div > button');
    await page.screenshot({ path: './src/Puppeteer/screenshotDogs1.png' });
    await page.click('#root > div > main > div > div > button');
    await page.screenshot({ path: './src/Puppeteer/screenshotDogs2.png' });

    await browser.close();
  });
});
