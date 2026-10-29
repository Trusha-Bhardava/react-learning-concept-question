
function RenderList()
{
    const product =[ "Laptop","Mouse","Keyboard","Monitor"];

    return (
        <div>
            <h1>products</h1>
           {product.map ((product,index) => 
           (
            <h2 key={index}>{product}</h2>
        ))}

        {/* each item we give Give each product its own color , Add a button beside each product
 Add an image, Add a price, Add a description */}
        </div>
    )
}

export default RenderList;