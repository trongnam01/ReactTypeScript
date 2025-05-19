import TableCommon, { Column } from "@/components/TableCommon";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getRequest, notify } from "@/utils/common";
import type { DataRequest } from './type';
import { TableColumn } from "./constants";
import { Button, Tooltip } from "antd";

function Products() {
    const [dataDisplay, setDataDisplay] = useState<any[]>([]);
    const parseData = (item: any, column: Column, index: number) => {
        if (column.field === "STT") {
            return <span key={`${item.id}`}>{index + 1}</span>;
        }
        return <span>{item[column.field]}</span>;
    };


    useEffect(() => {
        mutationSearch({
            userName: 'namtt'
        })
    }, []);

    const { mutate: mutationSearch } = useMutation({
        mutationFn: (dataRequest: DataRequest): Promise<any> =>
            getRequest('products', { params: dataRequest }),
        onSuccess: (res) => {
            console.log('res', res);

            setDataDisplay(res?.products || []);
        },
        onError: (err) => {
            console.log(err, 'error');

            notify('search error', 'warning');
        },
    });

    const handleSearch = (dataRequest: DataRequest) => {
        mutationSearch(dataRequest);
    };

    return (
        <div className="p-4 h-full">
            <TableCommon
                data={dataDisplay}
                columns={TableColumn}
                primaryKey="id"
                parseFunction={parseData}
                iterableProps={
                    {
                        showHeader: true,
                        title: () => 'Here is title',
                        scroll: {
                            x: 'max-content', y: '500px'
                        },
                        sticky: { offsetHeader: 0 }
                    }
                }
            />
        </div>

    )
}

export default Products;