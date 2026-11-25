import {test as setup,expect} from '@playwright/test'
const authFile = "playwright/auth/auth.json";


setup("authenticate",async ({page})=>
{
    await page.goto(process.env.BASEURL);
    await page.locator("#ulogin").fill(process.env.KPUSER);
    await page.locator("#upass").fill(process.env.KPPASS);
    await page.locator("#sub_logbtn").click();
    await expect(page).toHaveURL("https://keralaproperty.in/member/myhome/");
    await page.context().storageState({path:authFile});
})