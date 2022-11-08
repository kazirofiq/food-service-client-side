import React from 'react';

const HomeSection = () => {
    return (
        <div>
            <div className="card p-10 lg:card-side bg-base-100 shadow-xl">
            <figure><img className='lg:w-full mr-10' src="http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_01-1.jpg" alt="Album"/></figure>
            <div className="card-body">
            <h2 className="card-title">Eggs with Bacon and Salad</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p>Energy: 290 kkal</p>
            <p>Protein: 26 g</p>
            <p>Fat: 8 g</p>
            <p>Carbohydrates: 49 g</p>
            <h2>$12.49</h2>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
            <button className="btn btn-primary">Listen</button>
            </div>
            </div>
            </div>

            <div className="card lg:p-10 lg:card-side bg-base-100 shadow-xl">
           
            <div className="card-body">
            <h2 className="card-title">Salmon with Vegetables</h2>
            <p>This was delicious! Added the same spices to the vegetables and special tip: added a thin spread of mayo on the salmon before putting it in the oven, it helps with the dryness!.</p>
            <p>Energy: 290 kkal</p>
            <p>Protein: 26 g</p>
            <p>Fat: 8 g</p>
            <p>Carbohydrates: 49 g</p>
            <h2>$12.49</h2>
            <div className="card-actions justify-start">
            <button className="btn btn-primary">Listen</button>
            </div>
            </div>
            <figure><img className='w-full ml-10' src="http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_02-1.jpg" alt="Album"/></figure>
            </div>
        </div>
    );
};

export default HomeSection;