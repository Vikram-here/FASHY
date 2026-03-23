import React, { useContext, useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
const Product = () => {
  const {productId}=useParams();
    

  const {products}=useContext(ShopContext);
  const  [product,setProduct]=useState( [
      {
          _id: "aaaaa",
          name: "Women Round Neck Cotton Top",
          description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 100,
          image: [p_img1],
          category: "Women",
          subCategory: "Topwear",
          sizes: ["S", "M", "L"],
          date: 1716634345448,
          bestseller: false
      },
      {
          _id: "aaaab",
          name: "Men Round Neck Pure Cotton T-shirt",
          description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 200,
          image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
          category: "Men",
          subCategory: "Topwear",
          sizes: ["M", "L", "XL"],
          date: 1716621345448,
          bestseller: false
      },
      {
          _id: "aaaac",
          name: "Girls Round Neck Cotton Top",
          description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 220,
          image: [p_img3],
          category: "Kids",
          subCategory: "Topwear",
          sizes: ["S", "L", "XL"],
          date: 1716234545448,
          bestseller: true
      },
      {
          _id: "aaaad",
          name: "Men Round Neck Pure Cotton T-shirt",
          description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 110,
          image: [p_img4],
          category: "Men",
          subCategory: "Topwear",
          sizes: ["S", "M", "XXL"],
          date: 1716621345448,
          bestseller: true
      },
      {
          _id: "aaaae",
          name: "Women Round Neck Cotton Top",
          description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 130,
          image: [p_img5],
          category: "Women",
          subCategory: "Topwear",
          sizes: ["M", "L", "XL"],
          date: 1716622345448,
          bestseller: true
      },
      {
          _id: "aaaaf",
          name: "Girls Round Neck Cotton Top",
          description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 140,
          image: [p_img6],
          category: "Kids",
          subCategory: "Topwear",
          sizes: ["S", "L", "XL"],
          date: 1716623423448,
          bestseller: true
      },
      {
          _id: "aaaag",
          name: "Men Tapered Fit Flat-Front Trousers",
          description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 190,
          image: [p_img7],
          category: "Men",
          subCategory: "Bottomwear",
          sizes: ["S", "L", "XL"],
          date: 1716621542448,
          bestseller: false
      },
      {
          _id: "aaaah",
          name: "Men Round Neck Pure Cotton T-shirt",
          description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 140,
          image: [p_img8],
          category: "Men",
          subCategory: "Topwear",
          sizes: ["S", "M", "L", "XL"],
          date: 1716622345448,
          bestseller: false
      },
      {
          _id: "aaaai",
          name: "Girls Round Neck Cotton Top",
          description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 100,
          image: [p_img9],
          category: "Kids",
          subCategory: "Topwear",
          sizes: ["M", "L", "XL"],
          date: 1716621235448,
          bestseller: true
      },
      {
          _id: "aaaaj",
          name: "Men Tapered Fit Flat-Front Trousers",
          description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          price: 110,
          image: [p_img10],
          category: "Men",
          subCategory: "Bottomwear",
          sizes: ["S", "L", "XL"],
          date: 1716622235448,
          bestseller: false
      }
      
  
  ]

  )
  const [productData,setProductData]=useState(false );
  const [image,setImage]=useState('')

const fetchData = async()=>{
  product.map(item => {
  if (item._id.toString() === productId) {
    setProductData(item);
  }
});
}


useEffect(()=>{
  fetchData();
  },[productId])

  useEffect(() => {
   console.log(productData)
}, [productData]);
  return  productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
            {/* product image */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
              <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                  
                   {
                    
                    productData.image.map((item,index)=>(
                      <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt=''></img>
                    ))
                   }
              </div>
            </div>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product

