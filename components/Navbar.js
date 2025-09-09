import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import { PiClockLight } from 'react-icons/pi';
import { BsSearch } from 'react-icons/bs';
import { HiMenu, HiX } from 'react-icons/hi';
import AdmissionModal from './AdmissionModal';
import { HOST } from '@/utils/static';
import { fetchCountries } from '@/utils/apiFunctions/GetAllCountries';

const Navbar = ({ data }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [country, setCountry] = useState([]);

	const countries = [
		{ code: 'uk', name: 'UK', flag: '🇬🇧', path: '/countries/uk' },
		{ code: 'usa', name: 'USA', flag: '🇺🇸', path: '/countries/usa' },
		{
			code: 'ireland',
			name: 'Ireland',
			flag: '🇮🇪',
			path: '/countries/ireland',
		},
		{ code: 'canada', name: 'Canada', flag: '🇨🇦', path: '/countries/canada' },
		{
			code: 'germany',
			name: 'Germany',
			flag: '🇩🇪',
			path: '/countries/germany',
		},
		{ code: 'france', name: 'France', flag: '🇫🇷', path: '/countries/france' },

		{
			code: 'australia',
			name: 'Australia',
			flag: '🇦🇺',
			path: '/countries/australia',
		},
		{
			code: 'newzealand',
			name: 'New Zealand',
			flag: '🇳🇿',
			path: '/countries/newzealand',
		},
	];

	// Services data
	const services = [
		{ name: 'Student Visa', path: '/studentvisa' },
		{ name: 'Business Visa', path: '/businessvisa' },
		{ name: 'OET Coaching', path: '/oetcoaching' },
	];

	// Toggle the mobile menu open/close
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Close menu when a link is clicked or overlay is clicked
	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		fetchCountries(setCountry);
	}, []);

	return (
		<>
			{/* ======= Top Navbar ======= */}
			<div className='navbar-top'>
				<div className='left-info'>
					<div className='info-item'>
						<HiOutlineMail />
						<span className='info-text'>info@vidhyaroute.com</span>
					</div>
					<div className='info-item'>
						<GoLocation />
						<span className='info-text'>
							{' '}
							UG-49 Charmwood plaza, Faridabad 121009
						</span>
					</div>
					<div className='info-item'>
						<PiClockLight />
						<span className='info-text'>Mon - Sat: 9:00 - 18:00</span>
					</div>
				</div>

				<div className='right-info'>
					<div className='social-icons'>
						<a href='https://www.facebook.com/share/1Faw3sy54h/?mibextid=wwXIfr'>
							<FaFacebookF />
						</a>
						<a href='https://www.instagram.com/routevidhy?igsh=MTV4cnE5d2xydDk0aQ=='>
							<FaInstagram />
						</a>
						<a href='https://www.linkedin.com/company/vidhya-route/'>
							<FaLinkedinIn />
						</a>
					</div>

					<div className='search-container'>
						<input
							type='text'
							placeholder='Search...'
						/>
						<BsSearch />
					</div>

					<a href='tel:+91 8920949831'>
						<button className='appointment-btn'>Call Now</button>
					</a>
				</div>
			</div>

			{/* ======= Bottom Navbar ======= */}
			<div className='navbar-bottom'>
				{/* Centered logo visible on larger screens */}
				<div className='nav-empty justify-content-center logo-background'>
					<Link href='/'>
						<img
							src='/images/logo.png'
							alt='Vidhyaarohee'
							style={{ width: 120, height: 120 }}
							className='mt-2 mobile-logo'
						/>
					</Link>
					<div>
						<p
							style={{
								background: 'none',
								fontWeight: 'bold',
								color: 'white',
								marginBottom: -20,
								fontSize: 30,
							}}>
							Vidhyaa Route
						</p>
						<p
							style={{
								background: 'none',
								color: 'white',
								margin: 0,
								fontSize: 13,
							}}>
							<br />
							Your Bridge to Global Education
						</p>
					</div>
				</div>

				<div className='navbar-bottom-wrapper'>
					{/* Button Section */}
					<div className='profile-section'>
						<button
							className='btn-blue'
							onClick={() => setShowModal(true)}>
							Get Your Admission
						</button>
					</div>

					{/* ======= Navigation Links (Desktop & Mobile) ======= */}
					<div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
						{/* Mobile Logo (visible only when menu is open) */}
						{isMenuOpen && (
							<div className='mobile-logo text-center mb-4'>
								<img
									src='/images/logo.png'
									alt='Vidhyaarohee'
									style={{ width: 100, height: 'auto', margin: '0 auto' }}
								/>
							</div>
						)}

						<Link
							href='/'
							className='nav-link'
							onClick={closeMenu}>
							Home
						</Link>
						<Link
							href='/about'
							className='nav-link'
							onClick={closeMenu}>
							About
						</Link>

						{/* Services Dropdown */}
						<div className='nav-link dropdown-container services-dropdown'>
							<span>Our Services</span>
							<div className='dropdown-menu'>
								{services.map((service, index) => (
									<Link
										key={index}
										href={service.path}
										className='dropdown-item'
										onClick={closeMenu}>
										{service.name}
									</Link>
								))}
							</div>
						</div>

						<Link
							href='/contact'
							className='nav-link'
							onClick={closeMenu}>
							Contact Us
						</Link>

						{/* Countries Dropdown */}
						<div className='nav-link dropdown-container countries-dropdown'>
							<span>Countries</span>
							<div className='dropdown-menu countries-grid'>
								<div className='countries-container'>
									{countries.map((countri) => (
										<>
											{country
												.filter((item) => item.country_name === countri.name)
												.map((iits, index) => (
													<Link
														key={index}
														href={`/countries/${iits.page_url}`}
														className='country-item'
														onClick={closeMenu}>
														<span className='country-flag'>
															{countri.flag.toUpperCase()}
														</span>
														<span className='country-name'>{iits.title}</span>
													</Link>
												))}
										</>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* ======= Mobile Hamburger Icon ======= */}
					<button
						className='mobile-menu-btn'
						onClick={toggleMenu}
						aria-label='Toggle menu'>
						{isMenuOpen ? <HiX /> : <HiMenu />}
					</button>
				</div>
			</div>

			{/* ======= Mobile Overlay (for dim background click-to-close) ======= */}
			{isMenuOpen && (
				<div
					className='mobile-overlay'
					onClick={closeMenu}></div>
			)}
			<AdmissionModal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
			/>
		</>
	);
};

export default Navbar;

export const getServerSideProps = async () => {
	const res = await axios.get(`${HOST}countries/all`);
	return {
		props: {
			data: res.data?.response || null, // safe optional chaining
		},
	};
};
