describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);

    await $("#username").setValue("tomsmith");
    await $("#password").setValue("SuperSecretPassword!");
    await $('button[type="submit"]').click();

    await expect($("#flash")).toBeExisting();
    await expect($("#flash")).toHaveTextContaining(
      "You logged into a secure area!"
    );
    

    const xxx= await browser.execute(() => {
      eval(`
      const xxx= 1+2;
      console.log(xxx);
      
      `
      );
    });
    await browser.debug();
    
    await browser.pause(10000);
  });
});
