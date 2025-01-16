import React from 'react'

function ServiceItem({ imgSrc, title, description }){
    
  return (
    <div className="col-lg-4 col-md-6 mt-6 ">
    <div className="service-item style-2 text-center h-100" >
      <div className="service-icon">
        <img className="img-fluid" src={imgSrc} alt={title} />
      </div>
      <div className="service-desc">
        <div className="service-title">
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
      </div>
    </div>
  </div>
  )
}

export default ServiceItem
