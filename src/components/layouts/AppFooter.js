import React from 'react';
import { FooterContainer } from './FooterStyle';

const AppFooter = () => {
  return (
    <FooterContainer>

    <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
            <div className="col-12 col-md">
              <p>Project-052</p>
              {/*<img className="mb-2" src="../../assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"/>*/}
              {/*<small className="d-block mb-3 text-muted">&copy; 2017-2018</small>*/}
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              {/*<ul className="list-unstyled text-small">*/}
              {/*  <li><a className="text-muted" href="#">Cool stuff</a></li>*/}

              {/*</ul>*/}
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              {/*<ul className="list-unstyled text-small">*/}
              {/*  <li><a className="text-muted" href="#">Resource</a></li>*/}

              {/*</ul>*/}
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              {/*<ul className="list-unstyled text-small">*/}
              {/*  <li><a className="text-muted" href="#">Team</a></li>*/}

              {/*</ul>*/}
            </div>
          </div>


      </footer>
    </FooterContainer>
  )
};

export default AppFooter;
