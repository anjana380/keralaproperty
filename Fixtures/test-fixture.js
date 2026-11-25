import {test as basename,expect} from '@playwright/test'
import {KpLoginPage} from "..//pages//KpLoginPage"
import { KpHomePage } from "../pages/KpHomePage"


export const test=basename.extend({
    login:async({page},use)=>
    {
        await use(new KpLoginPage(page));
    },
     Home:async({page},use)=>
    {
        await use(new KpHomePage(page));
    }

    
    
})
export {expect};