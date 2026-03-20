import EditOutlined from "@ant-design/icons/es/icons/EditOutlined";
import Button from "antd/es/button/Button";
import Space from "antd/es/space";
import DeleteButton from "./DeleteButton";
import type { DataType } from "../../../types/entry";

interface ActionButtonsProps {
	record: DataType;
	onEdit: (record: DataType) => void;
	onDelete: (key: string) => void;
}

const ActionButtons = ({ record, onEdit, onDelete }: ActionButtonsProps) => {
	return (
		<Space size="middle">
			<Button
				type="primary"
				icon={<EditOutlined />}
				size="small"
				onClick={() => onEdit(record)}
			/>
			<DeleteButton
				onDelete={onDelete}
				recordKey={record.key}
			/>
		</Space>
	);
};

export default ActionButtons;