/* eslint-disable react/forbid-prop-types */
/* eslint-disable spaced-comment */

import type { TableProps } from 'antd';
import { Table } from 'antd';
import type { ColumnGroupType, ColumnType } from 'antd/es/table';
import type { SELECTION_COLUMN } from 'antd/es/table/hooks/useSelection';
import type { EXPAND_COLUMN } from 'rc-table';
import React from 'react';

import typesColumn from './constants';
// import { formatIsoDateToNumber } from '../../utils/common';

export interface Column {
  name: React.ReactNode;
  field: string;
  width?: number;
  type?: string;
  isSort?: boolean;
  align?: 'left' | 'right' | 'center';
  ellipsis?: boolean;
  fixed?: 'left' | 'right';
}

export interface ColumnGroup extends Omit<Column, 'field'> {
  children: Columns[];
}

export type Columns = Column | ColumnGroup;

interface Props {
  columns: Array<Columns | typeof SELECTION_COLUMN | typeof EXPAND_COLUMN>;
  data: any[];
  primaryKey: string;
  parseFunction: (record: any, field: Column, recordIndex: number) => React.ReactNode;
  sortFunction?: (
    item1: any,
    item2: any,
    config: Column,
    defaultSort?: (item1: any, item2: any, config: Column) => 1 | -1 | 0,
  ) => void;
  actionsHeaderTable?: () => React.ReactNode;
  actionsFooterTable?: () => React.ReactNode;
  classNameTable?: string;
  isShowPaging?: boolean;
  onChangePage?: (page: number, pageSize: number) => void;
  onSort?: (sorter: any) => void;
  defaultPage?: number;
  currentPage?: number;
  totalDisplay?: number;
  totalCountData?: number;
  iterablePaging?: Object;
  isShowCheckbox?: boolean;
  checkBoxType?: 'checkbox' | 'radio';
  onSelect?: (selectedRowKeys: any[], selectedRows: any[], type?: String) => void;
  defaultSelected?: any[];
  iterableSelection?: Object;
  isRemoveSelected?: boolean;
  isCheckedAll?: boolean;
  checkItemHasSelect?: (item: any) => boolean;
  renderSubItem?: (record: any, index: number, indent: number, expanded: boolean) => React.ReactNode;
  iterableExpand?: Object;
  showHeader?: boolean;
  expandCondition?: (record: any) => boolean;
  scrollToProps?: Object;
  iterableProps?: Object;
  onChangeDefault?: any;
  selected?: any[];
  locale?: any;
  virtual?: boolean;
}

