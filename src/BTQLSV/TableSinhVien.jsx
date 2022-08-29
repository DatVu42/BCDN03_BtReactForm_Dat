import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timSinhVien, xemSinhVien, xoaSinhVien } from '../redux/actions/quanLySinhVienAction';

class TableSinhVien extends Component {

  renderDSSV = () => {
    return this.props.danhSachSV.map((sv) => {
      let { maSV, hoTen, sdt, email } = sv;
      return <tr key={maSV}>
        <td>{maSV}</td>
        <td>{hoTen}</td>
        <td>{sdt}</td>
        <td>{email}</td>
        <td>
          <button onClick={() => {
            this.props.dispatch(xemSinhVien(sv));
          }} className='btn btn-info'>Sửa</button>

          <button onClick={() => {
            this.props.dispatch(xoaSinhVien(maSV));
          }} className='btn btn-danger ml-2'>Xóa</button>
        </td>
      </tr>
    })
  }

  handleInputSearch = (event) => {
    let {value} = event.target;

    this.props.dispatch(timSinhVien(value));
  }

  render() {
    // console.log(this.props.danhSachSV);
    return (
      <div>
        <form className="form-inline mb-3" >
          <input onChange={this.handleInputSearch} className="form-control mr-sm-2" type="search" placeholder="Nhập tên sinh viên" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Mã SV</th>
              <th scope="col">Họ tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.renderDSSV()}
          </tbody>
        </table>
      </div>

    )
  }
}

const mapStateToProps = (rootReducers) => {
  return {
    danhSachSV: rootReducers.quanLySinhVienReducer.danhSachSV
  }
}

export default connect(mapStateToProps)(TableSinhVien);