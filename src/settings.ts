export const profile = {
	fullName: 'Harutyun Harry Ilanyan',
	title: 'Data Science & Applied Math ',
	institute: 'UC Berkeley',
	author_name: 'Harutyun Harry Ilanyan', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Data Science', description: 'Analysis of complex datasets and statistical modeling', field: 'data-science' },
		{ title: 'Applied Math', description: 'Mathematical modeling and optimization', field: 'applied-math' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'harry_ila@berkeley.edu',
	linkedin: 'https://www.linkedin.com/in/harry-ilanyan',
	x: 'https://www.x.com/yourhandle', // Let's remove since we don't have/use
	github: 'https://github.com/harryila',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=YOUR_ID', // Currently dont have, but let's look into if it's good to make one already
	inspire: '',
	arxiv: '', // This would be realy good in the near future
}

export const template = {
	website_url: 'https://harryila.github.io/personalWeb', // Update this with your actual GitHub Pages URL
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: process.env.NODE_ENV === 'production' ? '/personalWeb' : '' // Repository name starting with /
}

export const seo = {
	default_title: 'Harry Ilanyan',
	default_description: 'Personal academic website showcasing research, publications, and professional experience.',
	default_image: '/images/profile-preview.png',
}
