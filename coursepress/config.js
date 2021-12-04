const config = {
  gatsby: {
    pathPrefix: '/courses/introduction-to-web-programming',
    siteUrl: 'https://coursepress.lnu.se',
    gaTrackingId: null,
    trailingSlash: false
  },
  header: {
    logo:'',
    logoLink: '',
    title: 'logo-wordmark-sv.png',
    courseName: 'Introduction to web programming (1DV525)',
    links: [{ text: '', link: '' }]
  },
  sidebar: {
    // forcedNavOrder:[],
    // Does below really works?
    // collapsedNav: [ // add trailing slash if enabled above
    //   '00-setup',
    //   '01-part-0'
    // ],
    links: [
      // {
      //   text: 'GitLab',
      //   link: 'https://gitlab.lnu.se/1dv525'
      // },
      // {
      //   text: 'MyMoodle',
      //   link: 'https://mymoodle.lnu.se/course/view.php?id=50953'
      // },
      // {
      //   text: 'Schedule',
      //   link: 'https://cloud.timeedit.net/lnu/web/schema2/riq6YQ07755Z69Qy7Q70Z0Z66QZ600799YZ3Y5gQ50og767XQpq5obrQQcZq6mo.html'
      // },
      // {
      //   text: 'Kursplan (sv)',
      //   link: 'https://kursplan.lnu.se/kursplaner/kursplan-1DV525-1.pdf'
      // },
      // {
      //   text: 'Syllabus (en)',
      //   link: 'https://kursplan.lnu.se/kursplaner/syllabus-1DV525-1.pdf'
      // },
    ],
    frontline: false,
    ignoreIndex: true
    //startCollapsed: true,  // works?
    //collapsedNav: true    // works?
  },
  siteMetadata: {
    title: 'Linnaeus University',
    description: 'Course website for the course Introduction to web programming (1DV525)',
    ogImage: null,
    favicon: 'images/favicon.png'
  }
}

module.exports = config
