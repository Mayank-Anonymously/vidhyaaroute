import React from 'react';
import { useRouter } from 'next/router';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';

const blogData = [
	{
		title: 'Rethinking the Gatekeepers: Admissions & Academic Priorities in Study Abroad-2026.',
		date: 'Aug 6, 2025',
		author: 'Vidhyaroute',
		description:
			"In 2026, the global study abroad game isn’t just about where you go—it's how you get in. And spoiler alert: the rules of admission are changing fast.",
		image: '/images/smileyoung.jpg',
		slug: 'rethinking-gatekeepers-2026',
	},
	{
		title: 'The New Map of Study Abroad in 2026',
		date: 'Aug 5, 2025',
		author: 'Vidhyaroute',
		description:
			'This year, a seismic shift is redefining how students choose where to learn, live, and launch their global careers. And it’s not just about new countries rising — it’s about students rewriting the rules entirely.',
		image: '/images/camera.jpg',
		slug: 'new-map-study-abroad-2026',
	},
	{
		title: 'Borders, Bureaucracy & Breakthroughs: The 2026 Student Visa & Policy Landscape',
		date: 'Aug 4, 2025',
		author: 'Vidhyaroute',
		description:
			'You’ve aced your tests. Crafted the perfect personal statement. Built a dazzling portfolio.',
		image: '/images/smilefemale.jpg',
		slug: 'student-visa-policy-2026',
	},
];

const Review = () => {
	const router = useRouter();

	return (
		<section
			className='py-5 bg-white position-relative overflow-hidden'
			style={{
				backgroundImage: 'url("/images/reviewbg.png")',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}>
			<div className='container position-relative z-1'>
				<SectionHeading
					label='Blogs'
					title='World Immigration News & Updates'
				/>
				<div className='container' style={{ marginBottom: '100px' }}>
					<div className='row g-4'>
						{blogData.map((item, index) => (
							<div key={index} className='col-12 col-md-4'>
								<div className='card h-100 shadow-sm rounded-4 overflow-hidden border-0'>
									<img
										src={item.image}
										className='card-img-top'
										alt={item.title}
										style={{ height: '220px', objectFit: 'cover' }}
									/>
									<div className='card-body'>
										<div className='d-flex text-muted small mb-2 gap-3'>
											<div className='d-flex align-items-center gap-1'>
												<FaUser className='text-blue' /> <span>By {item.author}</span>
											</div>
											<div className='d-flex align-items-center gap-1'>
												<FaCalendarAlt className='text-blue' /> <span>{item.date}</span>
											</div>
										</div>

										<h5 className='fw-semibold text-blue'>{item.title}</h5>

										<p
											className='pt-3 pb-4 small text-muted'
											style={{ borderBottom: '1px solid #dddddd' }}>
											{item.description}
										</p>

										<button
											className='btn btn-link text-blue small fw-semibold p-0'
											onClick={() => router.push(`/blogs/${item.slug}`)}>
											Read More →
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Review;
