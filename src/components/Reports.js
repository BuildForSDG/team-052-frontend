import React from 'react';

const Reports = () => {
    return(
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center shadow">
              <div className="overflow">
                <img src="https://via.placeholder.com/150" className="card-img-top"/>

                {/*hello*/}
              </div>
              <div className="card-body text-dark">
                <h4 className="card-title">
                  card title
                </h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque doloremque eligendi et explicabo iusto necessitatibus nostrum similique sit unde?</p>
                <a href="/" className="btn btn-outline-success">Click</a>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="overflow">
                <img src="https://via.placeholder.com/150" className="card-img-top"/>
              </div>
              <div className="card-body text-dark">
                <h4 className="card-title">
                  card title
                </h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque doloremque eligendi et explicabo iusto necessitatibus nostrum similique sit unde?</p>
                <a href="/" className="btn btn-outline-success">Click</a>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="overflow">
                <img src="https://via.placeholder.com/150" className="card-img-top"/>
                {/*hello*/}
              </div>
              <div className="card-body text-dark">
                <h4 className="card-title">
                  card title
                </h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque doloremque eligendi et explicabo iusto necessitatibus nostrum similique sit unde?</p>
                <a href="/" className="btn btn-outline-success">Click</a>

              </div>
            </div>
          </div>
        </div>
      </div>


    )
}

export default Reports;
