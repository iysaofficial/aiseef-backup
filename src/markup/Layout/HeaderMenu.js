import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderMenu extends Component {
  render() {
    return (
      <>
        <ul className="nav navbar-nav">
          <li>
            <Link to={'./'}>
              <span className="ti-home"></span> Home{' '}
            </Link>
          </li>

          <li>
            <Link to={'#'}>
              List Of Winners <i className="fa fa-chevron-down"></i>{' '}
            </Link>
            <ul className="sub-menu left">
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1ji1welz8f3ApJZeTM3PsfSaHdtQZ2RYWkt_jwgMRRt0/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  List of Winner 2022
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1Fo7itbnl6YqsXy543HCq4wFC11-Zk6ifnxUeH9F4l0Q/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  List of Winner 2023
                </a>
              </li>
              <li>
                <Link
                  to={'./Listwinner'}
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  Special Award 2023
                </Link>
              </li>
            </ul>
          </li>

          {/* PRESSRELEASE */}
          <li>
            <Link to={'#'}>
              News <i className='fa fa-chevron-down'></i>{''}
            </Link>
            <ul className="sub-menu left">
              {/* <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferre noopener"
                  className="dez-page"
                >
                  Press Release 2021
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferre noopener"
                  className="dez-page"
                >
                  Press Release 2022
                </a>
              </li> */}
              <li>
                <a
                  href="https://drive.google.com/file/d/1UdQv8-5s3M6Z-tNXfZAmS-jWoFuSM_sH/view?usp=share_link"
                  target="_blank"
                  rel="noreferre noopener"
                  className="dez-page"
                >
                  Press Release 2023
                </a>
              </li>
            </ul>
          </li>

          {/* PAGES*/}
          <li>
            <a
              href="https://drive.google.com/file/d/1TmCK_U8rYBSFkVUPsI-w2u_Kj0YxuZU0/view?usp=share_link"
              target="_blank"
              rel="noreferrer noopener"
              className="dez-page"
            >
              Guide Book
            </a>
          </li>
          <li>
            <Link
              to={'./gallery-event'}
              rel="noreferrer noopener"
              className="dez-page"
            >
              Gallery Event
            </Link>
          </li>
          <li>
            <Link
              to={'./Faqs'}
              rel="noreferrer noopener"
              className="dez-page"
            >
              FAQ
            </Link>
          </li>
          <li>
            {/* <Link to={'#'}>
              About AISEEF <i className="fa fa-chevron-down"></i>{' '}
            </Link> */}
            {/* className="sub-menu left" */}
            <ul >
              {/* <li>
                <a
                  href="https://drive.google.com/file/d/1TmCK_U8rYBSFkVUPsI-w2u_Kj0YxuZU0/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  Guide Book
                </a>
              </li> */}
              {/* <li>
                <a
                  href="https://drive.google.com/file/d/1T0qmeRBaknk5rOC4od4EI4b-xt5ttn14/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  Presentation Schedule
                </a>
              </li> */}


              {/* <li>
                <a
                  href="https://drive.google.com/file/d/1YQe3fblR2Y0wfpSncy-kmaPwulhvQUQX/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  Final Result
                </a>
              </li> */}




              {/* <li>
                <a
                  href="https://drive.google.com/file/d/1UdQv8-5s3M6Z-tNXfZAmS-jWoFuSM_sH/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  Press Release 2023
                </a>
              </li> */}
              {/* <li>
                <Link
                  to={'./coming-soon-1'}
                  className="dez-page"
                >
                  New Event
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to={'./short-tabs'}
                  className="dez-page"
                >
                  Tabs
                </Link>
              </li>
              <li>
                <Link
                  to={'./short-team'}
                  className="dez-page"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to={'./short-testimonial'}
                  className="dez-page"
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  to={'./short-form'}
                  className="dez-page"
                >
                  Form
                </Link>
              </li>
              <li>
                <Link
                  to={'./short-accordions'}
                  className="dez-page"
                >
                  Accordions
                </Link>
              </li> */}
              {/* <li>
                <a
                  href="https://drive.google.com/file/d/1phnFerrbW8LSJNuWhHBZlrfN0n72xZwH/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  Best Project
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/11j9phCOmn6mxTUPwIDF2vyTMDysIVnWD/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  Best Poster
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1pdDYMZK2k5m0W6DpIRRAJR2IO66p_5TB/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  Best Booth
                </a>
              </li> */}
              {/* <li>
                <a
                  href="https://drive.google.com/file/d/14Dmvwq4GzQ3ZU8HMsI-3P4a2hDT7l5ow/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  Best Presentation
                </a>
              </li> */}
              {/* <li>
                <a
                  href="https://drive.google.com/file/d/1pDlfak4Z3JDNL7qHmWJLcxRM3C4cKhSR/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  IYSA Special Award
                </a>
              </li> */}
              {/* <li>
                <a
                  href="https://drive.google.com/file/d/1iIsneQJF38j7tFssoMHgwnPe_9iNrngA/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  IYSA Semi Grand Award
                </a>
              </li> */}
              {/* <li>
                <a
                  href="https://drive.google.com/file/d/1OZ74N6OKsiGK8e8WLqctilV5YbCJCDBH/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  IYSA Grand Award
                </a>
              </li> */}
              {/* <li>
                <a
                  href="https://drive.google.com/file/d/10jl2yfvJNxte-7j6OZnBrzfvtlD2OVA4/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  MYSO Special Award
                </a>
              </li> */}
              {/* <li>
                <a
                  href="https://drive.google.com/file/d/1QzRGLXSwrYowRORIZSvB3Et0woXtUn2z/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  MIICA SPecial Award
                </a>
              </li> */}
              {/* <li>
                <a
                  href="https://drive.google.com/file/d/1DvPgwyFvg-fJFpyxgp7nWwJTM_XN48NH/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  FT UNDIP Special Award
                </a>
              </li> */}

            </ul>
          </li>

          <li>
            <Link to={'#'}>
              Curation <i className="fa fa-chevron-down"></i>{' '}
            </Link>
            <ul className="sub-menu left">
              <li>
                {/* <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  Curation 2021
                </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="dez-page"
                  >
                    Curation 2022
                  </a>
                </li>  */}
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1cBMZXryRSq5QrVDx3B0_UqU_QaKVvdMR?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="dez-page"
                  >
                    Curation 2021
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1yYtOcWtTBfM1ICxLSjKWtb0VdcyK4trk?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="dez-page"
                  >
                    Curation 2022
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1z0Iabx2X9TJ3tNm5ejm2ALEDykX0_Aip?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="dez-page"
                  >
                    Curation 2023
                  </a>
                </li>
              </li>
            </ul>
          </li>
          <li>
            <Link to={'#'}>
              Certificate <i className="fa fa-chevron-down"></i>{' '}
            </Link>
            <ul className="sub-menu left">
              <li>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1z0Iabx2X9TJ3tNm5ejm2ALEDykX0_Aip?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="dez-page"
                  >
                    Certificate Supervisor
                  </a>
                </li>
              </li>
            </ul>
          </li>
        </ul >
        {/* <li> */}
        {/* <a
            href="https://drive.google.com/drive/folders/12UFs2SrShkCtkI1JY5dW8XUiR2TT-c18?usp=share_link"
          >
            Certificate Supervisor
          </a>
        </li> */}
      </>
    );
  }
}
export default HeaderMenu;
