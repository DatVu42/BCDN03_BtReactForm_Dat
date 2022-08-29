import React, { Component } from 'react';
import FormDangKy from './FormDangKy';
import TableSinhVien from './TableSinhVien';


export default class BTQuanLySinhVien extends Component {
    render() {
        return (
            <div className='container'>
                <div className="card">
                    <div className="card-header bg-secondary text-white">
                        Thông tin sinh viên
                    </div>
                    <div className="card-body">
                        <FormDangKy />
                    </div>
                </div>

                <div className="card">
                    <div className="card-header bg-secondary text-white">
                        Danh sách sinh viên
                    </div>
                    <div className="card-body">
                        <TableSinhVien />
                    </div>
                </div>
            </div>
        );
    }
}
