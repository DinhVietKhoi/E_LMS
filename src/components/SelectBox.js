import React from 'react'
import '../sass/selectBox.scss'
import down from '../assets/down.png'

function SelectBox({arr,value}) {
    console.log('mang',arr)
    return (
        <div className='select'>
            <img src={down}></img>
            <select >
                <option selected disabled hidden>{value}</option>
                {
                    arr.map((l,i)=>[
                        <option value={l} key={i}>{l}</option>
                    ])
                }
            </select>
        </div>                                           
    )
}

export default SelectBox