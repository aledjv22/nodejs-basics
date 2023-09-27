const puppeteer = require('puppeteer');
const link = 'https://platzi.com/blog/que-es-platzi-master/';

(async () => {
    console.log('Opening chromium');
    const browser = await puppeteer.launch({headless: false})//launch the browser

    const page = await browser.newPage();
    await page.goto(link);

    const commentsText = await page.evaluate(() => {
        const comments = document.querySelectorAll('.CommentContent-text p')
        const listOfComments = []
        comments.forEach(comment => {
            listOfComments.push(comment.innerHTML)
        })
        return listOfComments
    });

    browser.close();

    
    console.log(commentsText)
})()

/* 
    This is a project based on what we learned about scraping in the NodeJS
    course, it allows you to extract and display the comments from any Platzi
    blogpost. 
*/