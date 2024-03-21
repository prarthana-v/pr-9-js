let product = [
     {
          id:1,name:"Plain Dosa", image:'97.jpg', price:40, qty:1,
     }
     ,{
          id:2, name:"Masala cheese Dosa", image:'98.jpg',price:60, qty:1,
     },
     {
          id:3, name:"paneer chilli",image:'99.jpg',price:80, qty:1,
     },
     {
          id:4, name:"paneer chilli",image:'100.jpg', price:100,qty:1,
     },
];
// view of cards in index.html
let tbl1="";
const  viewcart=()=>{
     product.map((item)=>{
          return tbl1 += `
          <div class="col-3 px-3">
               <div class="card">
                    <img src="assets/img/${item.image}" class="card-img-top" style="padding: 10px;border-radius: 10px;height:300px;object-fit:cover;" alt="...">

                    <div class="card-body">
                         <h5 class="card-title">${item.name}</h5>
                         <div class="d-flex justify-content-between pt-2">
                              <button class="btn btn-primary" onclick="addtocart(${item.id})">Add to Cart</button>
                              <p style="font-size: 18px;font-weight: 400;" class="mb-0">Rs.${item.price}</p>
                         </div>
                    </div>
               </div>
          </div>`
     })
     document.getElementById('cart-cards').innerHTML=tbl1;
}
viewcart();

let cart=[];

const addtocart=(id)=>{
     
          product.map((item)=>{
               if(item.id==id){
                    
                    cart.push(item);
               }
          })
          alert('added to localstorage.');
     
          localStorage.setItem('cart',JSON.stringify(cart));
    

    

}

const viewAddeditems=()=>{

     let products = JSON.parse(localStorage.getItem('cart'));
     //console.log(products);
     let tbl2="";
    
     products.map((item)=>{ 
              return (
               tbl2 += `
               <div class="col-12 d-flex px-1 py-1">
                    <div class="col-3">
                         <img src="assets/img/${item.image}" class="img-fliud p-2" style="width: 100%;height: 100%;object-fit: cover;border: 1px solid #dedede;border-radius: 4px;" alt="" srcset="">
                    </div>
                    <div class="col-5">
                         <div class="details px-4">
                              <p class="mb-0 text-danger fw-bold">${item.name}</p>
                              <p class="mb-0 text-secondary fw-normal" >${item.price}</p>
                              <input class="mb-0" type="number" value="1" style="width: 50px;">
                         </div>
                    </div>
                    <div class="col-2  d-flex align-items-center">
                         <div class="total fw-bold">${item.price*item.qty}</div>
                    </div>
                    <div class="col-2 d-flex align-items-center">
                         <button class="btn btn-danger" onclick="deleteitem(${item.id})">X</button>
                    </div>
          </div>
               ` 
              )
     })
     document.getElementById('cart').innerHTML = tbl2;
}
viewAddeditems();

  
const deleteitem=(id)=>{
     let allitems = JSON.parse(localStorage.getItem('cart'));
     
     let deleteditems = allitems.filter((val)=>{
          return val.id != id;
     })
     console.log(deleteditems);
     localStorage.setItem('cart',JSON.stringify(deleteditems));
     viewAddeditems();
}
//view of cart on offcanvas



