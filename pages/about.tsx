import Meta from "../components/Meta";
import ContactForm from "../components/ContactForm";
const About = () => {
	return (
		<>
			<Meta title='About' name='About Page' />

			<div className='mx-auto mt-10 text-center rounded-md shadow-md bg-gray-100 w-3/5 p-10'>
				This is the about page
			</div>
			<ContactForm />
		</>
	);
};

export default About;
