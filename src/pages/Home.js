import React from 'react'
import '../sass/home.scss'
import down from '../assets/down.png'
import elip1 from '../assets/elip1.png'
import elip3 from '../assets/elip3.png'
import elip2 from '../assets/elip2.png'
import img from '../assets/image.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import play from '../assets/play.png'
import SelectBox from '../components/SelectBox'
function Home() {
  const arr = ['2016-2017','2017-2018','2018-2019','2019-2020','2020-2021']
  return (
    <div className='home'>
      <div className='home__container'>
        <h1 className='title'>
          Trang chủ
        </h1>
        <div className='home__group'>
          <div className='home__school-year'>
            <span>Niên khóa</span>
            <SelectBox arr={arr} value='2020-2021'/>
          </div>
          <div className='home__information'>
            <div className='home__information-box'>
              <img src={elip1}></img>
              <img src={elip2}></img>
              <img src={elip3}></img>
              <div className='home__information-group'>
                <h1>12</h1>
                <span>Môn học</span>
              </div>
            </div>
            <div className='home__information-box'>
              <img src={elip1}></img>
              <img src={elip3}></img>
              <div className='home__information-group'>
                <h1>33</h1>
                <span>Giảng viên</span>
              </div>
            </div>
            <div className='home__information-box'>
              <img src={elip1}></img>
              <img src={elip3}></img>
              <div className='home__information-group'>
                <h1>13</h1>
                <span>Tệp riêng tư</span>
              </div>
            </div>
            <div className='home__information-box'>
              <img src={elip1}></img>
              <img src={elip2}></img>
              <img src={elip3}></img>
              <div className='home__information-group'>
                <h1>132</h1>
                <span>Đề thi</span>
              </div>
            </div>
          </div>
        </div>
        <div className='home__recently'>
          <div className='home__recently-control'>
            <h4>Tài liệu môn học đã xem gần đây</h4>
          </div>
          <div className='home__recently-list'>
            <div className='home__recently-item'>
              <div className='home__recently-img'>
                <img src={img}></img>
                <img src={play}></img>
              </div>
              <div className='home__recently-info'>
                <div className='home__recently-head'>
                  <h3>Phát triển Website</h3>
                  <span>Web Design</span>
                </div>
                <div className='home__recently-bot'>
                  <h3>WEB23</h3>
                  <span>Giảng viên: Hoa Hoa</span>
                </div>
              </div>
            </div>
            <div className='home__recently-item'>
              <div className='home__recently-img'>
                <img src={img}></img>
                <img src={play}></img>
              </div>
              <div className='home__recently-info'>
                <div className='home__recently-head'>
                  <h3>Phát triển Website</h3>
                  <span>Web Design</span>
                </div>
                <div className='home__recently-bot'>
                  <h3>WEB23</h3>
                  <span>Giảng viên: Hoa Hoa</span>
                </div>
              </div>
            </div>
            <div className='home__recently-item'>
              <div className='home__recently-img'>
                <img src={img}></img>
                <img src={play}></img>
              </div>
              <div className='home__recently-info'>
                <div className='home__recently-head'>
                  <h3>Phát triển Website</h3>
                  <span>Web Design</span>
                </div>
                <div className='home__recently-bot'>
                  <h3>WEB23</h3>
                  <span>Giảng viên: Hoa Hoa</span>
                </div>
              </div>
            </div>
            <div className='home__recently-item'>
              <div className='home__recently-img'>
                <img src={img}></img>
                <img src={play}></img>
              </div>
              <div className='home__recently-info'>
                <div className='home__recently-head'>
                  <h3>Phát triển Website</h3>
                  <span>Web Design</span>
                </div>
                <div className='home__recently-bot'>
                  <h3>WEB23</h3>
                  <span>Giảng viên: Hoa Hoa</span>
                </div>
              </div>
            </div>
            <div className='home__recently-item'>
              <div className='home__recently-img'>
                <img src={img}></img>
                <img src={play}></img>
              </div>
              <div className='home__recently-info'>
                <div className='home__recently-head'>
                  <h3>Phát triển Website</h3>
                  <span>Web Design</span>
                </div>
                <div className='home__recently-bot'>
                  <h3>WEB23</h3>
                  <span>Giảng viên: Hoa Hoa</span>
                </div>
              </div>
            </div>
            <div className='home__recently-item'>
              <div className='home__recently-img'>
                <img src={img}></img>
                <img src={play}></img>
              </div>
              <div className='home__recently-info'>
                <div className='home__recently-head'>
                  <h3>Phát triển Website</h3>
                  <span>Web Design</span>
                </div>
                <div className='home__recently-bot'>
                  <h3>WEB23</h3>
                  <span>Giảng viên: Hoa Hoa</span>
                </div>
              </div>
            </div>
            <div className='home__recently-item'>
              <div className='home__recently-img'>
                <img src={img}></img>
                <img src={play}></img>
              </div>
              <div className='home__recently-info'>
                <div className='home__recently-head'>
                  <h3>Phát triển Website</h3>
                  <span>Web Design</span>
                </div>
                <div className='home__recently-bot'>
                  <h3>WEB23</h3>
                  <span>Giảng viên: Hoa Hoa</span>
                </div>
              </div>
            </div>
            <div className='home__recently-item'>
              <div className='home__recently-img'>
                <img src={img}></img>
                <img src={play}></img>
              </div>
              <div className='home__recently-info'>
                <div className='home__recently-head'>
                  <h3>Phát triển Website</h3>
                  <span>Web Design</span>
                </div>
                <div className='home__recently-bot'>
                  <h3>WEB23</h3>
                  <span>Giảng viên: Hoa Hoa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='home__statis'>
          <div className='home__statis-box'>
            <div className='home__statis-head'>
              <h3>Thống kê truy cập</h3>
            </div>
            <div className='home__statis-bot'>
              <div className='home__statis-bot--group'>
                <span>Đang truy cập:</span>
                <span>31</span>
              </div>
              <div className='home__statis-bot--group'>
                <span>Lượt truy cập hôm nay:</span>
                <span>97</span>
              </div>
              <div className='home__statis-bot--group'>
                <span>Lượt truy cập tuần này:</span>
                <span>1,298</span>
              </div>
              <div className='home__statis-bot--group'>
                <span>Lượt truy cập tháng này:</span>
                <span>31</span>
              </div>
              <div className='home__statis-bot--group'>
                <span>Tổng lượt truy cập:</span>
                <span>31</span>
              </div>
            </div>
          </div>
          <div className='home__file'>
            <div className='home__file-control'>
              <h4>Tệp riêng tư tải lên gần đây</h4>
            </div>
            <div className='home__file-list'>
              <div className='home__file-item'>
                <div className='home__file-img'>
                  <img src={img1}></img>
                </div>
                <div className='home__file-info'>
                  <div className='home__file-head'>
                    <h3>Thương mại điện tử là gì.docx</h3>
                    <span>12:01 12/12/2020</span>
                  </div>
                  <div className='home__file-bot'>
                    <h3>Thương mại điện tử</h3>
                    <span>Giảng viên: Hoa Hoa</span>
                  </div>
                </div>
              </div>
              <div className='home__file-item'>
                <div className='home__file-img'>
                  <img src={img2}></img>
                </div>
                <div className='home__file-info'>
                  <div className='home__file-head'>
                    <h3>Thương mại điện tử là gì.docx</h3>
                    <span>12:01 12/12/2020</span>
                  </div>
                  <div className='home__file-bot'>
                    <h3>Thương mại điện tử</h3>
                    <span>Giảng viên: Hoa Hoa</span>
                  </div>
                </div>
              </div>
              <div className='home__file-item'>
                <div className='home__file-img'>
                  <img src={img3}></img>
                </div>
                <div className='home__file-info'>
                  <div className='home__file-head'>
                    <h3>Thương mại điện tử là gì.docx</h3>
                    <span>12:01 12/12/2020</span>
                  </div>
                  <div className='home__file-bot'>
                    <h3>Thương mại điện tử</h3>
                    <span>Giảng viên: Hoa Hoa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home