import DatePicker from "antd/es/date-picker";
import Form from "antd/es/form";
import Input from "antd/es/input/Input";
import InputNumber from "antd/es/input-number";
import Modal from "antd/es/modal/Modal";
import type { FormInstance } from "antd/es/form";

interface EntryModalProps {
	isVisible: boolean;
	isEditRecord: boolean;
	form: FormInstance;
	onOk: () => void;
	onCancel: () => void;
}

const EntryModal = ({
	isVisible,
	isEditRecord,
	form,
	onOk,
	onCancel
}: EntryModalProps) => {
	return (
		<Modal
			title={isEditRecord ? "Редактировать запись" : "Добавить запись"}
			open={isVisible}
			onOk={onOk}
			onCancel={onCancel}
			okText="Сохранить"
			cancelText="Отмена"
		>
			<Form
				form={form}
				layout="vertical"
				name="recordForm"
			>
				<Form.Item
					name="name"
					label="Имя"
					rules={[
						{ required: true, message: "Пожалуйста, введите имя!" },
						{ min: 2, message: "Имя должно содержать не менее 2 символов!" }
					]}
				>
					<Input placeholder="Введите имя" />
				</Form.Item>

				<Form.Item
					name="date"
					label="Дата"
					rules={[
						{ required: true, message: "Пожалуйста, выберите дату!" }
					]}
				>
					<DatePicker
						style={{ width: "100%" }}
						placeholder="Выберите дату"
						format="YYYY-MM-DD"
					/>
				</Form.Item>

				<Form.Item
					name="value"
					label="Числовое значение"
					rules={[
						{ required: true, message: "Пожалуйста, введите числовое значение!" },
						{ type: "number", min: 0, message: "Значение должно быть положительным!" }
					]}
				>
					<InputNumber
						style={{ width: "100%" }}
						placeholder="Введите числовое значение"
						min={0}
					/>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default EntryModal;