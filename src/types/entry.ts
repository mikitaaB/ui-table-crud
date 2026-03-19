export interface DataType {
	key: string;
	name: string;
	date: string;
	value: number;
}

export interface FormValues {
	name: string;
	date: { format: (format: string) => string };
	value: number;
}
