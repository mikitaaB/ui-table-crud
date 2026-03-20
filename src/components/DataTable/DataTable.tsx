import { lazy, Suspense } from "react";
import Table from "antd/es/table/Table";
import { useTableData } from "../../hooks/useTableData";
import { useModal } from "../../hooks/useModal";
import { createTableColumns } from "./tableColumns";
import TableControls from "./TableControls";
import styles from "./DataTable.module.css";

const EntryModal = lazy(() => import("./EntryModal"));

const DataTable = () => {
    const {
        filteredData,
        searchText,
        addRecord,
        updateRecord,
        deleteRecord,
        handleSearch
    } = useTableData();

    const {
        isModalVisible,
        editingRecord,
        form,
        openAddModal,
        openEditModal,
        closeModal,
        handleModalOk
    } = useModal();

    const columns = createTableColumns({
        onEdit: openEditModal,
        onDelete: deleteRecord
    });

    const handleModalSubmit = () => {
        handleModalOk(addRecord, updateRecord);
    };

    return (
        <div className={styles["tableBox"]}>
            <div className={styles["tableControls"]}>
                <TableControls
                    onAdd={openAddModal}
                    onSearch={handleSearch}
                    searchValue={searchText}
                />
            </div>

            <Table
                columns={columns}
                dataSource={filteredData}
                size="large"
                pagination={{
                    pageSize: 10,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    showTotal: (total, range) => `${range[0]}-${range[1]} из ${total} записей`
                }}
            />

            <Suspense fallback={null}>
                {isModalVisible && (
                    <EntryModal
                        isVisible={isModalVisible}
                        editingRecord={editingRecord}
                        form={form}
                        onOk={handleModalSubmit}
                        onCancel={closeModal}
                    />
                )}
            </Suspense>
        </div>
    );
};

export default DataTable;