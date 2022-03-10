// ./src/components/Main/Items.js

// EXTERNAL PACKAGE IMPORTS
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// INTERNAL IMPORTS
import ItemsContext from "../../context/Items/ItemsContext";

export default function Items(props) {
  // ITEMS CONTEXT IMPORT
  const itemsCtx = useContext(ItemsContext);
  // DESCTRUCTURING OF ITEMS CONTEXT
  const { items, getItems, deleteItem } = itemsCtx;
  // OBTANING USER FROM PROPS
  const { user } = props;
  // OBTAIN NAVIGATE FUNCTION
  const navigate = useNavigate()
  // OBTAIN INFORMATION FOR ALL ITEMS
  useEffect(() => {
    getItems(user);
  }, []);
  console.log(items);
  // ARRAY OF UNIQUE ITEM NAMES
  const uniqueItemNames = [];
  // OBTAIN UNIQUE NAME LIST
  for (const item of items) {
    if (!uniqueItemNames.includes(item.name)) {
      uniqueItemNames.push(item.name);
    }
  }
  // ARRAY OF UNIQUE ITEMS WITH TOTAL SUM
  const uniqueItemsCollection = [];

  // OBTAIN ARRAY OF UNIQUE ITEMS WITH TOTAL SUM AND LOCATION DETAIL
  for (const uniqueItem of uniqueItemNames) {
    // STORE ITEM PROPERTIES
    let image;
    let description;
    // STORE ALL LOCATIONS FOR EACH ITEM
    const locations = [];
    // DUMMY ARRAY TO STORE ALL LOCATION QUANTITIES
    const qtyArr = [];
    // console.log(qtyArr);

    for (const item of items) {
      if (item.name === uniqueItem) {
        // SEND ALL QUANTITIES MATCHING THE ITEM NAME TO QTY ARRAY
        qtyArr.push(item.quantity);

        // DUMMY ARRAY TO STORE ALL LOCATION DETAILS
        const entriesObj = {};
        entriesObj._id = item._id;
        entriesObj.name = item.locations[0].name;
        entriesObj.description = item.locations[0].description;
        entriesObj.image = item.locations[0].image;
        entriesObj.quantity = item.quantity;
        locations.push(entriesObj);

        // REDEFINE ITEM PROPERTIES
        image = item.image;
        description = item.description;
      }
    }

    const entries = qtyArr.length;
    const sum = qtyArr.reduce((a, b) => a + b);
    // console.log(sum);

    uniqueItemsCollection.push({
      name: uniqueItem,
      description: description,
      image: image,
      sum: sum,
      entries: entries,
      locations: locations,
    });
  }

  console.log(uniqueItemsCollection);

  const [toggleDetails, setToggleDetails] = useState(false);

  const handleClick = (event) => {
    setToggleDetails(!toggleDetails);
  };

  return (
    <>
      {/* <h1>All Items</h1>
      {uniqueItemsCollection.map((item) => (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <h3>{item.description}</h3>
          <img src={item.image} width="300px" />
          <p>
            <b>Total Qty:</b>
            {item.sum}
          </p>
          <button onClick={(event) => handleClick(event)}>View Details</button>


          {toggleDetails &&
            item.entries.map((a) => (
              <div key={a._id}>
                <br />
                <h5>{a.name}</h5>
                <h6>{a.description}</h6>
                <img src={a.image} width="100px" />
                <p>
                  <b>Qty:</b>
                  {a.quantity}
                </p>
                <Link to={`/items/${a._id}/edit`}>Edit Item</Link>
                <button onClick={() => deleteItem(a._id)}>Delete Item</button>
              </div>
            ))}

        </div>
      ))} */}

      {/* TITLE */}
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Items
              </h2>
            </div>

            {/* CARDS */}
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {uniqueItemsCollection?.map((item) => (
                <li key={item.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img
                        className="object-cover shadow-lg rounded-lg"
                        src={item.image}
                        alt="location-img"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-sm text-indigo-600">
                          {item.description}
                        </p>
                        <span className="font-semibold">Total Quantity: </span>
                        <span>{item.sum} </span>
                        <br />
                        <span className="font-semibold">Entries: </span>
                        <span>{item.entries} </span>
                      </div>
                      <button
                        onClick={(event) => handleClick(event)}
                        className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-black bg-gray-200 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        View Details
                      </button>

                      <div className="divide-y">
                        {toggleDetails &&
                          item.locations.map((a) => (
                            <div key={a._id}>
                              <br />
                              <h5 className="text-base font-bold">{a.name}</h5>
                              <h6 className="text-sm">{a.description}</h6>
                              <img
                              src={a.image}
                              width="100px"
                              className="object-cover shadow-lg rounded-lg"
                              alt="location-img" />
                              <span className="font-bold">Qty: </span>
                              <span>{a.quantity}</span>
                              <br />
                              <Link
                              to={`/items/${a._id}/edit`}
                              className="my-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >Edit Item</Link>
                              <button
                              onClick={() => {
                                deleteItem(a._id);
                                getItems(user)
                                navigate('/locations')}}
                              className="mx-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Delete Item
                              </button>
                            </div>
                          ))}
                      </div>

                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
