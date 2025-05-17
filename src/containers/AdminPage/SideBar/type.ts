import { JSX } from "react";

export interface MenuItemData {
    id: string;
    name: string;
    code?: string;
    iconCls?: string;
    leaf?: boolean;
    selectable?: boolean;
    typeMenu?: number;
    component?: string;
    parentCode?: string;
    url?: string;
    children?: MenuItemData[];
}
export interface MenuItemProps {
    collapsed: boolean;
    dataMenu: MenuItemData[];
    pathNameLocation: string;
}
export interface RenderedMenuItem {
    key: string;
    icon?: JSX.Element;
    label?: JSX.Element;
    children?: RenderedMenuItem[];
}
export const dataMenu = [
    {
        "id": "7f000001-4586-15ec-8951-86e4147f1215",
        "name": "Quản lý vụ án",
        "code": "018043",
        "iconCls": "fa-solid fa-square-list",
        "leaf": false,
        "selectable": false,
        "typeMenu": 1,
        "children": [
            {
                "id": "7f000001-4586-15ec-8951-86e4147f1216",
                "name": "Vụ án khởi tố",
                "code": "018043004",
                "component": "DSVuAnView",
                "parentCode": "018043",
                "leaf": true,
                "selectable": true,
                "typeMenu": 1,
                "url": "ds_vuan"
            },
            {
                "id": "7f000001-4586-15ec-8951-86e4147f1234",
                "name": "Vụ án chuyển"
            },
            {
                "id": "7f000001-4586-15ec-8951-86e4147f1235",
                "name": "Vụ án ủy thác"
            },
            {
                "id": "5fa95da9-4fb2-4d9f-91f4-3ece0fabdd37",
                "name": "TĐB và rút gọn"
            },
            {
                "id": "7f000001-4586-15ec-8951-86e4147f1233",
                "name": "Kho vật chứng"
            }
        ]
    }, {
        "id": "7f000001-4586-15ec-8951-86e4147f1215ư",
        "name": "Quản lý khóa học",
        "code": "018043",
        "iconCls": "fa-solid fa-square-list",
        "leaf": false,
        "selectable": false,
        "typeMenu": 1,
        "children": [
            {
                "id": "7f000001-4586-15ec-8951-s86e4147f1216",
                "name": "Vụ án khởi tố",
                "code": "018043004",
                "component": "DSVuAnView",
                "parentCode": "018043",
                "leaf": true,
                "selectable": true,
                "typeMenu": 1,
                "url": "ds_vuan",
                "children": [
                    {
                        "id": "7f000001-4586-15ec-8951-s86e4147f1216",
                        "name": "Vụ án khởi tố",
                        "code": "018043004",
                        "component": "DSVuAnView",
                        "parentCode": "018043",
                        "leaf": true,
                        "selectable": true,
                        "typeMenu": 1,
                        "url": "ds_vuan"
                    },
                    {
                        "id": "7f000001-4586-15ec-89ưư51-86e4147f1234",
                        "name": "Vụ án chuyển"
                    },
                    {
                        "id": "7f000001-4586-15ec-8951ư-86e4147f1235",
                        "name": "Vụ án ủy thác"
                    }
                ]
            },
            {
                "id": "7f000001-4586-15ec-89ưư51-8a6e4147f1234",
                "name": "Vụ án chuyển"
            },
            {
                "id": "7f000001-4586-15ec-8951a-86e4147f1235",
                "name": "Vụ án ủy thác"
            }
        ]
    },
    {
        "id": "7f000001-4586-15ec-8951-86e4147f1215ư3434",
        "name": "Quản lý khóa họ 34333c",
        "code": "018043",
        "iconCls": "fa-solid fa-square-list",
        "leaf": false,
        "selectable": false,
        "typeMenu": 1,
        "children": [
            {
                "id": "7f000001-4586-15ec-8951ư-86e4147f12s35",
                "name": "Vụ án ủy thác"
            }
        ]
    }
]