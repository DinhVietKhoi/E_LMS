import React, { useState } from 'react'
import '../sass/account.scss'
import avatar from '../assets/avatar.png'
import camera from '../assets/camera.png'
import info from '../assets/info.png'
function Account() {
  //Tao useState 2 class thong tin ca nhan va doi mat khau 
  const [classInfo,setClassInfo] = useState("account__control-info active")
  const [classChange,setClassChange] = useState("account__control-change")
  //Kiem tra nguoi dung chon thong tin ca nhan hoac doi mat khau de reder du lieu tuong ung
  const [checkHandle,setCheckHandle] = useState(false)
  //ham xu ly doi class va doi render du lieu
  const HandleChangeClass = ()=>{
    setCheckHandle(!checkHandle)
    setClassInfo("account__control-info active")
    setClassChange("account__control-change")
  }
  const HandleChangeClass1 = ()=>{
    setCheckHandle(!checkHandle)
    setClassInfo("account__control-info")
    setClassChange("account__control-change active")
  }
  return (
    <div className='account'>
      <div className='account__container'>
        <h1 className='title'>
          Thông tin người dùng
        </h1>
        <div className='account__control'>
          <div className='account__control-group'>
            <div className={classInfo} onClick={HandleChangeClass}>
              <span>Thông tin cá nhân</span>
            </div>
            <div className={classChange} onClick={HandleChangeClass1}>
              <span>Thay đổi mật khẩu</span>
            </div>
          </div>
          {
            !checkHandle
            &&
            <div className='account__control-edit'>
              <button>Chỉnh sửa </button>
            </div>
          }
        </div>
        <div className='account__box'>
          <div className='account__box-head'>
            {
              !checkHandle?<span>Thông tin chung</span>:<span>Thay đổi mật khẩu</span>
            }
          </div>
          {
            !checkHandle
            &&
            <div className='account__box-body'>
              <div className='account__box-body-container'>
                <div className='account__box-avatar'>
                  <div className='account__box-avatarr'>
                    <img src={avatar}></img>
                    <img src={camera}></img>
                  </div>
                </div>
                <div className='account__box-info'>
                  <div className='account__box-group'>
                    <span>Mã người dùng:</span>
                    <input value="AD1235" disabled></input>
                  </div>
                  <div className='account__box-group'>
                    <span>Tên người dùng:</span>
                    <input value="admin123" disabled></input>
                  </div>
                  <div className='account__box-group'>
                    <span>Giới tính:</span>
                    <div>
                      <select disabled>
                        <option>Nam</option>
                        <option>Nữ</option>
                      </select>
                    </div>
                  </div>
                  <div className='account__box-group'>
                    <span>Số điện thoại:</span>
                    <input value="0324616485" disabled></input>
                  </div>
                  <div className='account__box-group'>
                    <span>Vai trò:</span>
                    <input value="Quản lý" disabled></input>
                  </div>
                  <div className='account__box-group'>
                    <span>Địa chỉ:</span>
                    <input disabled value="86/33 Âu Cơ, phường 9, quận Tân Bình, Thành phố Hồ Chí Minh"></input>
                  </div>
                  <div className='account__box-group'>
                    <span>Email:</span>
                    <input disabled value="admin123@school.com.vn"></input>
                  </div>
                </div>
              </div>
            </div>
          }
          {
            checkHandle
            &&
            <div className='account__box-body'>
              <div className='account__box-body-container'>
                <div className='account__box-change'>
                  <div className='account__box-change-group'>
                    <span>Mật khẩu hiện tại:<span>*</span></span>
                    <input type='password'></input>
                  </div>
                  
                  <div className='account__box-change-group'>
                    <span>Mật khẩu mới:<span>*</span></span>
                    <input type='password'></input>
                  </div>

                  <div className='account__box-change-group'>
                    <span>Nhập lại mật khẩu mới:<span>*</span></span>
                    <input type='password'></input>
                  </div>
                </div>
                <div className='account__box-notifi'>
                  <img src={info}></img>
                  <div className='account__box-notifi-text'>
                    <span>Mật khẩu phải có ít nhất 8 ký tự bao gồm: </span>
                    <span>- Chữ cái</span>
                    <span>- Số </span>
                    <span>- Chữ cái viết hoa</span>
                    <span>- Chữ cái viế thường </span>
                    <span>- Các ký tự đặc biệt như ! ~ / ) * ^ $ &...</span>
                  </div>
                </div>
              </div>
              <div className='account__box-handle'>
                <button className='btn'>Huỷ</button>
                <button className='btn active'>Lưu</button>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Account