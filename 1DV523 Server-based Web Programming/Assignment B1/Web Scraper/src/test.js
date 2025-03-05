const loginResponse = await axios.post(`${url}/login`, 
  { username, password, }, 
  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    validateStatus: (status) => status >= 200 && status < 400,
  }
);
// const cookies = loginResponse.headers['set-cookie'];
//   if (!cookies) {
//     throw new Error('Login failed, no cookies received.');
//   }

//   const bookingUrl = loginResponse.data.match(/window\.location\.href\s*=\s*['"]([^'"]+)['"]/);
//   console.log(bookingUrl)
//   if (!bookingUrl) {
//     throw new Error('Login failed, no redirect URL found.');
//   }


//   // if (!loginResponse.data.includes('Redirecting to login/booking')) {
//   //   throw new Error('Login failed, unexpected response.');
//   // }

//   const bookingResponse = await axios.get(`${url}${bookingUrl[1]}`, {
//     headers: {
//       Cookie: cookies.join('; '),
//     },
//   });
//   const $ = cheerio.load(bookingResponse.data);

//   const reservations = [];
//   $('li.reservation').each((index, element) => {
//     const timeRange = $booking(element).text().trim().split(' - ');
//     reservations.push({ start: timeRange[0], end: timeRange[1] });
//   });

//   return reservations;