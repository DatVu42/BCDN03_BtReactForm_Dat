import { CAP_NHAT_SV, THEM_SV, TIM_SV, XEM_SV, XOA_SV } from "../types/quanLySinhVienType"

export const themSinhVien = (sv) => {
    return {
        type: THEM_SV,
        sv
    }
}

export const xoaSinhVien = (maSV) => {
    return {
        type: XOA_SV,
        maSV
    }
}

export const xemSinhVien = (sv) => {
    return {
        type: XEM_SV,
        sv
    }
}

export const capNhatSinhVien = (sv) => {
    return {
        type: CAP_NHAT_SV,
        sv
    }
}

export const timSinhVien = (hoTen) => { 
    return {
        type: TIM_SV,
        hoTen
    }
 }