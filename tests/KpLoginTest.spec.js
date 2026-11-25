import{test,expect} from '..//Fixtures//test-fixture';

test.beforeEach("url Loading", async({page})=>
{
    await page.goto(process.env.BASEURL);
    
})



test("Invalid login",async({page,login})=>
{
    await login.setvalues("anjana@gmail","athira");
    await login.clicklogin();
    await expect(page).toHaveURL("https://keralaproperty.in/member/login/")

})


test("Logo is visible",async({login})=>
{
    await expect(login.logofield).toBeVisible();
    
})


test("Logo navigation",async({page,login})=>
{
    await login.clickLogo();
    await expect(page).toHaveURL("https://keralaproperty.in/");
})

