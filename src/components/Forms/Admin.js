// create product

export const  CreateProductForm=()=> {
    return (
      <form>
        <label htmlFor="product-name">Product Name</label>
        <input type="text" id="product-name"/>

        <label htmlFor="price">Price</label>
        <input type="text" id="price"/>

        <label htmlFor="description">Description</label>
        <input type="text" id="description"/>        
      </form>
    );
}