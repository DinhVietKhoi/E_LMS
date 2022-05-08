import React, { useState } from 'react'
import SelectBox from '../components/SelectBox'
import right from '../assets/right.png'
import list from '../assets/list.png'
import testPanigaiton from '../assets/testPanigaiton.png'
import '../sass/subject.scss'
import Search from '../components/Search'

function SubjectManagement({checkChild}) {
  const arr = ['2016-2017','2017-2018','2018-2019','2019-2020','2020-2021']
  const arr1 = ['Thương mại điện tử','Nguyên lý kế toán','Hệ thống thông tin','Luật thương mại','Ngân hàng ']
  const arr2 = ['   Nguyễn Văn A','   Nguyễn Văn C','   Văn Thị B']
  const arr3 = ['   Đã phê duyệt','   Chờ phê duyệt']
  //kiem tra nguoi dung co click vao link mon hoc nao khong
  const [checkSubject,setCheckSubject] = useState(false)
  return (
    <div className='subject'>
      <div className='subject__address'>
        <span>Quản lý môn học</span>
        <img src={right}></img>
        {
          checkChild===0&&!checkSubject?<span>Danh sách môn học</span>:checkChild===1&&!checkSubject?<span>Danh sách tài liệu</span>:<span>Mon hoc</span>
        }
      </div>
      {
        checkChild===0&&<div className='subject__list'>
        <div className='subject__school-year'>
          <span>Niên khoá</span>
          <SelectBox arr={arr} value='2020-2021'/>
        </div>
        <div className='subject__box'>
          <div className='subject__box-head'>
            <div className='subject__box-head-left'>
              <div className='subject__box-group'>
                <span>Môn học</span>
                <SelectBox arr={arr1} value='Tất cả môn học'/>
              </div>
              <div className='subject__box-group'>
                <span>Giảng viên</span>
                <SelectBox arr={arr2} value='Tất cả giảng viên'/>
              </div>
              <div className='subject__box-group'>
                <span>Tình trạng tài liệu</span>
                <SelectBox arr={arr3} value='Tất cả tình trạng'/>
              </div>
            </div>
            <Search />
          </div>
          <div className='subject__box-body'>
          <table  className='subject__box-table'>
            <thead>
              <tr>
                <th >Mã môn học</th>
                <th>Tên môn học</th>
                <th>Giảng viên</th>
                <th>Số tài liệu chờ duyệt</th>
                <th>Tình trạng tài liệu môn học</th>
                <th>Ngày gửi phê duyệt</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                  <tr>
                    <td>2020-6A</td>
                    <td>Thương mại điện tử</td>
                    <td>Nguyễn Văn A</td>
                    <td>15/20</td>
                    <td>Chờ phê duyệt</td>
                    <td>12/02/2021</td>
                    <td><img src={list}></img></td>
                  </tr>
                  <tr>
                    <td>2020-6A</td>
                    <td>Thương mại điện tử</td>
                    <td>Nguyễn Văn A</td>
                    <td>15/20</td>
                    <td>Chờ phê duyệt</td>
                    <td>12/02/2021</td>
                    <td><img src={list}></img></td>
                  </tr>
                  <tr>
                    <td>2020-6A</td>
                    <td>Thương mại điện tử</td>
                    <td>Nguyễn Văn A</td>
                    <td>15/20</td>
                    <td>Chờ phê duyệt</td>
                    <td>12/02/2021</td>
                    <td><img src={list}></img></td>
                  </tr>
                  <tr>
                    <td>2020-6A</td>
                    <td>Thương mại điện tử</td>
                    <td>Nguyễn Văn A</td>
                    <td>15/20</td>
                    <td>Chờ phê duyệt</td>
                    <td>12/02/2021</td>
                    <td><img src={list}></img></td>
                  </tr>
                  <tr>
                    <td>2020-6A</td>
                    <td>Thương mại điện tử</td>
                    <td>Nguyễn Văn A</td>
                    <td>15/20</td>
                    <td>Chờ phê duyệt</td>
                    <td>12/02/2021</td>
                    <td><img src={list}></img></td>
                  </tr>
            </tbody>
          </table>
          <div className='subject__box-bottom'>
            <div className='subject__box-bottom-left'>
              <span>Hiển thị</span>
              <input value='8'></input>
              <span>hàng trong mỗi trang</span>
            </div>
            <div className='subject__box-bottom-right'>
              <img src={testPanigaiton}></img>
            </div>
          </div>
          </div>
        </div>
      </div>
      }
      {
        checkChild===1&&<div>Danh sách tài liệu</div>
      }
    </div>
  )
}

export default SubjectManagement