import { CAP_NHAT_SV, THEM_SV, TIM_SV, XEM_SV, XOA_SV } from "../types/quanLySinhVienType"

const initialState = {
    danhSachSV: [
        {
            maSV: "001",
            hoTen: "Nguyễn Sinh Viên",
            sdt: "0905123123",
            email: "sinhvien@gmail.com"
        },
        {
            maSV: "002",
            hoTen: "a",
            sdt: "0905123123",
            email: "sinhvien@gmail.com"
        },
        {
            maSV: "003",
            hoTen: "b",
            sdt: "0905123123",
            email: "sinhvien@gmail.com"
        }
    ],
    chiTietSV: {
        maSV: "",
        hoTen: "",
        sdt: "",
        email: ""
    }
}

export const quanLySinhVienReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEM_SV:
            let svIndex = state.danhSachSV.findIndex(sv => sv.maSV === action.sv.maSV);
            if (svIndex === -1) {
                state.danhSachSV = [...state.danhSachSV, action.sv];
            } else {
                alert("Sinh viên đã tồn tại");
            }

            return { ...state }

        case XOA_SV:
            state.danhSachSV = state.danhSachSV.filter(sv => sv.maSV !== action.maSV);

            return { ...state }

        case XEM_SV:
            state.chiTietSV = action.sv;

            return { ...state }

        case CAP_NHAT_SV:
            let index = state.danhSachSV.findIndex(sv => sv.maSV === action.sv.maSV);
            if (index > -1) {
                state.danhSachSV[index] = action.sv;
            }
            state.danhSachSV = [...state.danhSachSV]

            return { ...state }

        case TIM_SV:
            state.danhSachSV = state.danhSachSV.filter(sv => sv.hoTen === action.hoTen);
            // state.danhSachSV = [...state.danhSachSV]

            return { ...state }

        default:
            return state
    }
}
