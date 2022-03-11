import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemsContext from "../../context/Items/ItemsContext";

export default function ItemEdit(props) {
  console.log(props.params);
  // ITEMS CONTEXT IMPORT
  const itemsCtx = useContext(ItemsContext);
  // DESCTRUCTURING OF ITEMS CONTEXT
  const { items, getItem, updateItem } = itemsCtx;
  // OBTAIN USER ID FROM PROPS
  const id = props.params;
  // OBTAIN NAVIGATE FUNCTION
  const navigate = useNavigate();
  //QUERY LOCATION
  useEffect(() => {
    getItem(id);
    setFormData({
      name: items[0].name,
      description: items[0].description,
      image: items[0].name,
      quantity: items[0].quantity,
      _id: id,
    });
  }, []);

  // console.log(items);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    quantity: "",
    _id: "",
  });

  // FORM CHANGE HANDLER
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  // FORM SUBMIT HANDLER
  const handleSubmit = (event) => {
    // PREVENTS RELOADING OF PAGE
    event.preventDefault();
    // SENDS SIGN UP REQUEST TO THE BACKEND
    updateItem(formData);
    // REDIRECT TO ITEMS
    navigate(-1);
  };

  return (
    <>
      <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/items"
          className="mt-10 inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Back to Items
        </Link>
        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 className="mt-10 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Edit Item
          </h2>
          <form
            onSubmit={(evt) => {
              handleSubmit(evt);
            }}
          >
            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  value={formData.name}
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                />
              </div>
            </div>
            {/* DESCRIPTION */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <input
                  id="description"
                  name="description"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  value={formData.description}
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                />
              </div>
            </div>

            {/* IMAGE */}
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <div className="mt-1">
                <input
                  id="image"
                  name="image"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  value={formData.image}
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                />
              </div>
            </div>

            {/* QUANTITY */}
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <div className="mt-1">
                <input
                  id="quantity"
                  name="quantity"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  value={formData.quantity}
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                />
              </div>
            </div>

            <br />
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
