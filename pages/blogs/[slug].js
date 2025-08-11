// pages/blogs/[slug].js
import BreadcrumbBanner from '@/components/BreadCrumbBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';
import { useRouter } from 'next/router';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';

const blogData = [
	{
		title: 'Rethinking the Gatekeepers: Admissions & Academic Priorities in Study Abroad-2026.',
		date: 'Aug 6, 2025',
		author: 'Vidhyaroute',
		description:
			"In 2026, the global study abroad game isn’t just about where you go—it's how you get in. And spoiler alert: the rules of admission are changing fast.",
		image: '/images/smileyoung.jpg',
		slug: 'rethinking-gatekeepers-2026',
		content: `
			<p>In recent years, study abroad admissions have undergone a significant transformation...</p>
			<p>From new countries entering the scene to universities adopting holistic review processes, students now face a much different path to securing their spots abroad.</p>
		`,
	},
	{
		title: 'The New Map of Study Abroad in 2026',
		date: 'Aug 5, 2025',
		author: 'Vidhyaroute',
		description:
			'This year, a seismic shift is redefining how students choose where to learn, live, and launch their global careers.',
		image: '/images/camera.jpg',
		slug: 'new-map-study-abroad-2026',
		content: `
			<p>Students are now exploring lesser-known destinations with promising opportunities...</p>
			<p>Governments are offering incentives, and new education hubs are emerging globally.</p>
		`,
	},
	{
		title: 'Borders, Bureaucracy & Breakthroughs: The 2026 Student Visa & Policy Landscape',
		date: 'Aug 4, 2025',
		author: 'Vidhyaroute',
		description:
			'You’ve aced your tests. Crafted the perfect personal statement. Built a dazzling portfolio.',
		image: '/images/smilefemale.jpg',
		slug: 'student-visa-policy-2026',
		content: `
			<p>Visa processes are evolving faster than ever before...</p>
			<p>Some countries are streamlining applications, while others are tightening restrictions.</p>
		`,
	},
];

export default function BlogPage() {
	const router = useRouter();
	const { slug } = router.query;

	// Find blog by slug
	const blog = blogData.find((b) => b.slug === slug);

	if (!blog) {
		return (
			<div className="container py-5">
				<h2>Blog not found</h2>
			</div>
		);
	}

	return (
        <>
        <Navbar/>
        <BreadcrumbBanner title="Blogs" />
		<div className="container py-5">
			<img
				src={blog.image}
				alt={blog.title}
				className="w-100 rounded mb-4"
				style={{ maxHeight: '400px', objectFit: 'cover' }}
			/>

			<h1 className="fw-bold text-blue">{blog.title}</h1>

			<div className="d-flex text-muted small mb-4 gap-3">
				<div className="d-flex align-items-center gap-1">
					<FaUser className="text-blue" /> <span>By {blog.author}</span>
				</div>
				<div className="d-flex align-items-center gap-1">
					<FaCalendarAlt className="text-blue" /> <span>{blog.date}</span>
				</div>
			</div>

			{/* Blog Content */}
			<div
				className="blog-content"
				dangerouslySetInnerHTML={{ __html: blog.content }}
			/>
		</div>
        <Footer/>
        </>
	);
}
