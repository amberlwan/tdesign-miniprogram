Page({
  data: {
    mode: '',

    dateVisible: false,
    date: new Date().getTime(), // 支持时间戳传入
    dateText: '',

    monthVisible: false,
    month: '2021-09',
    monthText: '',

    timeVisible: false,
    time: '10:00',
    timeText: '',

    datetimeVisible: false,
    datetime: new Date().getTime(),
    datetimeText: '',

    // 指定选择区间起始值
    start: '2000-01-01 00:00:00',
    end: '2030-09-09 12:12:12',
  },
  showPicker(e) {
    const { mode } = e?.currentTarget?.dataset;
    this.setData({
      mode,
      [`${mode}Visible`]: true,
    });
  },
  hidePicker() {
    const { mode } = this.data;
    this.setData({
      [`${mode}Visible`]: false,
    });
  },
  onConfirm(e) {
    const { value } = e?.detail;
    const { mode } = this.data;

    console.log('confim', value);

    this.setData({
      [mode]: value,
      [`${mode}Text`]: value,
    });

    this.hidePicker();
  },

  onColumnChange(e) {
    console.log('pick', e?.detail?.value);
  },
});
