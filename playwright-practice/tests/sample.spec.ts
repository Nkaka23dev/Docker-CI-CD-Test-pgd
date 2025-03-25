import { test, expect } from '@playwright/test'; 


test("First testing", async ({page}) => {
  expect(12).toBe(12)
})

test("Second test", async ({page}) => {
  expect(8).toBe(8)
  expect(false).toBeFalsy()
})

test.skip("Second test 2", async ({page}) => {
 expect(9).toBe(9)
})

test("Third Test", ({page}) => {
    //Assert
    expect("Ishimwe Nkaka Jean Eric".includes("Eric")).toBeTruthy()
    expect(true).toBeTruthy();
})