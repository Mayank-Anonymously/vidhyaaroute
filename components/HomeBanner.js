import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const HomeBanner = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Carousel slides data
	const slides = [
		{
			id: 1,
			image: '/images/bg1.png',
			title: "Let's Plan",
			highlight: 'Your Study Abroad!',
			description:
				'Vidhyaa Route has extensive experience in the industry, having worked in this field for many years. We provide consultancy and assistance services in the field of overseas education & we act as an intermediary or consultant for facilitating education loans for students & offer end-to-end support for visa processing.',
			link: '/about',
		},
		{
			id: 2,
			image: '/images/studentnew.jpg',
			title: 'Discover',
			highlight: 'World-Class Universities!',
			description:
				'Explore top-ranked universities across the globe with our comprehensive guidance. From application assistance to visa processing, we make your dream education accessible and achievable.',
			link: '/about',
		},
		{
			id: 3,
			image: '/images/banner-image.png',
			title: 'Start Your',
			highlight: 'Global Journey Today!',
			description:
				'Join thousands of successful students who trusted us with their international education dreams. Get personalized counseling and expert support every step of the way.',
			link: '/about',
		},
	];

	// Auto-slide functionality
	useEffect(() => {
		const slideInterval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000);

		return () => clearInterval(slideInterval);
	}, [slides.length]);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const currentSlideData = slides[currentSlide];

	return (
		<>
			<style jsx>{`
				.home-banner {
					height: 130vh;
					position: relative;
					color: white;
				}

				.banner-image-wrapper {
					position: absolute;
					inset: 0;
					z-index: 0;
				}

				.banner-bg {
					opacity: 1;
					transition: opacity 0.8s ease-in-out;
				}

				.banner-content {
					z-index: 2;
				}

				.text-highlight {
					color: #ffffff;
				}

				.banner-controls {
					position: absolute;
					bottom: 60px;
					left: 60px;
					z-index: 3;
				}

				.transparent-btn {
					background-color: rgba(255, 255, 255, 0.25);
					border: none;
					color: white;
					transition: background-color 0.3s ease;
				}

				.transparent-btn:hover {
					background-color: rgba(255, 255, 255, 0.4);
				}

				.control-btn {
					width: 45px;
					height: 45px;
					background-color: rgba(255, 255, 255, 0.25);
					border: none;
					color: white;
					font-size: 18px;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: background-color 0.3s ease;
					cursor: pointer;
				}

				.control-btn:hover {
					background-color: rgba(255, 255, 255, 0.4);
				}

				.banner-wave {
					/* Add your wave styling here if needed */
				}

				.slide-content {
					opacity: 1;
					transform: translateX(0);
					transition: all 0.6s ease-in-out;
				}

				.slide-content.fade-in {
					animation: slideIn 0.6s ease-out forwards;
				}

				@keyframes slideIn {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>

			<section className='home-banner position-relative overflow-hidden text-white'>
				{/* Background Images */}
				<div className='banner-image-wrapper'>
					{slides.map((slide, index) => (
						<div
							key={slide.id}
							style={{
								position: 'absolute',
								inset: 0,
								opacity: index === currentSlide ? 1 : 0,
								transition: 'opacity 0.8s ease-in-out',
								zIndex: index === currentSlide ? 1 : 0,
							}}>
							<img
								src={slide.image}
								alt={`Slide ${index + 1}`}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									position: 'absolute',
								}}
							/>
						</div>
					))}
				</div>

				{/* Overlay Content */}
				<div className='container h-100 d-flex align-items-center position-relative z-1'>
					<div className='banner-content'>
						<div
							key={currentSlide}
							className='slide-content fade-in'>
							<h1 className='display-5 fw-bold mb-3'>
								{currentSlideData.title} <br />
								<span className='text-highlight'>
									{currentSlideData.highlight}
								</span>
							</h1>
							<p
								className='mb-4 text-white-50'
								style={{ maxWidth: '500px' }}>
								{currentSlideData.description}
							</p>
							<div className='d-flex justify-content-start'>
								<a href={currentSlideData.link}>
									<button className='transparent-btn fw-semibold px-4 py-2 d-inline-flex align-items-center'>
										More Details{' '}
										<ArrowRight
											className='ms-2'
											size={16}
										/>
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Arrows */}
				<div className='banner-controls d-flex gap-1'>
					<button
						className='control-btn'
						onClick={prevSlide}
						aria-label='Previous slide'>
						<ChevronLeft size={20} />
					</button>
					<button
						className='control-btn'
						onClick={nextSlide}
						aria-label='Next slide'>
						<ChevronRight size={20} />
					</button>
				</div>

				<div className='banner-wave' />
			</section>
		</>
	);
};

export default HomeBanner;
