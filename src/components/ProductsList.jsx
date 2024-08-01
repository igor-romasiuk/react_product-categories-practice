import Product from './Product';

const ProductsList = ({ users, categories, products }) => {
  return (
    <>
      {products.length === 0 ? (
        <tr>
          <td colSpan="4" className="has-text-centered">
            No products matching selected criteria
          </td>
        </tr>
      ) : (
        products.map(product => {
          const category = categories.find(
            cat => cat.id === product.categoryId,
          );
          const user = users.find(user => user.id === product.ownerId);

          if (!category || !user) {
            return null;
          }

          return (
            <Product
              key={product.id}
              product={product}
              category={category}
              user={user}
            />
          );
        })
      )}
    </>
  );
};

export default ProductsList;
