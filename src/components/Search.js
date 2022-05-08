import React from 'react'
import '../sass/search.scss'
import search from '../assets/search.png'
function Search() {
  return (
    <div className='search'>
        <div className='search__container'>
            <input placeholder='Tìm kết quả theo tên, lớp, môn học,...'></input>
            <img src={search}></img>
        </div>
    </div>
  )
}

export default Search