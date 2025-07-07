export const profile = {
	fullName: 'Harutyun Harry Ilanyan',
	title: 'Data Science & Applied Math ',
	institute: 'UC Berkeley',
	author_name: 'Harutyun Harry Ilanyan', // Author name to be highlighted in the papers section
	research_areas: [
		{ 
			title: 'Efficient Machine Learning', 
			description: 'Developing advanced techniques for model compression, quantization, and optimization to make AI systems more accessible and computationally efficient while maintaining performance quality.', 
			field: 'efficient-ml' 
		},
		{ 
			title: 'Multi-Agent Learning & Reasoning', 
			description: 'Exploring collaborative AI systems where multiple agents learn and reason together, focusing on coordination strategies, emergent behaviors, and distributed problem-solving approaches.', 
			field: 'multi-agent' 
		},
		{ 
			title: 'Convex Optimization & Algorithms', 
			description: 'Advancing theoretical foundations and practical implementations of optimization methods, with emphasis on custom solvers, Newton methods, and algorithm design for machine learning applications.', 
			field: 'convex-optimization' 
		},
		{ 
			title: 'Mechanistic Interpretability', 
			description: 'Understanding the internal workings of neural networks through detailed analysis of model components, feature representations, and decision-making processes to enhance AI transparency.', 
			field: 'mechanistic-interpretability' 
		},
		{ 
			title: 'AI Safety & Alignment', 
			description: 'Ensuring AI systems behave reliably and beneficially through calibration techniques, toxicity mitigation, alignment-aware training, and comprehensive safety evaluation frameworks.', 
			field: 'ai-safety' 
		},
		{ 
			title: 'Human-Centered ML', 
			description: 'Designing machine learning systems that prioritize human needs, values, and interactions, with focus on fairness, accessibility, and positive societal impact through data-driven solutions.', 
			field: 'human-centered-ml' 
		},
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'harry_ila@berkeley.edu',
	linkedin: 'https://www.linkedin.com/in/harry-ilanyan',
	x: '', // Removed X/Twitter as requested
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
	lightTheme: 'light', // Fixed: Should be 'light' not 'dark'
	darkTheme: 'dark',
	excerptLength: 200,
	postPerPage: 5,
    base: process.env.NODE_ENV === 'production' ? '/personalWeb' : '' // Repository name starting with /
}

export const seo = {
	default_title: 'Harry Ilanyan',
	default_description: 'Personal academic website showcasing research, publications, and professional experience.',
	default_image: '/images/profile-preview.png',
}
