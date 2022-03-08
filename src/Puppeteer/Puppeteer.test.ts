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
  it('дождаться загрузку кнопки "Главная" и сделать скриншот', async () => {
    await page.waitForSelector('#root > header > nav > a:nth-child(1) > button');
    await page.screenshot({ path: './src/Puppeteer/StartPage.png' });
  });
  it('дождаться загрузку кнопки "О сериале", кликнуть на нее и сделать скрин', async () => {
    jest.setTimeout(5000);
    await page.waitForSelector('#root > header > nav > a:nth-child(2) > button');
    await page.click('#root > header > nav > a:nth-child(2) > button');
    await page.screenshot({ path: './src/Puppeteer/screenshotAboutSerial.png' }, 5000);
  });
  it('дождаться загрузку кнопки "Таблица", кликнуть на нее и сделать скрин', async () => {
    await page.waitForSelector('#root > header > nav > a:nth-child(2) > button');
    await page.click('#root > header > nav > a:nth-child(2) > button');
    await page.waitForSelector('#root > div > div:nth-child(3) > a:nth-child(2) > button');
    await page.click('#root > div > div:nth-child(3) > a:nth-child(2) > button');
    function delay(time: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    }
    await delay(2000);
    await page.screenshot({ path: './src/Puppeteer/screenshotTable.png' });
  });
  it('дождаться загрузку кнопки "Таблица", кликнуть на нее, кликнуть на "Показать еще" и сделать скрин', async () => {
    await page.waitForSelector('#root > header > nav > a:nth-child(2) > button');
    await page.click('#root > header > nav > a:nth-child(2) > button');
    await page.waitForSelector('#root > div > div:nth-child(3) > a:nth-child(2) > button');
    await page.click('#root > div > div:nth-child(3) > a:nth-child(2) > button');
    function delay1(time: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    }
    await delay1(1000);
    await page.waitForSelector('#root > div > div:nth-child(4) > div > button:nth-child(1)');
    await page.click('#root > div > div:nth-child(4) > div > button:nth-child(1)');
    function delay2(time: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    }
    await delay2(1000);
    await page.screenshot({ path: './src/Puppeteer/screenshotTableFirsPress.png' }, 5000);
  });
  it('дождаться загрузку кнопки "Таблица", кликнуть на нее, кликнуть на "Удалить" и сделать скрин', async () => {
    await page.waitForSelector('#root > header > nav > a:nth-child(2) > button');
    await page.click('#root > header > nav > a:nth-child(2) > button');
    await page.waitForSelector('#root > div > div:nth-child(3) > a:nth-child(2) > button');
    await page.click('#root > div > div:nth-child(3) > a:nth-child(2) > button');
    function delay1(time: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    }
    await delay1(1000);
    await page.waitForSelector('#root > div > div:nth-child(4) > div > button:nth-child(1)');
    await page.click('#root > div > div:nth-child(4) > div > button:nth-child(1)');
    function delay2(time: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    }
    await delay2(1000);
    await page.waitForSelector('#root > div > div:nth-child(4) > div > button:nth-child(2)');
    await page.click('#root > div > div:nth-child(4) > div > button:nth-child(2)');
    function delay3(time: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    }
    await delay3(1000);
    await page.screenshot({ path: './src/Puppeteer/screenshotTableDell.png' }, 5000);
  });
  it('дождаться загрузку SVG картинки на стартовой странице, кликнуть на нее и сделать скрин', async () => {
    await page.waitForSelector('#root > header > nav > a:nth-child(1) > button');
    await page.click('#root > header > nav > a:nth-child(1) > button');
    await page.waitForSelector('#Capa_1');
    await page.click('#Capa_1');
    function delay3(time: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    }
    await delay3(1000);
    await page.screenshot({ path: './src/Puppeteer/screenshotSVGStartPage.png' }, 5000);
  });
  it('дождаться загрузки SVG картинки на стартовой странице, нажать на SVG, нажать на кнопку "Показать еще" сделать скрин', async () => {
    await page.waitForSelector('#root > header > nav > a:nth-child(1) > button');
    await page.click('#root > header > nav > a:nth-child(1) > button');
    await page.waitForSelector('#Capa_1');
    await page.click('#Capa_1');
    function delay3(time: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    }
    await delay3(1000);
    await page.screenshot({ path: './src/Puppeteer/screenshotDogs1.png' });
    await page.waitForSelector('#root > div > div > button');
    await page.click('#root > div > div > button');
    function delay(time: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    }
    await delay(3000);
    await page.screenshot({ path: './src/Puppeteer/screenshotDogs2.png' });
  });
  afterAll(async () => {
    await browser.close();
  });
});
