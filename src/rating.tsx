import React, {ReactNode} from 'react'

export const Rating = () => {

    const convertToStarRating = (num: number): number => {
       return Math.round(num * 2) / 2
    }

    const renderStars = (rating: number): ReactNode => {
        const stars: ReactNode[] = []

        const checkForHalf = (index: number): string => {
            return rating % 1 !== 0 && index < rating ? "half" : "empty"  
        }    
      
        for(let i = 0; i < 5; i++){
            const type: string = rating >= i + 1 ? 'full' : checkForHalf(i);
            const star: ReactNode = (
            <svg aria-hidden="true" focusable="false" className="rating" >
                <use href={`#stars-${type}-star`} />
            </svg>)
            stars.push(star)
        } 

        return stars 
    }

    return(
        <>
        <h1>asdasd</h1>
            <svg id="stars" style={{display: 'none'}} version="1.1">
                <symbol id="stars-empty-star" viewBox="0 0 102 18" fill="#F1E8CA">
                    <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
                </symbol>
                <symbol id="stars-full-star" viewBox="0 0 102 18" fill="#D3A81E">
                    <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
                </symbol>
                <symbol id="stars-half-star" viewBox="0 0 102 18" fill="#D3A81E">
                    <use href="#stars-empty-star" />
                    <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792" />
                </symbol>
            </svg>
            <div style={{display: 'flex', flexDirection: "row"}} > 
                {renderStars(convertToStarRating(2.7))}
            </div>
        </>
    )
}

export default Rating