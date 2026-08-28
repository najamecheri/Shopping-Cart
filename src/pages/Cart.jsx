import CartSummary from "../components/CartSummary.jsx"
import {useNavigate} from "react-router-dom"
import {useCart} from "../context/CartContext.jsx"
import Cartitem from "../components/Cartitem.jsx"


export default function Cart() {

    const  navigate = useNavigate();
    const {state} = useCart()
    const {cartItems} = state;


    if (cartItems.length === 0) {
        return(
            <div>
                <h1>Your BigMart cart is empty</h1>
                <button onClick={() => navigate('/')}>Go to Home</button>
            </div>
        )
    }

    return(
       <div>
          <div>
            <div>
                <h1 onClick={() => navigate('/')}> Home &gt;</h1>
                <h2>Cart</h2>
            </div>

            <h1>YOUR CART</h1>
          </div>

          <div>
            <div>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item}/>
                ))}
            </div>

            <div>
                <CartSummary/>
            </div>
          </div>
       </div>
    )
}