import { Flex } from '../Wrapper/Flex';
import { Input, InputIcon, Label } from './Forms';

const LogInput = (
	{ value, label, name, icon, placeholder, error, changed },
	props
) => {
	return (
		<Flex column width="80%" margin="20px 0">
			<Label htmlFor={name}>{label}</Label>
			<InputIcon width="100%" data-error={error}>
				<Input
					{...props}
					type={name}
					placeholder={placeholder}
					id={name}
					name={name}
					onChange={changed}
				/>
				{icon}
			</InputIcon>
		</Flex>
	);
};

export default LogInput;
