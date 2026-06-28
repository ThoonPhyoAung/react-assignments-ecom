// Table
// Product Name | Price | Qty | Total Amount

import { useEffect, useRef, useState } from "react";

const Create = () => {
  // save data
  const [products, setProduct] = useState([]);
  const nameRef = useRef("");
  const priceRef = useRef("");
  const qtyRef = useRef("");

  //  check errors
  const [errors, setErrors] = useState([]);

  const validateData = () => {
    let errs = {};
    if (nameRef.current.value == "")
      errs["name"] = "Product's Name is required.";
    if (priceRef.current.value == "")
      errs["price"] = "Product's Price is required.";
    if (qtyRef.current.value == "") errs["qty"] = "Product's qty is required.";
    setErrors(errs);
    return errs;
  };

  // edit product
  const [isEdit, setIsEdit] = useState(false);
  const editProduct = (id) => {
    setIsEdit(true);
    setEditId(id);

    // get product by id
    let editProductData = products.filter((product) => product.id === id);
    // checking data of editproduct before edit
    if (editProductData.length > 0) {
      // if have data , get and prepare to edit
      let data = editProductData[0];
      console.log("edit data", data);

      // current input data clear and replace with edit prdouct data
      nameRef.current.value = data.name;
      priceRef.current.value = data.price;
      qtyRef.current.value = data.qty;
    } else {
      console.log("post not found");
    }
  };

  // update product
  const [editId, setEditId] = useState(null); // to get product id
  const updateProduct = (id) => {
    // checking errors
    const err = validateData();
    console.log(err);
    if (Object.keys(err).length > 0) {
      return;
    } else {
      if (id) {
        let updateName = nameRef.current.value;
        let updatePrice = Number(priceRef.current.value);
        let updateQty = Number(qtyRef.current.value);
        let updateTotalAmount = updatePrice * updateQty;

        // save update product  data to store data
        let updateProducts = products.map((product) => {
          if (id === product.id) {
            return {
              //extract object and add updated data, so return object
              ...product,
              name: updateName,
              price: updatePrice,
              qty: updateQty,
              totalAmount: updateTotalAmount,
            };
          } else {
            return product; // return product(object)
          }
        });
        setProduct(updateProducts);
        nameRef.current.value = "";
        priceRef.current.value = "";
        qtyRef.current.value = "";
        setIsEdit(false);
        setEditId(null);
      }
    }
  };

  // delete product
  const deleteProduct = (id) => {
    let leftProducts = products.filter((product) => product.id !== id);
    setProduct(leftProducts);
    // console.log(products);
  };

  // to see new product create
  useEffect(() => {
    console.log("Created Product", products);
  }, [products]);

  // create producdt >>> Main
  const createProduct = () => {
    // checking errors
    const err = validateData();
    console.log(err);
    if (Object.keys(err).length > 0) {
      return;
    }

    let name = nameRef.current.value;
    let price = Number(priceRef.current.value);
    let qty = Number(qtyRef.current.value);
    let totalAmount = price * qty;

    // new product
    let newProduct = { id: Date.now(), name, price, qty, totalAmount };

    console.log("old producdts : ", products);
    console.log("save new product : ", newProduct);

    // save new product to existing store data
    setProduct([...products, newProduct]);

    // refreshing input after save
    nameRef.current.value = "";
    priceRef.current.value = "";
    qtyRef.current.value = "";
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white space-y-6 shadow-xl/30 inset-shadow-xs  border-gray rounded-md my-9 ">
      <h1 className="text-2xl font-bold text-gray-800">Create Your Products</h1>

      {/* Input Block 1 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product's Name
        </label>
        <input
          type="text"
          id="name"
          defaultValue=""
          ref={nameRef}
          className="w-full border border-gray-300 rounded p-2 text-sm"
        />
        {errors && errors.name && (
          <div className="text-red-500 text-xs mt-1">{errors.name}</div>
        )}
      </div>

      {/* Input Block 2 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price
        </label>
        <input
          type="number"
          id="price"
          defaultValue=""
          ref={priceRef}
          className="w-full border border-gray-300 rounded p-2 text-sm"
        />
        {errors && errors.price && (
          <div className="text-red-500 text-xs mt-1">{errors.price}</div>
        )}
      </div>

      {/* Input Block 3 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Qty
        </label>
        <input
          type="number"
          id="qty"
          defaultValue=""
          ref={qtyRef}
          className="w-full border border-gray-300 rounded p-2 text-sm"
        />
        {errors && errors.qty && (
          <div className="text-red-500 text-xs mt-1">{errors.qty}</div>
        )}
      </div>

      {/* Buttons */}
      <div className="pt-2">
        {isEdit ? (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700"
            onClick={() => updateProduct(editId)}
          >
            Update
          </button>
        ) : (
          <button
            className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-500"
            onClick={createProduct}
          >
            Create Product
          </button>
        )}
      </div>

      {/* Showing Products Table */}
      <h1 className="text-xl font-bold text-gray-800 pt-6">Products Listing</h1>

      <table className="w-full border-collapse border border-gray-200 text-sm text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 p-2">Product Name</th>
            <th className="border border-gray-200 p-2">Price</th>
            <th className="border border-gray-200 p-2">Qty</th>
            <th className="border border-gray-200 p-2">Total Amount</th>
            <th colSpan="2" className="border border-gray-200 p-2 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products && products.length > 0 ? (
            products.map((product, index) => {
              return (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-2">{product.name}</td>
                  <td className="border border-gray-200 p-2">
                    {product.price}ks
                  </td>
                  <td className="border border-gray-200 p-2">{product.qty}</td>
                  <td className="border border-gray-200 p-2">
                    {product.totalAmount}ks
                  </td>

                  <td className="border border-gray-200 p-2 text-center">
                    <button
                      className="text-blue-600 font-medium hover:underline"
                      onClick={() => editProduct(product.id)}
                    >
                      Edit
                    </button>
                  </td>

                  <td className="border border-gray-200 p-2 text-center">
                    <button
                      className="text-red-600 font-medium hover:underline"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th
                colSpan="6"
                className="border border-gray-200 p-4 text-center text-gray-400 font-normal"
              >
                no record
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Create;
