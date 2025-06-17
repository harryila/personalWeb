export const profile = {
	fullName: 'Harutyun Harry Ilanyan',
	title: 'Data Science & Applied Math ',
	institute: 'UC Berkeley',
	author_name: 'Harutyun Harry Ilanyan', // Author name to be highlighted in the papers section
	research_areas: [
		{ 
			title: 'Efficient Machine Learning', 
			description: 'Low-bit quantization & model compression. 2- and 4-bit LLM work, GPTQ/AWQ experiments, Helm benchmarking, plus any CVXPY-guided loss designs you\'re testing.', 
			field: 'efficient-ml' 
		},
		{ 
			title: 'Convex Optimization & Algorithms', 
			description: 'Theory → custom solvers. EE 364 projects, Newton/quasi-Newton analyses, and your interest in PhD-level algorithm design for ML.', 
			field: 'convex-optimization' 
		},
		{ 
			title: 'AI Safety & Alignment', 
			description: 'Calibration, toxicity mitigation. Alignment-aware quantization (QAAT), TruthfulQA/RealToxicityPrompts evals, and your planned MATS work.', 
			field: 'ai-safety' 
		},
		{ 
			title: 'Autonomous Systems & Robotics', 
			description: 'Drone delivery & safety constraints. NASA patent-pending research, failure-mode analysis, and any ROS/Gazebo demos or videos.', 
			field: 'autonomous-systems' 
		},
		{ 
			title: 'Data Science for Social Impact', 
			description: 'Dual-enrollment equity & ed-tech. Stanford GSE assistantship, Edvance startup, dashboards built with Data 8/100 tooling.', 
			field: 'social-impact' 
		},
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
