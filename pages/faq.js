// pages/faq.js
import Head from 'next/head';
import { ChevronDown, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';
import BreadcrumbBanner from '@/components/BreadCrumbBanner';

export default function FAQ() {
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: 'Which countries does Vidhyaa Route help students apply to?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'We assist students with admissions in top study destinations including the UK, USA, Canada, Ireland, France, Australia, Germany, and more.',
				},
			},
			{
				'@type': 'Question',
				name: 'Do you help with course and university selection?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Yes! Our expert counselors guide you in selecting the best-fit courses and universities based on your academic profile, career goals, and budget.',
				},
			},
			{
				'@type': 'Question',
				name: 'Can you help me prepare my SOP and other documents?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Absolutely. We provide end-to-end assistance with Statement of Purpose (SOP), Letters of Recommendation (LORs), resume/CV, and application forms to ensure your profile stands out.',
				},
			},
			{
				'@type': 'Question',
				name: 'What is the timeline for the admission process?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'The timeline varies by country and intake, but ideally, the process should begin 8–12 months before your intended start date. We help you plan accordingly.',
				},
			},
			{
				'@type': 'Question',
				name: 'Does Vidhyaa Route help in getting education loans?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Yes, we offer dedicated education loan assistance through partnerships with leading banks, NBFCs, and international lenders.',
				},
			},
			{
				'@type': 'Question',
				name: 'What types of loans do you assist with — secured or unsecured?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'We assist with both secured (with collateral) and unsecured (without collateral) education loans, based on your profile and eligibility.',
				},
			},
			{
				'@type': 'Question',
				name: 'What documents are needed to apply for an education loan?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Common documents include Admission letter (I-20/CAS/LOA), Academic records, KYC documents, Co-applicant financial documents, Collateral papers (if applicable).',
				},
			},
			{
				'@type': 'Question',
				name: 'Can I get a loan before receiving my visa?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Yes. Many students use their loan sanction letter as proof of funds during the visa application process. We help ensure your loan is processed in time.',
				},
			},
			{
				'@type': 'Question',
				name: 'Do you assist with student visa applications?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Yes, our visa experts help with the entire visa process — from documentation and form filling to interview preparation and appointment booking.',
				},
			},
			{
				'@type': 'Question',
				name: 'What are the chances of getting a visa with Vidhyaa Route’s help?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'While the final decision lies with the embassy, our professionally prepared applications and mock interview training significantly improve your chances of success.',
				},
			},
			{
				'@type': 'Question',
				name: 'Which documents are required for student visa applications?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Documents usually include Passport, Admission letter (I-20, CAS, LOA), Financial proof (loan sanction, bank statements), Academic documents, Visa application form and photos.',
				},
			},
			{
				'@type': 'Question',
				name: 'Do I need to attend a visa interview?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'This depends on the country: Yes for USA (sometimes Canada), No/Mostly Not for UK, Ireland, France, Australia.',
				},
			},
		],
	};

	return (
		<>
			<Head>
				<title>FAQs – Vidhyaa Route</title>
				<meta
					name='description'
					content='Frequently Asked Questions about studying abroad with Vidhyaa Route. Learn about admissions, education loans, and student visas.'
				/>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
				/>
			</Head>
			<Navbar />
			<BreadcrumbBanner title='Frequently Asked Questions' />

			<div className='container my-5'>
				<h2 className='text-center mb-4'>
					❓ Frequently Asked Questions (FAQs)
				</h2>
				<p className='text-center mb-5'>
					Everything You Need to Know About Studying Abroad with Vidhyaa Route
				</p>

				<div
					className='accordion'
					id='faqAccordion'>
					{/* Q1 */}
					<div className='accordion-item'>
						<h2
							className='accordion-header'
							id='heading1'>
							<button
								className='accordion-button'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapse1'
								aria-expanded='true'
								aria-controls='collapse1'>
								Which countries does Vidhyaa Route help students apply to?
							</button>
						</h2>
						<div
							id='collapse1'
							className='accordion-collapse collapse show'
							aria-labelledby='heading1'
							data-bs-parent='#faqAccordion'>
							<div className='accordion-body'>
								We assist students with admissions in top study destinations
								including the UK, USA, Canada, Ireland, France, Australia,
								Germany, and more.
							</div>
						</div>
					</div>

					{/* Q2 */}
					<div className='accordion-item'>
						<h2
							className='accordion-header'
							id='heading2'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapse2'
								aria-expanded='false'
								aria-controls='collapse2'>
								Do you help with course and university selection?
							</button>
						</h2>
						<div
							id='collapse2'
							className='accordion-collapse collapse'
							aria-labelledby='heading2'
							data-bs-parent='#faqAccordion'>
							<div className='accordion-body'>
								Yes! Our expert counselors guide you in selecting the best-fit
								courses and universities based on your academic profile, career
								goals, and budget.
							</div>
						</div>
					</div>

					{/* Q3 */}
					<div className='accordion-item'>
						<h2
							className='accordion-header'
							id='heading3'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapse3'
								aria-expanded='false'
								aria-controls='collapse3'>
								Can you help me prepare my SOP and other documents?
							</button>
						</h2>
						<div
							id='collapse3'
							className='accordion-collapse collapse'
							aria-labelledby='heading3'
							data-bs-parent='#faqAccordion'>
							<div className='accordion-body'>
								Absolutely. We provide end-to-end assistance with Statement of
								Purpose (SOP), Letters of Recommendation (LORs), resume/CV, and
								application forms to ensure your profile stands out.
							</div>
						</div>
					</div>

					{/* Q4 */}
					<div className='accordion-item'>
						<h2
							className='accordion-header'
							id='heading4'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapse4'
								aria-expanded='false'
								aria-controls='collapse4'>
								What is the timeline for the admission process?
							</button>
						</h2>
						<div
							id='collapse4'
							className='accordion-collapse collapse'
							aria-labelledby='heading4'
							data-bs-parent='#faqAccordion'>
							<div className='accordion-body'>
								The timeline varies by country and intake, but ideally, the
								process should begin 8–12 months before your intended start
								date. We help you plan accordingly.
							</div>
						</div>
					</div>

					{/* Q5 */}
					<div className='accordion-item'>
						<h2
							className='accordion-header'
							id='heading5'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapse5'
								aria-expanded='false'
								aria-controls='collapse5'>
								Does Vidhyaa Route help in getting education loans?
							</button>
						</h2>
						<div
							id='collapse5'
							className='accordion-collapse collapse'
							aria-labelledby='heading5'
							data-bs-parent='#faqAccordion'>
							<div className='accordion-body'>
								Yes, we offer dedicated education loan assistance through
								partnerships with leading banks, NBFCs, and international
								lenders.
							</div>
						</div>
					</div>

					{/* Q6 */}
					<div className='accordion-item'>
						<h2
							className='accordion-header'
							id='heading6'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapse6'
								aria-expanded='false'
								aria-controls='collapse6'>
								What types of loans do you assist with — secured or unsecured?
							</button>
						</h2>
						<div
							id='collapse6'
							className='accordion-collapse collapse'
							aria-labelledby='heading6'
							data-bs-parent='#faqAccordion'>
							<div className='accordion-body'>
								We assist with both secured (with collateral) and unsecured
								(without collateral) education loans, based on your profile and
								eligibility.
							</div>
						</div>
					</div>

					{/* Q7 */}
					<div className='accordion-item'>
						<h2
							className='accordion-header'
							id='heading7'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapse7'
								aria-expanded='false'
								aria-controls='collapse7'>
								What documents are needed to apply for an education loan?
							</button>
						</h2>
						<div
							id='collapse7'
							className='accordion-collapse collapse'
							aria-labelledby='heading7'
							data-bs-parent='#faqAccordion'>
							<div className='accordion-body'>
								Common documents include:
								<ul>
									<li>Admission letter (I-20/CAS/LOA)</li>
									<li>Academic records</li>
									<li>KYC documents</li>
									<li>Co-applicant financial documents</li>
									<li>Collateral papers (if applicable)</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Q8 */}
					<div className='accordion-item'>
						<h2
							className='accordion-header'
							id='heading8'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapse8'
								aria-expanded='false'
								aria-controls='collapse8'>
								Can I get a loan before receiving my visa?
							</button>
						</h2>
						<div
							id='collapse8'
							className='accordion-collapse collapse'
							aria-labelledby='heading8'
							data-bs-parent='#faqAccordion'>
							<div className='accordion-body'>
								Yes. Many students use their loan sanction letter as proof of
								funds during the visa application process. We help ensure your
								loan is processed in time.
							</div>
						</div>
					</div>

					{/* Q9 */}
					<div className='accordion-item'>
						<h2
							className='accordion-header'
							id='heading9'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapse9'
								aria-expanded='false'
								aria-controls='collapse9'>
								Do you assist with student visa applications?
							</button>
						</h2>
						<div
							id='collapse9'
							className='accordion-collapse collapse'
							aria-labelledby='heading9'
							data-bs-parent='#faqAccordion'>
							<div className='accordion-body'>
								Yes, our visa experts help with the entire visa process — from
								documentation and form filling to interview preparation and
								appointment booking.
							</div>
						</div>
					</div>

					{/* Q10 */}
					<div className='accordion-item'>
						<h2
							className='accordion-header'
							id='heading10'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapse10'
								aria-expanded='false'
								aria-controls='collapse10'>
								What are the chances of getting a visa with Vidhyaa Route’s
								help?
							</button>
						</h2>
						<div
							id='collapse10'
							className='accordion-collapse collapse'
							aria-labelledby='heading10'
							data-bs-parent='#faqAccordion'>
							<div className='accordion-body'>
								While the final decision lies with the embassy, our
								professionally prepared applications and mock interview training
								significantly improve your chances of success.
							</div>
						</div>
					</div>

					{/* Q11 */}
					<div className='accordion-item'>
						<h2
							className='accordion-header'
							id='heading11'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapse11'
								aria-expanded='false'
								aria-controls='collapse11'>
								Which documents are required for student visa applications?
							</button>
						</h2>
						<div
							id='collapse11'
							className='accordion-collapse collapse'
							aria-labelledby='heading11'
							data-bs-parent='#faqAccordion'>
							<div className='accordion-body'>
								Documents usually include:
								<ul>
									<li>Passport</li>
									<li>Admission letter (I-20, CAS, LOA)</li>
									<li>Financial proof (loan sanction, bank statements)</li>
									<li>Academic documents</li>
									<li>Visa application form and photos</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Q12 */}
					<div className='accordion-item'>
						<h2
							className='accordion-header'
							id='heading12'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapse12'
								aria-expanded='false'
								aria-controls='collapse12'>
								Do I need to attend a visa interview?
							</button>
						</h2>
						<div
							id='collapse12'
							className='accordion-collapse collapse'
							aria-labelledby='heading12'
							data-bs-parent='#faqAccordion'>
							<div className='accordion-body'>
								This depends on the country:
								<ul>
									<li>Yes: USA, sometimes Canada</li>
									<li>No/Mostly Not: UK, Ireland, France, Australia</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className='bg-primary text-white p-4 rounded mb-4'>
					<div className='row align-items-center'>
						<div className='col-lg-8'>
							<h3 className='mb-2'>📞 Still Have Questions?</h3>
							<p className='mb-0'>
								Reach out to our expert advisors for a free one-on-one
								consultation.
							</p>
						</div>
						<div className='col-lg-4 text-lg-end'>
							<a href='tel:+91 8920949831'>
								<button className='btn btn-light btn-lg'>
									<GraduationCap
										className='me-2'
										size={20}
									/>
									Book Consultation
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
