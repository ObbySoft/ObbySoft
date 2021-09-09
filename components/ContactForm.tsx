import React, { SyntheticEvent, useState } from "react";
import EmailService from "../lib/email-service";

const ContactForm = () => {
	const [contactInfo, setContactInfo] = useState({ from_name: "", from_email: "", message: "" });

	const sendMail = (e: SyntheticEvent) => {
		e.preventDefault();
		EmailService.sendEmail(contactInfo);
	};

	return (
		<>
			<h3 className='text-center m-10'>Contact Us</h3>
			<form className='mx-auto m-10 p-4 bg-gray-300 rounded-md flex flex-col w-2/3' onSubmit={(e) => sendMail(e)}>
				<input type='hidden' name='from_name' />

				<label>Name</label>
				<input
					type='text'
					name='from_name'
					value={contactInfo.from_name}
					onChange={(e) => setContactInfo({ ...contactInfo, from_name: e.target.value })}
				/>

				<label>Email</label>
				<input
					type='email'
					name='user_email'
					value={contactInfo.from_email}
					onChange={(e) => setContactInfo({ ...contactInfo, from_email: e.target.value })}
				/>

				<label>Message</label>
				<textarea
					name='message'
					value={contactInfo.message}
					onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })}
				/>

				<button type='submit'> send</button>
			</form>
		</>
	);
};
export default ContactForm;
