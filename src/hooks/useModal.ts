import { useMemo, useState } from "react";
import Form from "antd/es/form";
import dayjs from "dayjs";
import type { DataType, FormValues } from "../types/entry";

export const useModal = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [modalData, setModalData] = useState<DataType | null>(null);
	const [form] = Form.useForm();

	const openAddModal = () => {
		setModalData(null);
		form.resetFields();
		setIsModalVisible(true);
	};

	const openEditModal = (record: DataType) => {
		setModalData(record);
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
		onUpdate: (modalData: DataType, values: FormValues) => void
	) => {
		try {
			const values = await form.validateFields();

			modalData === null
				? onAdd(values)
				: onUpdate(modalData, values);

			closeModal();
		} catch (error) {
			console.error("Validation failed:", error);
		}
	};

	const isEditRecord = useMemo(() => modalData !== null, [modalData]);

	return {
		isModalVisible,
		isEditRecord,
		form,
		openAddModal,
		openEditModal,
		closeModal,
		handleModalOk
	};
};