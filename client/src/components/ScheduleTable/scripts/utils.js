export function formDataSchedule (data) {
  return data.reduce((prev, cur) => {
    // const beginTime = cur.begin_time;
    // const weekday = cur.weekDay;
    const { begin_time, weekDay } = cur;
    prev[`${begin_time}_${weekDay}`] = cur;
    
    return prev;
  }, {});
}

export function weekdayToChinese (number) {
  switch (number) {
    case 1: 
      return '周一';
    
    case 2: 
      return '周二';
    
    case 3: 
      return '周三';
    
    case 4: 
      return '周四';
    
    case 5: 
      return '周五';
    
    case 6: 
      return '周六';
    
    case 7: 
      return '周日 ';
  }
}

export function timestampToTime (timestamp) {
  const d = new Date(timestamp * 1000);

  const hours = addZero(d.getHours());
  const minutes = addZero(d.getMinutes());

  function addZero (value) {
    return value < 10 ? '0' + value : value;
  }

  return `${ hours }: ${ minutes }`
}

export function checkHasData (scheduleData) {
  const text = scheduleData ? '编辑' : '新增';
  return `${ text }课程安排`;
}