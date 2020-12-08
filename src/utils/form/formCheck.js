export const isEmail = (email) => {
	const regexMail = /[a-zA-Z0-9\-_.]+@[a-zA-Z0-9\-_]+\.[a-z]+/;
	return regexMail.test(email.trim());
};

export const isNotEmpty = (value) => {
	return value.trim() === '';
};
