import { send, init } from "emailjs-com";

const keys = {
	USER_ID: `user_HMLkCSe9Eegtrk8Db2u7n`, //userID
	TEMPLATE_ID: `template_mi3p8zi`, //templateID
	SERVICE_ID: `service_64wmtwg`, //serviceID
};

type contentType = {
	from_name: string;
	from_email: string;
	message: string;
};

const sendEmail = (content: contentType) => {
	init(keys.USER_ID);
	console.log("This ran from emailkeys");
	const toSend = {
		from_name: content.from_name,
		from_email: content.from_email,
		message: content.message,
	};
	send(keys.SERVICE_ID, keys.TEMPLATE_ID, toSend)
		.then((res) => {
			alert("thanks");
			console.log(res);
		})
		.catch((err) => {
			console.log("err");
			console.log(err);
		});
};

export default { sendEmail };
