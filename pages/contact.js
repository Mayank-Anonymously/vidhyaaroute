import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';
import BreadcrumbBanner from '@/components/BreadCrumbBanner';

const ContactUs = () => {
	return (
		<>
			<Navbar />
			<BreadcrumbBanner title='Contact Us' />

			<section className='contact-us__section'>
				<div className='container contact-us__row'>
					{/* Contact Info */}
					<div className='contact-us__info'>
						<h2 className='contact-us__title'>Get in Touch</h2>
						<p className='contact-us__subtitle'>
							Planning to study abroad? Whether you're exploring top
							universities and education loan, applying for scholarships, or navigating visa
							formalities — our expert team is here to support you at every
							step. Reach out to get personalized guidance for your global
							education journey.
						</p>

						<div className='contact-us__detail'>
							<Phone className='contact-us__icon' />
							<span>+91 89209 49831</span>
							<br />
							<span>+91 92118 71889</span>
						</div>
						<div className='contact-us__detail'>
							<Mail className='contact-us__icon' />
							<span>info@vidhyaroute.com</span>
						</div>
						<div className='contact-us__detail'>
							<MapPin className='contact-us__icon' />
							<span>UG-49 Charmwood plaza, Faridabad 121009</span>
						</div>
					</div>

					{/* Office Location Map */}
					<div className='contact-us__form'>
						<h2 className='contact-us__title'>Our Office Location</h2>
						<div
							className='map-container'
							style={{
								height: '400px',
								borderRadius: '8px',
								overflow: 'hidden',
								border: '1px solid #e1e5e9',
							}}>
							<iframe
								src='https://www.google.com/maps?q=UG+49,+Sector+39,+Charmwood+Plaza,+Eros+Garden,+Faridabad,+Haryana+121009&output=embed'
								width='100%'
								height='100%'
								style={{ border: 0 }}
								allowFullScreen=''
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								title='Our Office Location - UG-49 Charmwood plaza, Faridabad'></iframe>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default ContactUs;
