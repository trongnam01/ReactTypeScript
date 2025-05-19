import { Column } from "@/components/TableCommon";

export const TableColumn: Column[] = [
    {
        name: 'STT',
        field: 'STT',
        align: 'center',
        width: 50,
    },
    {
        name: 'Tên',
        field: 'description',
        type: '',
        isSort: true,
        ellipsis: true,
    },
    {
        name: 'Số điện thoại',
        field: 'numberPhone',
        type: '',
        isSort: false,
        width: 145
    },
    {
        name: 'Email',
        field: 'email',
        type: '',
        isSort: false,
    },
    {
        name: 'Địa chỉ',
        field: 'address',
        type: '',
        isSort: false,
    },
    {
        name: 'Ngày sinh',
        field: 'birthDay',
        type: '',
        isSort: false,
        width: 100
    },
];
