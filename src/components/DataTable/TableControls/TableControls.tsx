import Space from "antd/es/space";
import Button from "antd/es/button/Button";
import PlusOutlined from "@ant-design/icons/es/icons/PlusOutlined";
import SearchField from "../../SearchField";

interface TableControlsProps {
	onAdd: () => void;
	onSearch: (value: string) => void;
	searchValue: string;
}

const TableControls = ({ onAdd, onSearch, searchValue }: TableControlsProps) => {
	return (
		<Space>
			<Button
				type="primary"
				icon={<PlusOutlined />}
				onClick={onAdd}
			>
				{"Добавить"}
			</Button>
			<SearchField
				value={searchValue}
				onChange={onSearch}
			/>
		</Space>
	);
};

export default TableControls;