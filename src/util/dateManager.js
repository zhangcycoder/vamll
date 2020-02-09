/** 
 * 到技术出路
 * dateString:截止日期的时间字符串
*/

export function timer(dateString,timeInterval,callback) {
    setInterval(() => {
        var nowTime = new Date().getTime();
        var futureTime = new Date(dateString).getTime();
        var offsetTime = parseInt((futureTime - nowTime) / 1000)
        var time = `${getDay(offsetTime)}天${getHour(offsetTime)}时${getMinutes(offsetTime)}分${getSeconds(offsetTime)}秒`
        callback(time)
    },timeInterval)  
}
function getDay(timeInterval) { 
    var day = parseInt(timeInterval / (24 * 60 * 60))
    return day
}
function getHour(timeInterval) {
    var hour = parseInt(timeInterval / (60 * 60) % 24);
    return hour
}
function getMinutes(timeInterval) {   
    var minutes = parseInt(timeInterval/60%60)
    return minutes
}
function getSeconds(timeInterval) {
    var seconds = parseInt(timeInterval % 60)
    return seconds
}

//多久之前
export function getDateDiff(dateStr) {
    var dateTimeStamp = Date.parse(dateStr.replace(/-/gi, '/'))
    var minute = 1000 * 60
    var hour = minute * 60
    var day = hour * 24
    var month = day * 30
    var now = new Date().getTime()
    var diffValue = now - dateTimeStamp
    if (diffValue < 0) { return }
    var monthC = diffValue / month
    var weekC = diffValue / (7 * day)
    var dayC = diffValue / day
    var hourC = diffValue / hour
    var minC = diffValue / minute
    var result = ''
    if (monthC >= 1) {
        result = '' + parseInt(monthC) + '月前'
    } else if (weekC >= 1) {
        result = '' + parseInt(weekC) + '周前'
    } else if (dayC >= 1) {

        result = '' + parseInt(dayC) + '天前'
    } else if (hourC >= 1) {
        result = '' + parseInt(hourC) + '小时前'
    } else if (minC >= 1) {
        result = '' + parseInt(minC) + '分钟前'
    } else
        result = '刚刚'
    return result
}

 