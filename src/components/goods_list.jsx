 import SAMSUNG_CURVED from "../img/monitor_samsung_curved.jpg";
 import SAMSUNG_F27T350F from "../img/monitor_samsung_F27T350F.jpg";
 import Heart from "../img/heart.png"
 import Balance from "../img/balance.png"
 import MSI_OPTIX from "../img/msi_optix_g24c4_black.webp";
 import "../style/goods_list.css"

 export function Goods_List(props){
     let goods = [
         {id: 1, product_code: "TF123345", photo: SAMSUNG_CURVED, name: "Монітор 23.5\" Samsung Curved C24F396F", old_price: 5599, new_price: 4899, reviews: 13, discount: 24, specific: "НАЙКРАЩА ЦІНА"},
         {id: 2, product_code: "DK124545", photo: SAMSUNG_F27T350F, name: "Монитор игровой MSI Optix G24C4 Black", old_price: 8299, new_price: 7799, reviews: 37, discount: 31, specific: "НАЙКРАЩА ЦІНА"},
         {id: 3, product_code: "MG424688", photo: SAMSUNG_F27T350F, name: "Монитор 27\" SAMSUNG F27T350F", old_price: 6999, new_price: 5499, reviews: 4, discount: 15, specific: "НАЙКРАЩА ЦІНА"},
  
        ]
    return <div className="block_body">
        {goods.map((good) =>
            <ul key={good.id} className="list">
                <li className="cod_product">Код товару {good.product_code}</li>   
                <li className="image"><img src={good.photo} width="45%"/></li>
                <div className="product_description">
                    <div className="discount_block">
                        <li className="discount">{(good.old_price - good.new_price)/ 100}%</li>   
                        <li className="specific">{good.specific}</li>
                    </div>
                    <li className="name_product">{good.name}</li>
                    <div>
                    {/*<span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>*/}
                        <li className="reviews">{good.reviews} відгуків</li>
                    </div>
                    <li className="reviews"> Ціна:</li>
                    <div className="discount_block">
                        <li className="new_price">{good.new_price} грн</li>
                        <li className="discount_sum">+ {good.old_price - good.new_price} грн кешбек</li>
                    </div>
                    <li className="old_price">{good.old_price} грн</li>
                    <div className="product_apply">
                        <span>
                            <button className="buy">КУПИТИ</button>
                            <a href="#" className="link"><img src={Heart} width="45%"/></a>
                            <a href="#" className="link"><img src={Balance} width="40%"/></a>
                        </span>
                    </div>
                </div>
            </ul>
        )}
     </div>
 };

