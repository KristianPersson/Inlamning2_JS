
import React from 'react'

const Customer = ({item}) => {
    return (
        <div className="card shadow" style={{maxWidth: 450 + 'px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://images.pexels.com/photos/1312488/pexels-photo-1312488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid rounded-start image-size" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.firstName} {item.lastName}</h5>
              <p className="card-text">{item.email}</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Customer
