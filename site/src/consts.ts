// Edit these to make the site yours — everything personal lives here.
export const SITE = {
	name: 'Brian Ebiyau',
	title: 'Brian Ebiyau',
	description:
		'Ph.D. student in Electrical and Computer Engineering at Carnegie Mellon University and the University of Porto (CMU Portugal dual-degree program).',
	email: 'bebiyau@andrew.cmu.edu',
};

// `icon` must match a key in src/components/Icon.astro
export const LINKS = [
	{ label: 'Email', icon: 'mail', href: `mailto:${SITE.email}` },
	{ label: 'CV', icon: 'cv', href: '/Brian_Ebiyau_CV.pdf' }, // built from cv/cv.tex
	{ label: 'Google Scholar', icon: 'scholar', href: 'https://scholar.google.com/citations?user=pZlE07AAAAAJ&hl=en' },
	{ label: 'GitHub', icon: 'github', href: 'https://github.com/ebyau' },
	{ label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/brian-ebiyau/' },
];

// Newest first. Optional `href` turns the text into a link.
type NewsItem = { date: string; text: string; href?: string };

export const NEWS: NewsItem[] = [
	{ date: 'Aug 2026', text: 'Started my Ph.D. at Carnegie Mellon University and the University of Porto.' },
	{
		date: '2024',
		text: 'Won 1st place in both tracks of the ITU AI/ML in 5G Challenge on LLMs for telecom.',
		href: 'https://zindi.world/competitions/specializing-large-language-models-for-telecom-networks/leaderboard',
	},
];

// Your name in `authors` is bolded automatically when it matches SITE.name.
// Optional `note` adds a small badge (e.g. 'Oral', 'Best Paper').
type Publication = {
	title: string;
	authors: string[];
	venue: string;
	year: number;
	note?: string;
	links: { label: string; href: string }[];
};

export const PUBLICATIONS: Publication[] = [
	{
		title: 'Seeing the Threat: How Drivers React to Motorcycles in African City Traffic',
		authors: ['Brian Ebiyau', 'João Barros', 'Moise Busogi'],
		venue: 'IEEE International Conference on Vehicular Electronics and Safety (ICVES)',
		year: 2025,
		links: [{ label: 'Paper', href: 'https://ieeexplore.ieee.org/abstract/document/11376493/' }],
	},
	{
		title: 'Eyes and Ears: Automated Annotation of Audio Data Using Computer Vision',
		authors: ['Galane Basha Namomsa', 'Alex Gichamba', 'Brian Ebiyau', 'João Barros'],
		venue: 'IEEE International Conference on Image Processing (ICIP)',
		year: 2025,
		links: [{ label: 'Paper', href: 'https://ieeexplore.ieee.org/abstract/document/11084628/' }],
	},
	{
		title: 'ColBERT Retrieval and Ensemble Response Scoring for Language Model Question Answering',
		authors: [
			'Alex Gichamba',
			'Tewodros Kederalah Idris',
			'Brian Ebiyau',
			'Eric Nyberg',
			'Teruko Mitamura',
		],
		venue: 'IEEE Globecom Workshops (GC Wkshps)',
		year: 2024,
		links: [
			{ label: 'Paper', href: 'https://doi.org/10.1109/GCWkshp64532.2024.11100297' },
			{ label: 'arXiv', href: 'https://arxiv.org/abs/2408.10808' },
			{ label: 'Code', href: 'https://github.com/Alexgichamba/itu_qna_challenge' },
		],
	},
];

// `role` appears before the course; optional `href` links the course.
type Course = { role: string; course: string; term: string; href?: string };

export const TEACHING: Course[] = [
	{
		role: 'Teaching Assistant',
		course: 'CMU 11-785 Introduction to Deep Learning',
		term: 'Spring 2025',
		href: 'https://deeplearning.cs.cmu.edu/S25/index.html',
	},
	{
		role: 'Guest Lecturer',
		course: 'CMU 11-611 Natural Language Processing',
		term: 'Fall 2024',
		href: 'https://www.cs.cmu.edu/~ehn/11-611/',
	},
];

// `title` is shown in bold, `detail` on the line below.
export const SERVICE = [
	{ title: 'Reviewer', detail: 'IEEE ITSC 2026' },
	{ title: 'Member', detail: 'PhD in Education Student Organization (PESO), CMU ECE, 2026' },
];
