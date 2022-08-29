import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capNhatSinhVien, themSinhVien } from '../redux/actions/quanLySinhVienAction';

class FormDangKy extends Component {
  state = {
    value: {
      maSV: "",
      hoTen: "",
      sdt: "",
      email: ""
    },
    error: {
      maSV: "",
      hoTen: "",
      sdt: "",
      email: ""
    }
  }

  handleInput = (event) => {
    let { name, value } = event.target;
    // console.log(name, value);

    let newValue = { ...this.state.value };
    newValue[name] = value;

    let newError = { ...this.state.error };
    let message = "";
    if (value.trim() === "") {
      message = name + " không được để trống";
    }

    let dataType = event.target.getAttribute("data-type");
    if (dataType === "email") {
      let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

      if (!value.match(pattern)) {
        message = name + " không đúng định dạng";
      }
    }

    newError[name] = message;

    this.setState({
      value: newValue,
      error: newError
    }, () => {
      // console.log(this.state);
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let { value, error } = this.state;
    for (const key in value) {
      if (value[key] === "") {
        alert(key + " không được bỏ trống");
        return;
      }
    }

    for (const key in error) {
      if (error[key] !== "") {
        alert(key + " không hợp lệ");
        return;
      }
    }

    this.props.dispatch(themSinhVien(this.state.value))
  }

  // static getDerivedStateFromProps(newProps, currentState) {
  //   if (newProps.chiTietSV.maSV !== currentState.value.maSV) {
  //     return { ...currentState, value: newProps.chiTietSV };
  //   }

  //   return currentState;
  // }

  componentWillReceiveProps(newProps) {
    this.setState({
      value: newProps.chiTietSV,
    })
  }

  render() {
    // console.log(this.props.chiTietSV)
    let { maSV, hoTen, sdt, email } = this.state.error;
    let { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="maSV">Mã SV</label>
              <input onChange={this.handleInput} type="text" className="form-control" id="maSV" name='maSV' value={value.maSV} />
              <p className='text-danger'>{maSV}</p>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="hoTen">Họ tên</label>
              <input onChange={this.handleInput} type="text" className="form-control" id="hoTen" name='hoTen' value={value.hoTen} />
              <p className='text-danger'>{hoTen}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="sdt">Số điện thoại</label>
              <input onChange={this.handleInput} type="text" className="form-control" id="sdt" name='sdt' value={value.sdt} />
              <p className='text-danger'>{sdt}</p>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input onChange={this.handleInput} type="email" className="form-control" id="email" name='email' data-type='email' value={value.email} />
              <p className='text-danger'>{email}</p>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mr-2">Thêm sinh viên</button>
        <button onClick={() => {
          this.props.dispatch(capNhatSinhVien(this.state.value));
        }} type="button" className="btn btn-warning">Cập nhật</button>
      </form>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    chiTietSV: rootReducer.quanLySinhVienReducer.chiTietSV,
  }
}

export default connect(mapStateToProps)(FormDangKy);