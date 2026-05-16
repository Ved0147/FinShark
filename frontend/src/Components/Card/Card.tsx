import React, { JSX } from 'react'
import './Card.css'

interface Props {
  companyName : string
  ticker : string
  price : number
}

const Card:React.FC<Props> = ({companyName,ticker,price}: Props) :JSX.Element=> {
  return (
    <div className="card">
        <img src="/Desktop .jpg" alt="Image" height="180" width="280"/>
        <div className="details">
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className="info">
            finshark is a financial technology company that provides a platform for individuals 
            and businesses to manage their finances, track expenses, and make informed financial decisions.
        </p>
    </div>
  )
}

export default Card