/*
 * @Author: '111' '1415586220@qq.com'
 * @Date: 2022-10-03 01:27:26
 * @LastEditors: '111' '1415586220@qq.com'
 * @LastEditTime: 2022-10-03 08:31:39
 * @FilePath: \hotel\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: '111' '1415586220@qq.com'
 * @Date: 2022-10-03 01:27:26
 * @LastEditors: '111' '1415586220@qq.com'
 * @LastEditTime: 2022-10-03 04:50:37
 * @FilePath: \hotel\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
    Navigate,
    useRoutes
} from 'react-router-dom'

import Home from "../pages/home";
import Login from "../pages/login";

import Account from "../pages/home/power/account";
import Role from "../pages/home/power/role";
import Department from "../pages/home/power/department";

import Platform from "../pages/home/system/platform";
import Third from "../pages/home/system/thirdparty";
import ChangePwd from "../pages/home/system/changepwd";

import LoginRecords from "../pages/home/record/login";
import OperationRecords from "../pages/home/record/operate";

import User from "../pages/home/user";
import Car from "../pages/home/car";

import Order from "../pages/home/order/order";
import Abnormal from "../pages/home/order/abnormal";
import AfterSales from "../pages/home/order/aftersales";

import Inspector from "../pages/home/staff/inspector";
import OpearationStaff from "../pages/home/staff/operation"

import RoadState from "../pages/home/road/state";
import RoadManagment from "../pages/home/road/road";
import Park from "../pages/home/road/park";

import Magnet from "../pages/home/equipment/magnet";
import PDA from "../pages/home/equipment/PDA";

import UserFeedback from "../pages/home/feedback/user";
import InspectorFeedback from "../pages/home/feedback/inspector"; 

import Money from "../pages/home/money";

import Revenue from "../pages/home/statistics/revenue";
import Payment from "../pages/home/statistics/payment";
import RoadStatistics from "../pages/home/statistics/road";
import Attendance from "../pages/home/statistics/attendance";

const Routers = ()=>{
    return useRoutes([
        {
            path:"/",
            element:<Navigate to={"/login"} />
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/home",
            element:<Home/>,
            children:[
                {
                    path:"/home/power",
                    children:[
                        {
                            index:"index",
                            element:<Account/>
                        },
                        {
                            path:"/home/power/account",
                            element:<Account/>
                        },
                        {
                            path:"/home/power/role",
                            element:<Role/>
                        },
                        {
                            path:"/home/power/department",
                            element:<Department/>
                        },
                    ]
                },
                {
                    path:"/home/system",
                    children:[
                        {
                            index:"index",
                            element:<Platform/>
                        },
                        {
                            path:"/home/system/platorm",
                            element:<Platform/>
                        },
                        {
                            path:"/home/system/thirdInfo",
                            element:<Third/>
                        },
                        {
                            path:"/home/system/changePwd",
                            element:<ChangePwd/>
                        },
                    ]
                },
                {
                    path:"/home/record",
                    children:[
                        {
                            index:"index",
                            element:<LoginRecords/>
                        },
                        {
                            path:"/home/record/loginRecords",
                            element:<LoginRecords/>
                        },
                        {
                            path:"/home/record/operationRecords",
                            element:<OperationRecords/>
                        },
                    ]
                },
                {
                    path:"/home/user",
                    element:<User/>,
                },
                {
                    path:"/home/car",
                    element:<Car/>,
                },
                {
                    path:"/home/order",
                    children:[
                        {
                            index:"index",
                            element:<Order/>
                        },
                        {
                            path:"/home/order/order",
                            element:<Order/>
                        },
                        {
                            path:"/home/order/abnormal",
                            element:<Abnormal/>
                        },
                        {
                            path:"/home/order/aftersales",
                            element:<AfterSales/>
                        },
                    ]
                },
                {
                    path:"/home/staff",
                    children:[
                        {
                            index:"index",
                            element:<Inspector/>
                        },
                        {
                            path:"/home/staff/inspector",
                            element:<Inspector/>
                        },
                        {
                            path:"/home/staff/operation",
                            element:<OpearationStaff/>
                        },
                    ]
                },
                {
                    path:"/home/road",
                    children:[
                        {
                            index:"index",
                            element:<RoadState/>
                        },
                        {
                            path:"/home/road/state",
                            element:<RoadState/>
                        },
                        {
                            path:"/home/road/road",
                            element:<RoadManagment/>
                        },
                        {
                            path:"/home/road/park",
                            element:<Park/>
                        },
                    ]
                },
                {
                    path:"/home/equipment",
                    children:[
                        {
                            index:"index",
                            element:<Magnet/>
                        },
                        {
                            path:"/home/equipment/magnet",
                            element:<Magnet/>
                        },
                        {
                            path:"/home/equipment/PDA",
                            element:<PDA/>
                        },
                    ]
                },
                {
                    path:"/home/feedback",
                    children:[
                        {
                            index:"index",
                            element:<UserFeedback/>
                        },
                        {
                            path:"/home/feedback/user",
                            element:<UserFeedback/>
                        },
                        {
                            path:"/home/feedback/inspector",
                            element:<InspectorFeedback/>
                        },

                    ]
                },
                {
                    path:"/home/money",
                    element:<Money/>,
                },
                {
                    path:"/home/statistics",
                    children:[
                        {
                            index:"index",
                            element:<Revenue/>
                        },
                        {
                            path:"/home/statistics/revenue",
                            element:<Revenue/>
                        },
                        {
                            path:"/home/statistics/payment",
                            element:<Payment/>
                        },
                        {
                            path:"/home/statistics/road",
                            element:<RoadStatistics/>
                        },
                        {
                            path:"/home/statistics/attendance",
                            element:<Attendance/>
                        },
                    ]
                },
            ]
        },
        
    ])

}
export default Routers;