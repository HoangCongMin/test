import React from 'react'
import {useQuery} from'@tanstack/react-query'
import {getProductDetails} from'../../apis/Product.api'
import {useParams} from'react-router-dom'
import { Helmet } from 'react-helmet'



export default function Product() {

  const {id}=useParams()
  const {data:detail_item}=useQuery({
    queryKey: ['Product_item_detail',id],
    queryFn: ()=> getProductDetails(id)
    
  })

  console.log(detail_item?.data?.data)
  return (
    <div>
      <Helmet>
      <title>Product Item</title>
      <meta name="description" content="Mô tả trang chủ" />
        <meta property="og:title" content="Tiêu đề Open Graph" />
        <meta property="og:description" content={detail_item?.data?.data?.name} />
        <meta property="og:image" content={detail_item?.data?.data?.image}/>
        <meta property="og:url" content="https://api-ecom.duthanhduoc.com/" />
      </Helmet>
      <img src={detail_item?.data?.data?.image} alt="" />
      <p>
        {detail_item?.data?.data?.name}
      </p>
    </div>
  )
}
