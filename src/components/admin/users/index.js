import { PeopleOutlined } from '@material-ui/icons';
import React from 'react';
import AdminBaseComponent from '../../common/layout/admin/admin-base-component/AdminBaseComponent';
export default function Users(props){
    return <AdminBaseComponent icon={<PeopleOutlined/>} title="Users" rightComponents={[<PeopleOutlined/>,<PeopleOutlined/>]}>
 
    </AdminBaseComponent>
}