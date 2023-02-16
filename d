(async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);
  console.log("from browser");
  const outputfromBrowser = await browser.execute(() => {
    const textFromH4 = document.querySelector("#content > div > h4").innerHTML;

    return textFromH4;
  });
  const zz = await $("#content > div > h4").getText();
  console.log(zz);
  await browser.debug()


})();
