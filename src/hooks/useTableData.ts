import { useState } from "react";
import message from "antd/es/message";
import { INIT_DATA } from "../constants/tableData";
import type { DataType, FormValues } from "../types/entry";

export const useTableData = () => {
	const [data, setData] = useState<DataType[]>(INIT_DATA || []);
	const [searchText, setSearchText] = useState("");

	const filteredData = data.filter(item =>
		Object.values(item).some(value =>
			value.toString().toLowerCase().includes(searchText.toLowerCase())
		)
	);

	const addRecord = (values: FormValues) => {
		const newRecord: DataType = {
			key: Date.now().toString(),
			name: values.name,
			date: values.date.format("YYYY-MM-DD"),
			value: values.value
		};
		setData(prev => [...prev, newRecord]);
		message.success("Запись добавлена");
	};

	const updateRecord = (modalData: DataType, values: FormValues) => {
		const updatedRecord: DataType = {
			key: modalData.key,
			name: values.name,
			date: values.date.format("YYYY-MM-DD"),
			value: values.value
		};
		setData(prev => prev.map(item =>
			item.key === modalData.key ? updatedRecord : item
		));
		message.success("Запись обновлена");
	};

	const deleteRecord = (key: string) => {
		setData(prev => prev.filter(item => item.key !== key));
		message.success("Запись удалена");
	};

	const handleSearch = (value: string) => {
		setSearchText(value);
	};

	return {
		data,
		filteredData,
		searchText,
		addRecord,
		updateRecord,
		deleteRecord,
		handleSearch
	};
};