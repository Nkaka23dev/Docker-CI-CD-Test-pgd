import {expect, test} from "@playwright/test";

test("Verify Application Title", async ({page}) => {
  const url = await page.goto("www.google.com");

  console.log("URL is: ", url); 
  
  const title =  await page.title();

  await expect(page).toHaveTitle("Google")
}) 