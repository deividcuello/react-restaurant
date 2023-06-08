import React from 'react'
import './menu.css'

function Menu() {
  return (
    <section id='menu'>
        <div className="menu-container container">
            <h3 className='section-title'>Menu</h3>
            <div className="item-container d-grid gap-1">
                <div className="item">
                    <div className="header">
                        <img src="src/assets/sushi.jpg"/>
                    </div>
                    <div className="body">
                        <h3>Sushi Sashimi</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid at, totam dolorem mollitia hic reiciendis maxime doloribus inventore asperiores. Enim, corporis maiores. Ut fugit dicta, beatae ducimus dolore error facilis.</p>
                    </div>
                    <div className="footer">
                        <button className='btn'>Order now</button>
                    </div>
                </div>
                <div className="item">
                    <div className="header">
                        <img src="src/assets/sandwich.jpg"/>
                    </div>
                    <div className="body">
                        <h3>Beef on weck</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid at, totam dolorem mollitia hic reiciendis maxime doloribus inventore asperiores. Enim, corporis maiores. Ut fugit dicta, beatae ducimus dolore error facilis.</p>
                    </div>
                    <div className="footer">
                        <button className='btn'>Order now</button>
                    </div>
                </div>
                <div className="item">
                    <div className="header">
                        <img src="src/assets/pizza.jpg"/>
                    </div>
                    <div className="body">
                        <h3>BBQ Chicken Pizza</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid at, totam dolorem mollitia hic reiciendis maxime doloribus inventore asperiores. Enim, corporis maiores. Ut fugit dicta, beatae ducimus dolore error facilis.</p>
                    </div>
                    <div className="footer">
                        <button className='btn'>Order now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu