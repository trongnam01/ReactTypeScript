/* eslint-disable import/no-cycle */

export const regexType = {
  // regex tên tài khoản
  userName: /^[a-z0-9]+$/,

  // regex mật khẩu
  passwordRegex:
    // eslint-disable-next-line no-useless-escape
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?])(?!.*\s).{8,}$/,

  // tên tiếng việt không số và có kí hiệu (.,-&+) không nhận toàn khoảng trắng
  // vnFullName:
  //   /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵýỷỹ.,&+-]+( [a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵýỷỹ.,&+-]+)*$/,

  fullName: /^[\p{L}\s\d]+$/u,

  vnFullName: /^[\p{L}\s]+$/u,

  // regex sdt ở việt nam
  vnNumberPhone: /^(84|0[3|5|7|8|9])+([0-9]{8})\b$/,

  // regex email
  // eslint-disable-next-line no-useless-escape
  email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,

  // regex số cmnd/cccd
  idNumber: /^\d{9}(?:\d{3})?$/,

  // regex chỉ nhập số k nhập chữ
  number: /^-?\d*(\.\d*)?$/, // 1234567890
};
export const baseApi = process.env.REACT_APP_API_URL;

export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const AUTHCODE = 'AUTHCODE';

export const PUBLIC_PATH = '/myapp';

export const formatYMD = 'YYYY-MM-DD';
export const formatDMY = 'DD-MM-YYYY';

export const OPTIONS_GENDER = [
  {
    value: 0,
    label: 'Nam',
  },
  {
    value: 1,
    label: 'Nữ',
  },
];
