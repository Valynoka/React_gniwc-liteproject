import puppeteer from 'puppeteer';

let browser: any;
let page: any;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });
  await page.goto('http://localhost:3000/');
});

describe('Тесты puppeteer должны', () => {
  it('дождаться загрузку кнопки "О сериале" и сделать скриншот', async () => {
    await page.waitForSelector('#root > div > header > nav > a:nth-child(2) > button');
    await page.screenshot({ path: './src/Puppeteer/StartPage.png' });
  });
  it('дождаться загрузку кнопки "О сериале" и кликнуть на нее и сделать скрин', async () => {
    jest.setTimeout(5000);
    await page.waitForSelector('#root > div > header > nav > a:nth-child(2) > button');
    await page.click('#root > div > header > nav > a:nth-child(2) > button');
    await page.waitForSelector('#root > div > main > div > button');
    await page.screenshot({ path: './src/Puppeteer/screenshotList.png' }, 5000);
  });
  it('дождаться загрузку кнопки "Таблица", кликнуть на нее и сделать скрин', async () => {
    jest.setTimeout(5000);
    await page.waitForSelector('#root > div > header > nav > a:nth-child(2) > button');
    await page.click('#root > div > header > nav > a:nth-child(2) > button');
    await page.waitForSelector('#root > div > main > div > button');
    await page.waitForSelector('#root > div > main > div > div:nth-child(3) > ul > li:nth-child(2) > a > button');
    await page.click('#root > div > main > div > div:nth-child(3) > ul > li:nth-child(2) > a > button');
    await page.waitForSelector('#root > div > main > div > button');
    await page.screenshot({ path: './src/Puppeteer/screenshotTable.png' }, 5000);
  });
  it('дождаться загрузку кнопки "Таблица", кликнуть на нее, клинуть на "Показать еще" и сделать скрин', async () => {
    await page.waitForSelector('#root > div > header > nav > a:nth-child(2) > button');
    await page.click('#root > div > header > nav > a:nth-child(2) > button');
    await page.waitForSelector('#root > div > main > div > button');
    await page.waitForSelector('#root > div > main > div > div:nth-child(3) > ul > li:nth-child(2) > a > button');
    await page.click('#root > div > main > div > div:nth-child(3) > ul > li:nth-child(2) > a > button');
    await page.waitForSelector('#root > div > main > div > button');
    await page.click('#root > div > main > div > button');
    await page.waitForSelector('#root > div > main > div > button');
    await page.screenshot({ path: './src/Puppeteer/screenshotListFirsPress.png' }, 5000);
  });
  it('дождаться загрузку SVG картинки на стартовой странице, кликнуть на нее и сделать скрин', async () => {
    await page.click('#root > div > header > nav > a:nth-child(1) > button');
    await page.waitForSelector('#Capa_1');
    await page.screenshot({ path: './src/Puppeteer/screenshotSVGStartPage.png' }, 5000);
  });
  it('дождаться загрузки SVG картинки на стартовой странице, нажать на SVG, сделать скрин', async () => {
    await page.waitForSelector('#Capa_1', 5000);
    await page.click('#Capa_1');
    await page.waitForSelector('#root > div > main > div > div > h2');
    await page.waitForSelector('#root > div > main > div > div > button');
    await page.waitForSelector('#root > div > main > div > div > img');
    function delay(time: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    }
    await delay(4000);
    await page.screenshot({ path: './src/Puppeteer/screenshotDogs.png' });
  });
  afterAll(async () => {
    await browser.close();
  });
});
