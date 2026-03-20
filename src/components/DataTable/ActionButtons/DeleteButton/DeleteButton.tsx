import DeleteOutlined from "@ant-design/icons/es/icons/DeleteOutlined";
import Button from "antd/es/button/Button";
import Popconfirm from "antd/es/popconfirm";

interface DeleteButtonProps {
    onDelete: (key: string) => void;
    recordKey: string;
}

const DeleteButton = ({ onDelete, recordKey }: DeleteButtonProps) => {
    return (
        <Popconfirm
            title="Удалить запись?"
            description="Вы уверены, что хотите удалить эту запись?"
            onConfirm={() => onDelete(recordKey)}
            okText="Да"
            cancelText="Нет"
        >
            <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                size="small"
            />
        </Popconfirm>
    );
};

export default DeleteButton;