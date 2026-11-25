
import{test,expect} from '..//Fixtures//test-fixture'


test.beforeEach("urlload",async({page})=>{
    
    await page.goto("https://keralaproperty.in/member/myhome/");
})

test("prpertyverify",async({page,Home})=>{
    await expect (Home.mypropertytextverification).toHaveText("My Properties");
})
test("logovisi",async({page,Home})=>{
    await expect(Home.logovisibility).toBeVisible();
})
test("nameveri",async({page,Home})=>{
    await expect(Home.nameverification).toHaveText("Anjana");
})
test("accountveri",async({page,Home})=>{
    await expect(Home.myaccounttextverification).toHaveText("My Account");
})
test("accountverify",async({page,Home})=>{
    await Home.myaccounttext.click();
})