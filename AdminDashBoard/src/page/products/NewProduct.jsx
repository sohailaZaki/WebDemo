import React, { useState } from 'react'

export default function NewProduct() {
     const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState(''); const [category, setCategory] = useState('');
    const [stock, setstock] = useState(0);
    const [seller, setSeller] = useState('');
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const categories=[
        "MakeUp","SkinCare","Perfum"
    ]

  return (
    <div>
      
    </div>
  )
}
