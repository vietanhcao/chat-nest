const t = (t) => t;
export const columnTypes = () => ({
  textClients: {
    filter: 'agTextColumnFilter',
    filterParams: {
      suppressAndOrCondition: true,
      debounceMs: 1000,
      filterOptions: [
        {
          displayName: 'Bao gồm',
          displayKey: 'contains',
        },
      ],
    },
  },

  text: {
    filter: 'agTextColumnFilter',
    filterParams: {
      suppressAndOrCondition: true,
      debounceMs: 1000,
      filterOptions: [
        {
          displayName: 'Bao gồm',
          displayKey: 'contains',
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        // {
        //   displayName: 'notContains',
        //   displayKey: 'notContains',
        //   test: function (filterValue, cellValue) {
        //     return cellValue == null
        //   },
        // },
      ],
    },
  },

  textFilter: {
    filter: 'agTextColumnFilter',
    filterParams: {
      suppressAndOrCondition: true,
      debounceMs: 1000,
      filterOptions: [
        {
          displayName: 'Bao gồm',
          displayKey: 'contains',
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },

        {
          displayName: 'Không bao gồm',
          displayKey: 'ncontains',
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },

        {
          displayName: 'Bắt đầu với',
          displayKey: 'start',
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },

        {
          displayName: 'Kết thúc với',
          displayKey: 'end',
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
      ],
    },
  },

  // duesMonthFilter: {
  //   filter: 'agTextColumnFilter',
  //   filterParams: {
  //     suppressAndOrCondition: true,
  //     debounceMs: 1000,
  //     filterOptions: [
  //       {
  //         displayName: 'Bao gồm',
  //         displayKey: 'contains',
  //         test: function (filterValue, cellValue) {
  //           return cellValue == null
  //         },
  //       },

  //       {
  //         displayName: 'Not contains',
  //         displayKey: 'ncontains',
  //         test: function (filterValue, cellValue) {
  //           return cellValue == null
  //         },
  //       },
  //     ],
  //   },
  // },

  number: {
    filter: 'agNumberColumnFilter',
    filterParams: {
      // resetButton: true,
      suppressAndOrCondition: true,
      debounceMs: 1000,
      filterOptions: [
        {
          displayKey: 'eq',
          displayName: t('Bằng'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        {
          displayKey: 'gte',
          displayName: t('Lớn hơn hoặc bằng'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        {
          displayKey: 'gt',
          displayName: t('Lớn hơn'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        {
          displayKey: 'lt',
          displayName: t('Ít hơn'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        {
          displayKey: 'lte',
          displayName: t('Ít hơn hoặc bằng'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
      ],
    },
  },

  numberFilter: {
    filter: 'agNumberColumnFilter',
    filterParams: {
      // resetButton: true,
      suppressAndOrCondition: true,
      debounceMs: 1000,
      filterOptions: [
        {
          displayKey: 'eq',
          displayName: t('Equals'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        {
          displayKey: 'gte',
          displayName: t('Greater Than or Equal'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        {
          displayKey: 'gt',
          displayName: t('Greater Than'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        {
          displayKey: 'lt',
          displayName: t('Less Than'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        {
          displayKey: 'lte',
          displayName: t('Less Than or Equal'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },

        {
          displayKey: 'inRange',
          displayName: 'In Range',
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
      ],
    },
  },

  date: {
    filter: 'agDateColumnFilter',
    filterParams: {
      // resetButton: true,
      // browserDatePicker: true,
      suppressAndOrCondition: true,
      debounceMs: 1000,

      filterOptions: [
        {
          displayKey: 'gte',
          displayName: t('Lớn hơn hoặc bằng'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        {
          displayKey: 'lte',
          displayName: t('Ít hơn'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
      ],
    },
  },
  dateCondition: {
    filter: 'agDateColumnFilter',
    filterParams: {
      resetButton: true,
      alwaysShowBothConditions: true,
      // browserDatePicker: true,
      minValidYear: 2000,
      debounceMs: 1000,

      filterOptions: [
        {
          displayKey: 'gte',
          displayName: t('Lớn hơn hoặc bằng'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        {
          displayKey: 'lte',
          displayName: t('Ít hơn'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
      ],
    },
  },

  dateFilter: {
    filter: 'agDateColumnFilter',
    filterParams: {
      // resetButton: true,
      // browserDatePicker: true,
      suppressAndOrCondition: true,
      debounceMs: 1000,

      filterOptions: [
        {
          displayKey: 'gt',
          displayName: t('Greater Than'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        {
          displayKey: 'gte',
          displayName: t('Greater Than or Equal'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        {
          displayKey: 'lte',
          displayName: t('Less Than or Equal'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        {
          displayKey: 'lt',
          displayName: t('Less Than'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
        {
          displayKey: 'inRange',
          displayName: t('inRange'),
          test: function (filterValue, cellValue) {
            return cellValue == null;
          },
        },
      ],
    },
  },
});
