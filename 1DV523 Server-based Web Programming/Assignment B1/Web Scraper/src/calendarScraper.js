import axios from 'axios';
import cheerio from 'cheerio';

export async function scrapeCalendar(url) {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const links = [];
    $('a').each((index, element) => {
        links.push($(element).attr('href'));
    });

    const availability = {};
    for (const link of links) {
        const friendResponse = await axios.get(link);
        const friendPage = cheerio.load(friendResponse.data);
        const days = friendPage('.availability').text().split(', ');
        availability[link] = days;
    };

    const commonDays = ['Friday', 'Saturday', 'Sunday'].filter(day => Object.values(availability).every(days => days.includes(day)));

    return commonDays;
}