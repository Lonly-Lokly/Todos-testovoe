import React, { useState } from 'react';

function useInputValue(initialValue: string = '') {
	const [value, setValue] = useState<string>(initialValue);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const reset = () => setValue('');

	return {
		value,
		onChange: handleChange, // Используйте onChange
		reset,
	};
}

export default useInputValue;
