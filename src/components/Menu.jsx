const Menu = (props) => {
  return (
    <div className="container pt-4">
      <div className="menu space-header">
        {(props.data?.items ?? []).map((item) =>
          item.name === "ITEMCATEGORY" ? (
            <h1 className="category">{item.description}</h1>
          ) : (
            <div className="itemWrap">
              <div className="itemNameWrap">
                <span className="itemName">{item.name}</span>
                <span className="itemMiddle"></span>
                <span className="itemPrice">&#8377;{item.price}</span>
              </div>
              <span className="itemDescription">{item.description}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Menu;
