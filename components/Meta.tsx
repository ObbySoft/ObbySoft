import Head from "next/head";

type propType = {
	title: string;
	name: string;
	content?: string;
	tags?: string[];
};

const Meta = ({ title, name, content, tags }: propType) => (
	<Head>
		<title>{title + " " + "| ObbySoft"}</title>
		<meta name={name} content={content} />
		<link rel='icon' href='/favicon.ico' />
	</Head>
);
export default Meta;
