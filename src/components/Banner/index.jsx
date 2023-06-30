import './banner.css'

function Banner({photo, alt, quote}) {
    return (
        <div className='banner'>
            <img src={photo} alt={alt} className='banner-photo' />
            <p className='banner-quote'>{quote}</p>
        </div>
    )
}

export default Banner