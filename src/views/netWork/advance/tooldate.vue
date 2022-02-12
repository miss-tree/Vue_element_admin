<template>
    <div>
        <location :list='list'/>
        <div>
            <h5 id="showWeekFirstDay">本周第一天</h5>
            <pre v-pre>
        /***
        *  @return {*} WeekFirstDay 返回本周第一天的时间
        */
        function showWeekFirstDay(){
            let Nowdate=new Date();
            let WeekFirstDay=new Date(Nowdate-(Nowdate.getDay()-1)*86400000);
            return WeekFirstDay;
        }
            </pre>
        </div>
        <div>
            <h5 id="showWeekLastDay">本周最后一天</h5>
            <pre v-pre>
        /***
        *  @return {*} WeekLastDay 返回本周最后一天的时间
        */
        function showWeekLastDay(){
            let Nowdate=new Date();
            let WeekFirstDay=new Date(Nowdate-(Nowdate.getDay()-1)*86400000);
            let WeekLastDay=new Date((WeekFirstDay/1000+6*86400)*1000);
            return WeekLastDay;
        }
            </pre>
        </div>
        <div>
            <h5 id="showMonthFirstDay">本月第一天</h5>
            <pre v-pre>
        /***
        *  @return {*} MonthFirstDay 返回本月第一天的时间
        */
        function showMonthFirstDay(){
            let Nowdate=new Date();
            let MonthFirstDay=new Date(Nowdate.getFullYear(),Nowdate.getMonth());
            return MonthFirstDay;
        }
            </pre>
        </div>
        <div>
            <h5 id="showMonthLastDay">本月最后一天</h5>
            <pre v-pre>
        /***
        *  @return {*} MonthLastDay 返回本月最后一天的时间
        */
        function showMonthLastDay(){
            let Nowdate=new Date();
            let MonthNextFirstDay=new Date(Nowdate.getFullYear(),Nowdate.getMonth()+1);
            let MonthLastDay=new Date(MonthNextFirstDay-86400000);
            return MonthLastDay;
        }
            </pre>
        </div>
        <div>
            <h5 id="getdataTimeSec">格式化当前时间</h5>
            <pre v-pre>
        /***
        *  @return {string} timeText 返回系统时间字符串
        */
        function getdataTimeSec() {
            let time = new Date();
            let weekDay;
            let year = time.getFullYear();
            let month = time.getMonth() + 1;
            let day = time.getDate();
            //获取时分秒
            let h = time.getHours();
            let m = time.getMinutes();
            let s = time.getSeconds();
            //检查是否小于10
            h = check(h);
            m = check(m);
            s = check(s);
            let now_day = time.getDay();
            switch (now_day) {
                case 0: {
                    weekDay = "星期日"
                }
                    break;
                case 1: {
                    weekDay = "星期一"
                }
                    break;
                case 2: {
                    weekDay = "星期二"
                }
                    break;
                case 3: {
                    weekDay = "星期三"
                }
                    break;
                case 4: {
                    weekDay = "星期四"
                }
                    break;
                case 5: {
                    weekDay = "星期五"
                }
                    break;
                case 6: {
                    weekDay = "星期六"
                }
                    break;
                case 7: {
                    weekDay = "星期日"
                }
                    break;
            }
            let timeText = year + "年" + padNumber(month,2)+ "月" + padNumber(day,2) + "日  " + " " + weekDay + " " + h + ":" + m +":" + s;

            return timeText
        }

        /**
        * @param {number} arr 具体日期变量
        * @param {number} num 需要补全的个数
        */
        function padNumber(arr, num) {
            return arr.toString().padStart(num, '0')
        }
            </pre>
        </div>
        <div>
            <h5 id="getFormatDate">按类型格式化日期</h5>
            <pre v-pre>
        /**
        * @param {*} date 具体日期变量
        * @param {string} dateType 需要返回类型
        * @return {string} dateText 返回为指定格式的日期字符串
        */
        function getFormatDate(date, dateType) {
            let dateObj = new Date(date);
            let month = dateObj.getMonth() + 1;
            let strDate = dateObj.getDate();
            let hours = dateObj.getHours();
            let minutes = dateObj.getMinutes();
            let seconds = dateObj.getSeconds();
            if (month >= 1 && month &lt;= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate &lt;= 9) {
                strDate = "0" + strDate;

            }
            if (hours >= 0 && hours &lt;= 9) {
                hours = "0" + hours
            }
            if (minutes >= 0 && minutes &lt;= 9) {
                minutes = "0" + minutes
            }
            if (seconds >= 0 && seconds &lt;= 9) {
                seconds = "0" + seconds
            }

            let dateText = dateObj.getFullYear() + '年' + padNumber(month) + '月' + padNumber(strDate) + '日';
            if (dateType == "yyyy-mm-dd") {
                dateText = dateObj.getFullYear() + '-' + padNumber(month) + '-' + padNumber(strDate);
            }
            if (dateType == "yyyy.mm.dd") {
                dateText = dateObj.getFullYear() + '.' + padNumber(month) + '.' + padNumber(strDate);
            }
            if (dateType == "yyyy-mm-dd MM:mm:ss") {
                dateText = dateObj.getFullYear() + '-' + padNumber(month) + '-' + padNumber(strDate) + ' ' + padNumber(hours) + ":" + padNumber(minutes) + ":" + padNumber(seconds);
            }
            if (dateType == "mm-dd MM:mm:ss") {
                dateText = padNumber(month) + '-' + padNumber(strDate) + ' ' + padNumber(hours) + ":" + padNumber(minutes) + ":" + padNumber(seconds);
            }
            if (dateType == "yyyy年mm月dd日 MM:mm:ss") {
                dateText = dateObj.getFullYear() + '年' + padNumber(month), + '月' + padNumber(strDate) + '日' + ' ' + padNumber(hours) + ":" + padNumber(minutes) + ":" + padNumber(seconds);
            }
            return dateText;
        }

        /**
        * @param {number} arr 具体日期变量
        * @param {number} num 需要补全的个数
        */
        function padNumber(arr) {
            return arr.toString().padStart(2, '0')
        }
            </pre>
        </div>
        <div>
            <h5 id="leapYear">判断是否为闰年</h5>
            <pre v-pre>
        /**
        * @param  {number} year 要判断的年份
        * @return {boolean} 返回布尔值
        */
        function leapYear(year) {
            return !(year % (year % 100 ? 4 : 400));
        }
            </pre>
        </div>
        <div>
            <h5 id="compareDate">验证日期大小</h5>
            <pre v-pre>
        /**
        * 例："2019-10-24" 和 "2019-10-25"
        * @param  {string} d1需要验证的日期1
        * @param  {string} d2需要验证的日期2
        * @return {boolean} 返回布尔值
        */
        function compareDate(d1, d2) {
            return ((new Date(d1.replace(/-/g, "\/"))) &lt; (new Date(d2.replace(/-/g, "\/"))));
        }
            </pre>
        </div>
        <div>
            <h5 id="ised2k">检查是日期前后</h5>
            <pre v-pre>
        const isAfterDate = (dateA, dateB) => dateA > dateB;

	    isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
            </pre>
        </div>
        <div>
            <h5 id="isToday">验证一个日期是不是今天</h5>
            <pre v-pre>
        /**
        * @param  {string} val 需要验证的日期
        * @return {boolean} 返回布尔值
        */
        function isToday(val){
            return new Date().toLocaleDateString() == new Date(val).toLocaleDateString();
        }
            </pre>
        </div>
        <div>
            <h5 id="isYesterday">验证传入的日期是否是昨天</h5>
            <pre v-pre>
        /**
        * @param  {string} val 需要验证的日期
        * @return {boolean} 返回布尔值
        */
        function isYesterday(val) {
            var today = new Date();
            var yesterday = new Date(now - 1000 * 60 * 60 * 24);
            var test = new Date(val);
            if (yesterday.getYear() === test.getYear() && yesterday.getMonth() === test.getMonth() && yesterday.getDate() === test.getDate()) {
                return true;
            } else {
                return false;
            }
        }
            </pre>
        </div>
        <div>
            <h5 id="convertDate">设置几天后的日期</h5>
            <pre v-pre>
        /**
        * @param  {string} date 起始日期
        * @param  {number} day 向后的天数
        * @return {string} 返回想要得到的日期
        */
        function convertDate (date, day) {
            let tempDate = new Date(date);
            tempDate.setDate(tempDate.getDate()+day);
            let Y = tempDate.getFullYear();
            let M = tempDate.getMonth()+1 &lt; 10 ? '0'+(tempDate.getMonth()+1) : tempDate.getMonth()+1;
            let D = tempDate.getDate() &lt; 10 ? '0'+(tempDate.getDate()) : tempDate.getDate();
            let result = Y + "-" + M + "-" + D
            return result;
        }
            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name:"tooldate",
        components:{
            location:()=>import('@/components/location/index')
        },
        data(){
            return {
                list:[
                    {name:'本周第一天',id:'showWeekFirstDay'},
                    {name:'本周最后一天',id:'showWeekLastDay'},
                    {name:'本月第一天',id:'showMonthFirstDay'},
                    {name:'本月最后一天',id:'showMonthLastDay'},
                    {name:'格式化当前时间',id:'getdataTimeSec'},
                    {name:'按类型格式化日期',id:'getFormatDate'},
                    {name:'判断是否为闰年',id:'leapYear'},
                    {name:'验证日期大小',id:'compareDate'},
                    {name:'检查是日期前后',id:'ised2k'},
                    {name:'验证日期是不是今天',id:'isToday'},
                    {name:'验证日期是否是昨天',id:'isYesterday'},
                    {name:'设置日期',id:'convertDate'},
                    // {name:'验证子网掩码',id:'isSubnetMask'},
                ]
            }
        }
    }
</script>

