import { useState } from "react";
import Form from "antd/es/form";
import dayjs from "dayjs";
import type { DataType, FormValues } from "../types/entry";

export const useModal = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [editingRecord, setEditingRecord] = useState<DataType | null>(null);
	const [form] = Form.useForm();

	const openAddModal = () => {
		setEditingRecord(null);
		form.resetFields();
		setIsModalVisible(true);
	};

	const openEditModal = (record: DataType) => {
		setEditingRecord(record);
		form.setFieldsValue({
			name: record.name,
			date: dayjs(record.date),
			value: record.value
		});
		setIsModalVisible(true);
	};

	const closeModal = () => {
		setIsModalVisible(false);
		form.resetFields();
	};

	const handleModalOk = async (
		onAdd: (values: FormValues) => void,
		onUpdate: (record: DataType, values: FormValues) => void
	) => {
		try {
			const values = await form.validateFields();

			if (editingRecord) {
				onUpdate(editingRecord, values);
			} else {
				onAdd(values);
			}

			closeModal();
		} catch (error) {
			console.error("Validation failed:", error);
		}
	};

	return {
		isModalVisible,
		editingRecord,
		form,
		openAddModal,
		openEditModal,
		closeModal,
		handleModalOk
	};
};