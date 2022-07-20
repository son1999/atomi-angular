import { environment } from '../../environments/environment';

export const CONFIG = {
  PRODUCTION: environment.production,
  KEY: {
    CUSTOMER_INFO: 'xdfadfasdfsdff',
  },
  FORMAT_DATE: {
    NORMAL: 'dd-MM-yyy',
    SHORT: 'dd-MM',
  },
  DEFAULT_LANGUAGE: 'vi',
  CODE: {
    SUCCESS: 200,
    INTERNAL_SERVER_ERROR: 500,
    FORBIDDEN: 403,
  },
  BASE_API_URL: environment.baseApiUrl,
  BS_DEFAULT_CONFIG: {
    containerClass: 'theme-default custom-style',
    dateInputFormat: 'DD/MM/YYYY',
    isAnimated: true,
  },
  BS_HOUR_CONFIG: {
    containerClass: 'theme-default custom-style',
    dateInputFormat: 'DD/MM/YYYY HH:mm:ss',
    isAnimated: true,
    withTimepicker: true,
  },
  BS_YEAR_CONFIG: {
    containerClass: 'theme-default custom-style',
    dateInputFormat: 'YYYY',
    // isAnimated: true,
    // withTimepicker: true,
    // minMode:'year',
    // adaptivePosition: true
  },

  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_PAGE_SIZE: 10,
  },
  TOASTR_TIMEOUT: 2000,
  LANGUAGES: [{ CODE: 'vi', TEXT: 'Việt Nam' }],
  REGEX : {
    namePattern :"^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹsW|_ ]+",
    passwordPattern: "/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/",
    emailPattern:"[a-zA-Z0-9@]*",
    phone:"/^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/mg"
  },

  SITEKEY:'6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1'
};
