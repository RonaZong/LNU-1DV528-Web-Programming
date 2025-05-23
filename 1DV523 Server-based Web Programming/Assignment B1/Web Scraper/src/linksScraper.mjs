import axios from 'axios';
import * as cheerio from 'cheerio';

/**
 * Scrape links from the starting URL.
 *
 * @param {String} url The starting URL to scrape links from.
 * @returns {Object} The scraped links.
 */

export async function scrapeLinks(url) {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    // Log the link response data for debugging
    // console.log(`Link response data for ${url}:`, response.data);

    const links = {};
    $('a').each((index, element) => {
        const href = $(element).attr('href');
        if (href.includes('calendar')) {
            links.calendarUrl = new URL(href, url).href;
        } else if (href.includes('cinema')) {
            links.cinemaUrl = new URL(href, url).href;
        } else if (href.includes('dinner')) {
            links.dinnerUrl = new URL(href, url).href;
        }
    });
    // Log the links for debugging
    // console.log('Links:', links);

    const calendarResponse = await axios.get(links.calendarUrl);
    const calendarPage = cheerio.load(calendarResponse.data);
    // Log the calendar response data for debugging
    // console.log(`Calendar response data for ${calendarUrl}:`, calendarResponse.data);

    const calendarLinks = [];
    calendarPage('a').each((index, element) => {
        const href = $(element).attr('href');
        if (href.includes('paul') || href.includes('peter') || href.includes('mary')) {
            calendarLinks.push(new URL(href, links.calendarUrl).href);
        }
    });
    // Log the calendar links for debugging
    // console.log('Calendar links:', calendarLinks);

    return {
        ...links,
        calendarLinks,
    };
}