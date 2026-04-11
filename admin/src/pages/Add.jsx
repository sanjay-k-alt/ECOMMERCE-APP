import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {

  const backendUrl = import.meta.env.VITE_API_URL; // ✅ env se
  const token = localStorage.getItem("token");

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subcategory, setSubcategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subcategory); // ✅ FIXED
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      console.log("URL:", backendUrl + "/api/product/add"); // ✅ debug

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        {
          headers: {
            token: token,
            "Content-Type": "multipart/form-data"
          }
        }
      );

      if (response.data.success) {
        toast.success("Product Added ✅");

        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setSizes([]);
      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">

      <div>
        <p className="mb-2">Upload Images</p>
        <div className="flex gap-2">

          {[image1, image2, image3, image4].map((img, i) => (
            <label key={i} htmlFor={`image${i + 1}`}>
              <img
                className="w-20"
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                alt=""
              />
              <input
                type="file"
                hidden
                id={`image${i + 1}`}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (i === 0) setImage1(file);
                  if (i === 1) setImage2(file);
                  if (i === 2) setImage3(file);
                  if (i === 3) setImage4(file);
                }}
              />
            </label>
          ))}

        </div>
      </div>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border"
        required
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-3 py-2 border"
        required
      />

      <div className="flex gap-3">

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Men</option>
          <option>Women</option>
          <option>Kids</option>
        </select>

        <select value={subcategory} onChange={(e) => setSubcategory(e.target.value)}>
          <option>Topwear</option>
          <option>Bottomwear</option>
          <option>Winterwear</option>
        </select>

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

      </div>

      <div className="flex gap-2">
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <p
            key={size}
            onClick={() =>
              setSizes(prev =>
                prev.includes(size)
                  ? prev.filter(item => item !== size)
                  : [...prev, size]
              )
            }
            className={`px-3 py-1 cursor-pointer ${
              sizes.includes(size) ? "bg-pink-200" : "bg-gray-200"
            }`}
          >
            {size}
          </p>
        ))}
      </div>

      <label>
        <input
          type="checkbox"
          checked={bestseller}
          onChange={() => setBestseller(!bestseller)}
        />
        Bestseller
      </label>

      <button className="bg-black text-white px-4 py-2 mt-3">
        ADD PRODUCT
      </button>

    </form>
  );
};

export default Add;