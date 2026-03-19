import { useEffect, useState } from "react";
import Input from "antd/es/input";
import useDebounceValue from "../../hooks/useDebounceValue";

const SearchField = ({
    value,
    onChange,
    delay,
}: {
    value: string;
    onChange: (value: string) => void;
    delay?: number;
}) => {
    const [localValue, setLocalValue] = useState(value);
    const debouncedValue = useDebounceValue(localValue, delay);

    useEffect(() => {
        onChange(debouncedValue);
    }, [debouncedValue]);

    return (
        <Input.Search
            placeholder={"Поиск..."}
            defaultValue={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
            style={{ width: 300 }}
            allowClear
        />
    );
};

export default SearchField;
