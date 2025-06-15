export const profile = {
	fullName: 'Your Name',
	title: 'Academic Researcher & Scholar',
	institute: 'Your University or Institution',
	author_name: 'Your Name', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Computer Science', description: 'Research in artificial intelligence and machine learning', field: 'computer-science' },
		{ title: 'Data Science', description: 'Analysis of complex datasets and statistical modeling', field: 'data-science' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'your.email@university.edu',
	linkedin: 'https://www.linkedin.com/in/yourprofile',
	x: 'https://www.x.com/yourhandle',
	github: 'https://github.com/yourusername',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=YOUR_ID',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://yourusername.github.io', // Update this with your actual GitHub Pages URL
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Your Name - Academic Portfolio',
	default_description: 'Personal academic website showcasing research, publications, and professional experience.',
	default_image: '/images/profile-preview.png',
}
