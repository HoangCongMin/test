import React from 'react'

import {useQuery} from'@tanstack/react-query'
import {getProductList} from'../../apis/Product.api'
import {Link} from'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Home() {

  const {data}=useQuery({
    queryKey: ['Product_item'],
    queryFn: ()=> getProductList()
    
  })

  console.log( )
  return (
    <div>
      <Helmet>
      <title>Product Item</title>
      <meta name="description" content="Mô tả trang chủ" />
        <meta property="og:title" content="Tiêu đề Open Graph" />
        <meta property="og:description" content={data[0]?.data?.data?.name} />
        <meta property="og:image" content={data[0]?.data?.data?.image}/>
        <meta property="og:url" content="https://api-ecom.duthanhduoc.com/" />
      </Helmet>
      {data?.data?.data?.products.map((item)=>(
      <Link to={`/${item._id}`}>
      <img src={item?.image} alt="" />
      <p>
        {item.name}
      </p>
      </Link>
    ))}</div>
  )
}
