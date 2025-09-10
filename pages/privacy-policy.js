import BreadcrumbBanner from '@/components/BreadCrumbBanner';
import Navbar from '@/components/Navbar';
import PartnerBanks from '@/components/PartnerBanks';
import WhyChooseSection from '@/components/WhyChoose';
import ApplyVisa from '@/components/aboutus/ApplyVisa';
import Footer from '@/components/ui/Footer';
import React from 'react';

const privacy = () => {
	return (
		<>
			<Navbar />
			<BreadcrumbBanner title='Privacy Policy' />
			<div className='container p-5'>
				<h1>Privacy Policy</h1>
				<p class='p1'>
					<strong>Effective Date:</strong>
				</p>
				<p class='p2'>10/09/2025</p>
				<p class='p1'>
					<strong>Company Name:</strong>
				</p>
				<p class='p2'>Vidhyaa Route</p>
				<p class='p1'>
					<strong>1. Introduction</strong>
				</p>
				<p class='p2'>
					At Vidhyaa Route, we value the privacy and trust of our students and
					clients. This Privacy
				</p>
				<p class='p2'>
					Policy explains how we collect, use, and protect your personal
					information when you
				</p>
				<p class='p2'>
					engage with our overseas education consultancy services.
				</p>
				<p class='p1'>
					<strong>2. Information We Collect</strong>
				</p>
				<p class='p2'>
					- Personal details: Name, date of birth, contact information.
				</p>
				<p class='p2'>
					- Academic details: Transcripts, certificates, test scores.
				</p>
				<p class='p2'>
					- Identification documents: Passport, ID proofs, photographs.
				</p>
				<p class='p2'>
					- Financial details: Bank statements, loan documents (only if required
					for visa/loan
				</p>
				<p class='p2'>processing).</p>
				<p class='p2'>- Communication history with our consultants.</p>
				<p class='p1'>
					<strong>3. How We Use Your Information</strong>
				</p>
				<p class='p2'>
					Your information is used only for purposes related to our services,
					including:
				</p>
				<p class='p2'>- University admission counseling and applications.</p>
				<p class='p2'>- Visa processing and immigration guidance.</p>
				<p class='p2'>
					- Education loan guidance and processing with partner institutions.
				</p>
				<p class='p2'>- Pre-departure and post-admission support.</p>
				<p class='p2'>
					- Communication of updates, opportunities, and service-related
					notices.
				</p>
				<p class='p1'>
					<strong>4. Information Sharing</strong>
				</p>
				<p class='p2'>We do not sell or rent your information.</p>
				<p class='p2'>We may share data only with:</p>
				<p class='p2'>
					- Universities and colleges (for admission applications).
				</p>
				<p class='p2'>
					- Visa authorities and embassies (for processing applications).
				</p>
				<p class='p2'>
					- Banks and financial institutions (for education loan guidance).
				</p>
				<p class='p2'>
					- Service partners (e.g., insurance or travel partners) with your
					consent.
				</p>
				<p class='p2'>
					<span class='s1'>
						<strong>5. Data Protection &amp; Security</strong>
					</span>
					- All personal information is stored securely and accessed only by
					authorized personnel.
				</p>
				<p class='p2'>
					- We use appropriate physical, electronic, and managerial measures to
					safeguard data.
				</p>
				<p class='p2'>
					- While we strive for full protection, no system is 100% secure, and
					we cannot guarantee
				</p>
				<p class='p2'>absolute security.</p>
				<p class='p1'>
					<strong>6. Your Rights</strong>
				</p>
				<p class='p2'>As a student/client, you have the right to:</p>
				<p class='p2'>- Access the personal data we hold about you.</p>
				<p class='p2'>- Request corrections or updates to your information.</p>
				<p class='p2'>
					- Withdraw consent for use of personal data (subject to service
					limitations).
				</p>
				<p class='p2'>
					- Request deletion of data (where legally and contractually possible).
				</p>
				<p class='p1'>
					<strong>7. Cookies &amp; Online Data</strong>
				</p>
				<p class='p2'>
					- Our website may use cookies to improve user experience, analyze
					traffic, and
				</p>
				<p class='p2'>personalize content.</p>
				<p class='p2'>
					- You can disable cookies in your browser, though some features may
					not work properly.
				</p>
				<p class='p1'>
					<strong>8. Third-Party Links</strong>
				</p>
				<p class='p2'>
					Our website or communications may include links to third-party sites.
					Vidhyaa Route is not
				</p>
				<p class='p2'>responsible for their privacy practices or content.</p>
				<p class='p1'>
					<strong>9. Policy Updates</strong>
				</p>
				<p class='p2'>
					We may update this Privacy Policy from time to time to reflect changes
					in laws, services,
				</p>
				<p class='p2'>
					or practices. The revised policy will be posted on our website with an
					updated effective
				</p>
				<p class='p2'>date.</p>
				<p class='p1'>
					<strong>10. Contact Us</strong>
				</p>
				<p class='p2'>
					If you have any questions, concerns, or requests related to privacy or
					your data, please
				</p>
				<p class='p2'>contact us at:</p>
				<p class='p2'>
					<span class='s2'>■</span> Email:&nbsp;info@vidhyaroute.com
				</p>
			</div>

			<Footer />
		</>
	);
};

export default privacy;
