// 首页
import React from 'react';
import { Layout,Menu } from 'antd';
import {Outlet,Link} from 'react-router-dom'
import './index.css'


const { Header, Content, Sider } = Layout;



const items = [
    {
        label:<Link to={"/home"}>首页</Link>,
        key:'1'
    },
    {
        label:'权限管理',
        key:'2',
        children:[
            {
                label:<Link to={"/home/power/account"}>账号管理</Link>,
                key:'3'
            },
            {
                label:<Link to={"/home/power/role"}>角色管理</Link>,
                key:'4'
            },
            {
                label:<Link to={"/home/power/department"}>部门管理</Link>,
                key:'5'
            }
        ],
    },
    {
        label:'系统设置',
        key:'6',
        children:[
            {
                label:<Link to={"/home/system/platform"}>平台消息</Link>,
                key:'7'
            },
            {
                label:<Link to={"/home/system/thirdInfo"}>第三方参数设置</Link>,
                key:'8'
            },
            {
                label:<Link to={"/home/system/changepwd"}>修改密码</Link>,
                key:'9'
            }
        ],
    },
    {
        label:'日志管理',
        key:'10',
        children:[
            {
                label:<Link to={"/home/record/loginRecords"}>登录日志</Link>,
                key:'11'
            },
            {
                label:<Link to={"/home/record/operationRecords"}>操作日志</Link>,
                key:'12'
            },
        ],
    },
    {
        label:'用户管理',
        key:'13',
        children:[
            {
                label:<Link to={"/home/user"}>用户管理</Link>,
                key:'14'
            },
        ],
    },
    {
        label:'车辆管理',
        key:'15',
        children:[
            {
                label:<Link to={"/home/car"}>车辆管理</Link>,
                key:'16'
            },
        ],
    },
    {
        label:'订单管理',
        key:'17',
        children:[
            {
                label:<Link to={"/home/order/order"}>订单管理</Link>,
                key:'18'
            },
            {
                label:<Link to={"/home/order/abnormal"}>异常订单管理</Link>,
                key:'19'
            },
            {
                label:<Link to={"/home/order/aftersales"}>售后订单管理</Link>,
                key:'20'
            }
        ],
    },
    {
        label:'员工管理',
        key:'21',
        children:[
            {
                label:<Link to={"/home/staff/inspector"}>巡检员管理</Link>,
                key:'22'
            },
            {
                label:<Link to={"/home/staff/operation"}>运维人员管理</Link>,
                key:'23'
            },
        ],
    },
    {
        label:'路段管理',
        key:'24',
        children:[
            {
                label:<Link to={"/home/road/state"}>实施路段状态</Link>,
                key:'25'
            },
            {
                label:<Link to={"/home/road/road"}>路段管理</Link>,
                key:'26'
            },
            {
                label:<Link to={"/home/road/park"}>泊位管理</Link>,
                key:'27'
            }
        ],
    },
    {
        label:'设备管理',
        key:'28',
        children:[
            {
                label:<Link to={"/home/equipment/magnet"}>地磁管理</Link>,
                key:'29'
            },
            {
                label:<Link to={"/home/equipment/PDA"}>手持PDA管理</Link>,
                key:'30'
            },
        ],
    },
    {
        label:'反馈管理',
        key:'31',
        children:[
            {
                label:<Link to={"/home/feedback/user"}>用户反馈工单</Link>,
                key:'32'
            },
            {
                label:<Link to={"/home/feedback/inspector"}>巡检员反馈</Link>,
                key:'33'
            },
        ],
    },
    {
        label:'财务管理',
        key:'34',
        children:[
            {
                label:<Link to={"/home/money"}>资金流水</Link>,
                key:'35'
            },
        ],
    },
    {
        label:'统计管理',
        key:'36',
        children:[
            {
                label:<Link to={"/home/statistics/revenue"}>营收统计</Link>,
                key:'37'
            },
            {
                label:<Link to={"/home/statistics/payment"}>支付统计</Link>,
                key:'38'
            },
            {
                label:<Link to={"/home/statistics/road"}>路段统计</Link>,
                key:'39'
            },
            {
                label:<Link to={"/home/statistics/attendance"}>考勤统计</Link>,
                key:'40'
            },
        ],
    },
];
  
  const Home = () => {
      return (
        <Layout>
        <Header className="header">
          <div className="logo">
              路边停车平台后台
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
          <Menu
          style={{
              width: 196,
          }}
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          />
          </Sider>
          <Layout
            className="site-layout"
          >            
            <Content
              className="site-layout-background"
              style={{
                // padding: 24,
                margin: 0,
              }}
            >
              <Outlet/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      );
  }
    
  
export default Home;