const TableCommon = (props: Props) => {
  const {
    columns, //type of array - required -- cấu hình của các cột
    data, //type of array - required -- data của bảng
    primaryKey, // key chính của data
    parseFunction, //type of function -- function để parse / tùy chỉnh hiển thị data
    sortFunction, // function custom sort
    actionsHeaderTable, // action ở phí dưới table
    actionsFooterTable, // action ở phí dưới table
    classNameTable, // class để style cho table
    isShowPaging, // check có hiển thị paging hay không
    onChangePage, // xử lý mỗi khi thay đổi page return về page được chọn\
    onSort, // xử lý khi thay đổi sort , dùng trong trường hợp call api
    defaultPage, // page default hiển thị
    currentPage, // page hiện tại
    totalDisplay, // tổng số bản ghi trên 1 trang
    totalCountData, // tổng tất cả bản ghi
    iterablePaging, // các config còn lại của paging ant design //  https://ant.design/components/table
    isShowCheckbox, //type og bool -- điều kiện hiển thị nút select
    checkBoxType, // loại select checkbox || radio
    onSelect, // gọi khi chọn bản ghi
    // defaultSelected,
    iterableSelection, // các config còn lại của selection ant design //  https://ant.design/components/table
    // isRemoveSelected, // nếu === true sẽ remove selected
    // isCheckedAll, // check có phải là chọn tất cả không  --- boolean
    checkItemHasSelect, //  check với mỗi item thì có được chọn hay không --- bool
    renderSubItem, // render sub table
    iterableExpand, // các config còn lại của paging trong antd
    expandCondition, // check điều kiện để expand
    iterableProps,
    onChangeDefault, //onChange mặc định của table antd
    // isSubItem, // check bảng có sub table hay không
    selected,
    locale, // The i18n text including filter, sort, empty text, etc
    virtual, // Check xem bảng có hiển thị virtual hay không
    scrollToProps, // scroll table
  } = props;

  // const [selected, setSelected] = useState<any>([]);

  // useEffect(() => {
  //   if (defaultSelected && defaultSelected.length > 0) {
  //     const newSelected = defaultSelected.map((item, index) => ({
  //       ...item,
  //       key: primaryKey && item[primaryKey] ? item[primaryKey] : `${index}`,
  //     }));
  //     setSelected(newSelected);
  //   }
  // }, []);

  // useEffect(() => {
  // if (isRemoveSelected) {
  // setSelected([]);
  // }
  // }, [isRemoveSelected]);

  // thêm key vào mỗi item để phù hợp với dataSource

  const getData = (): any[] => {
    if (Array.isArray(data)) {
      return data.map((item, index) => ({
        ...item,
        key: primaryKey && item[primaryKey] ? item[primaryKey] : `${index}`,
      }));
    }
    return [];
  };

  // useEffect(() => {
  //   if (isCheckedAll) {
  //     setSelected(getData());
  //   }
  // }, [isCheckedAll]);

  const handleChangePage = (page: number, pageSize: number): void => {
    // if (page === currentPage || !onChangePage) {
    //   return;
    // }
    if (!onChangePage) {
      return;
    }
    onChangePage(page, pageSize);
  };

  const compareFloat = (a: number | string, b: number | string) => {
    if (Number(b) < Number(a)) return -1;
    if (Number(b) > Number(a)) return 1;
    return 0;
  };

  const descendingComparator = (item1: any, item2: any, config: Column) => {
    if (config.type && config.type === typesColumn.number) {
      return compareFloat(item1[config.field], item2[config.field]);
    }
    if (item2[config.field] < item1[config.field]) {
      return -1;
    }
    if (item2[config.field] > item1[config.field]) {
      return 1;
    }
    return 0;
  };

  const getSortConfig = (item: Column): Object => {
    // nếu có onSort thì sẽ sort ở api
    if (item?.isSort && !sortFunction && !onSort) {
      return {
        sortDirections: ['ascend', 'descend'],
        showSorterTooltip: false,
        sorter: (a: any, b: any) => descendingComparator(a, b, item),
      };
    }
    if (item.isSort && sortFunction && !onSort) {
      return {
        sortDirections: ['ascend', 'descend'], // default sort
        showSorterTooltip: false,
        sorter: (a: any, b: any) =>
          sortFunction(a, b, item, (item1: any, item2: any, config: Column) =>
            descendingComparator(item1, item2, config),
          ),
      };
    }
    return {};
  };

  const forChild = (item: Columns): ColumnGroupType<any> | ColumnType<any> => {
    const objClone = item as ColumnGroup;
    if (objClone.children) {
      return {
        ...item,
        title: objClone.name,
        children: objClone.children.map((value) => forChild(value)),
      };
    }
    const itemClone = item as Column;
    return {
      ...itemClone,
      title: itemClone.name,
      dataIndex: itemClone.field,
      key: itemClone.field,
      width: itemClone.width,
      render: (text: string, record: any, index: number) => {
        if (parseFunction) {
          return parseFunction(
            record,
            itemClone,
            isShowPaging && currentPage && totalDisplay ? (currentPage - 1) * totalDisplay + index : index,
          );
        }
        return <span>{text}</span>;
      },
      ...getSortConfig(itemClone),
    };
  };

  // convert config hiện tại sang config table antd
  const getColumns = (): TableProps['columns'] =>
    columns.map((item) => {
      if (!Object.keys(item).length) {
        return item;
      }
      const itemClone = item as Column;
      return forChild(itemClone);
    });

  // loại bỏ key trước khi gửi lại
  const removeKeyInData = (dataSelected: any[]): any[] =>
    dataSelected.map((item) => {
      // eslint-disable-next-line unused-imports/no-unused-vars
      const { key, ...newData } = item;
      return newData;
    });

  // config của select box
  const getSelectConfig = (): TableProps['rowSelection'] => {
    if (isShowCheckbox) {
      return {
        ...iterableSelection,
        type: checkBoxType,
        onChange: (selectedRowKeys: any[], selectedRows: any[], info: any) => {
          // setSelected(selectedRows);
          if (onSelect) {
            onSelect(selectedRowKeys, removeKeyInData(selectedRows), info?.type);
          }
        },
        renderCell: (_checked, record, _index, originNode) => {
          if (checkItemHasSelect && checkItemHasSelect(record)) {
            return '';
          }
          return originNode;
        },
        selectedRowKeys: selected,
        checkStrictly: false,
        getCheckboxProps: (record: any) => ({
          disabled: checkItemHasSelect ? checkItemHasSelect(record) : false,
          name: record.account,
        }),
      };
    }
    return undefined;
  };

  // config của phân trang
  const getPaginationConfig = (): TableProps['pagination'] => {
    if (isShowPaging) {
      return {
        ...iterablePaging,
        current: currentPage,
        defaultCurrent: defaultPage,
        pageSize: totalDisplay,
        pageSizeOptions: [10, 20, 50, 100],
        total: totalCountData,
        onChange: (page: number, pageSize: number) => handleChangePage(page, pageSize),
      };
    }
    return false;
  };

  // example data https://ant.design/components/table/#components-table-demo-tree-data
  const getExpandableConfig = (): TableProps['expandable'] => ({
    ...iterableExpand,
    expandedRowRender: renderSubItem
      ? (record: any, index: number, indent: number, expanded: boolean) =>
          renderSubItem(record, index, indent, expanded)
      : undefined,
    rowExpandable: expandCondition ? (record: any) => expandCondition(record) : undefined,
  });

  const handleChangeSortFilter: TableProps['onChange'] = (_, __, sorter) => (onSort ? onSort(sorter) : {});

  return (
    <div className="root">
      <Table
        columns={getColumns()}
        dataSource={getData()}
        rowSelection={getSelectConfig()}
        pagination={getPaginationConfig()}
        title={actionsHeaderTable ? () => actionsHeaderTable() : undefined}
        footer={actionsFooterTable ? () => actionsFooterTable() : undefined}
        expandable={getExpandableConfig()}
        rowKey={primaryKey}
        className={classNameTable}
        onChange={onChangeDefault ?? handleChangeSortFilter} //onChangeDefault mặc định onChange của antd
        locale={locale}
        virtual={virtual}
        scroll={scrollToProps}
        {...iterableProps}
        // bordered
      />
    </div>
  );
};

TableCommon.defaultProps = {
  columns: [], //type of array - required
  data: [], //type of array - required
  parseFunction: () => {}, //type of function
  isShowCheckbox: false, //type og bool
  // keySelect: 'id',          //type of string
  isShowPaging: false, //type og bool
  onChangePage: () => {}, //type of function - required if isShowPaging = true
  isCheckedAll: false,
  isRemoveSelected: false,
  virtual: false,
  // isSubItem: false,
  onSelect: () => {},
  classNameTable: '', // class để style cho table
  // totalPage: 1, // tong so trang
  totalCountData: 0,
  totalDisplay: 15,
  defaultPage: 1,
  currentPage: 1,
  checkBoxType: 'checkbox',
};

export default TableCommon;
