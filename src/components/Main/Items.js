import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemsContext from "../../context/Items/ItemsContext";

export default function Items() {
  // ITEMS CONTEXT IMPORT
  const itemsCtx = useContext(ItemsContext);
  // DESCTRUCTURING OF ITEMS CONTEXT
  const { items, getItems, deleteItem } = itemsCtx;
  // OBTAIN INFORMATION FOR ALL ITEMS
  useEffect(() => {
    getItems();
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

    const sum = qtyArr.reduce((a, b) => a + b);
    // console.log(sum);

    uniqueItemsCollection.push({
      name: uniqueItem,
      description: description,
      image: image,
      sum: sum,
      entries: locations,
    });
  }

  console.log(uniqueItemsCollection);

  const [toggleDetails, setToggleDetails] = useState(false);

  const handleClick = (event) => {
    setToggleDetails(!toggleDetails);
  };

  return (
    <>
      <h1>All Items</h1>
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

          {/* {toggleDetails ? <h1>Abierto</h1> : <h1>Cerrado </h1>} */}

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

          {/* <Link to={`/items/${item._id}/edit`}>Edit Item</Link>
          <form action={`/items/${item._id}/delete`} method="post">
            <button type="submit">Delete Item</button>
          </form> */}
        </div>
      ))}
    </>
  );
}
