import React from 'react'

function ShoeCard({ imgUrl, changeBigShoeImage, bigShoeImg }) {
    function handleClick() {
        changeBigShoeImage(imgUrl.bigShoe); // Pass the bigShoe value when clicked
    }


    return (
        <div className="me-4">
            <div className={`shoe-background flex z-40 border-2 rounded-xl 
            ${bigShoeImg === imgUrl.bigShoe ? 'border-primary' : 'border-transparent'} cursor-pointer`} 
            onClick={handleClick}>
                <div>
                    <img src={imgUrl.thumbnail} 
                    alt={imgUrl.bigShoe} 
                    width={150} />
                </div>
            </div>
        </div>
    )
}

export default ShoeCard