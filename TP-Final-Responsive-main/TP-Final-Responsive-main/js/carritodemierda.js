const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})


const cartInfo=document.querySelector('.cart-product')
const rowProduct= document.querySelector('.row-product')

//lista de contenedores de productos
const productsList=document.querySelector('.container-items')

//variable de arreglos de productos
let allProducts=[]
const valorTotal=document.querySelector('.total-pagar')
const countProducts=document.querySelector('#contador-productos')
productsList.addEventListener('click', e=> {
    
    if(e.target.classList.contains('btn-add-cart')){
        const product=(e.target.parentElement)
        const inforProduct={
        quantity:1,
        title:(product.querySelector('h2').textContent),
        price:(product.querySelector('p').textContent),
        }
        const exists=allProducts.some(product=>product.title===inforProduct.title)
        if(exists){
            const products=allProducts.map(product=>{
                if(product.title===inforProduct.title){
                    product.quantity++;
                    return product;
                }
                else{
                    return product;

                }
                
            })
            allProducts=[...products]
        }else{
        allProducts=[...allProducts, inforProduct]}

        showHTMl();
        
    }
 

});
rowProduct.addEventListener('click',(e)=>{
    if(e.target.classList.contains('icon-close')){
        const product=e.target.parentElement
        const title =product.querySelector('p').textContent

        allProducts=allProducts.filter(product=>product.title !==title);
        showHTMl()
    }

})

//funcion para mostrar HTML

const showHTMl=()=>{
    //limpiar HTML
    rowProduct.innerHTML='';

    let total=0;
    let totalOfProducts=0;

    allProducts.forEach(product=>{
        const containerProduct=document.createElement('div')
        containerCartProducts.classList.add('cart-product')
        containerProduct.innerHTML= `
        <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
            
        
            `

            rowProduct.append(containerProduct)

            total=total+parseInt(product.quantity * product.price.slice(1));
            totalOfProducts=totalOfProducts+product.quantity;
    });
    valorTotal.innerText =`$${total}`;
    countProducts.innerText=totalOfProducts;
};