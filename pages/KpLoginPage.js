import { expect } from '@playwright/test';

export class KpLoginPage
{
    /**
      * @param {import('@playwright/test').Page} page
     */
    constructor(page)
    {
        this.page=page;
        this.usernamefield=page.locator("#ulogin");
        this.passwordfield=page.locator("#upass");
        this.loginbuttonfield=page.locator("#sub_logbtn")
        this.logofield=page.getByRole('img', { name: 'Kerala Property' });
        
        

    }

    async setvalues(user,pass)
    {
        await this.usernamefield.fill(user);
        await this.passwordfield.fill(pass);
    }


    async clicklogin()
    {
        await this.loginbuttonfield.click();
    }



    async clickLogo()
    {
        await this.logofield.click();
    }


    
 
    
 
}