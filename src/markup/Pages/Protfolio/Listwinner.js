import React, {
    Component,
    useState,
    useEffect,
    Fragment,
  } from 'react';
  import { Link } from 'react-router-dom';
  import SimpleReactLightbox from 'simple-react-lightbox';
  import { SRLWrapper, useLightbox } from 'simple-react-lightbox';
  import Header from '../../Layout/Header1';
  import Footer from '../../Layout/Footer1';
  import PageTitle from '../../Layout/PageTitle';
  import Masonry from 'react-masonry-component';

  
// //images
import bnr1 from './../../../images/main/aisef2.jpg';
import box1 from './../../../images/main/BestProject2023.jpg';
import box2 from './../../../images/main/BestPoster2023.jpg';
import box3 from './../../../images/main/BestBooth2023.jpg';
import box4 from './../../../images/main/BestPresentation2023.jpg';
import box5 from './../../../images/main/IYSA Special Award.jpg';
import box6 from './../../../images/main/IYSA Semi Grand Award 2023.jpg';
import box7 from './../../../images/main/IYSA Grand Award.jpg';
import box8 from './../../../images/main/MYSO Special Award.jpg';
import box9 from './../../../images/main/MIICA Special Award.jpg';
import box10 from './../../../images/main/FT UNDIP Special Award.jpg';

const imageBlog = [
  { Large: box1, tag: ['Best Project'] },
  { Large: box2, tag: ['Best Poster'] },
  { Large: box3, tag: ['Best Booth'] },
  { Large: box4, tag: ['Best Presentation'] },
  { Large: box5, tag: ['IYSA Special Award'] },
  { Large: box6, tag: ['IYSA Semi Grand Award'] },
  { Large: box7, tag: ['IYSA Grand Award'] },
  { Large: box8, tag: ['MYSO Special Award'] },
  { Large: box9, tag: ['MIICA Special Award'] },
  { Large: box10, tag: ['FT UNDIP Special Award'] }
];

//Light Gallery on icon click

const Iconimage = (props) => {
  const { openLightbox } = useLightbox();
  return (
    <Link
      to={'#'}
      onClick={() => openLightbox(props.imageToOpen)}
      className="mfp-link portfolio-fullscreen"
    >
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  );
};

// Masonry section
const masonryOptions = {
  transitionDuration: 0,
};

const imagesLoadedOptions = { background: '.my-bg-image-el' };
// Masonry section end

const TagLi = ({ name, handlesettag, tagActive }) => {
  return (
    <li
      className={` tag ${tagActive ? 'btn active' : 'btn'}`}
      onClick={() => handlesettag(name)}
    >
      <input type="radio" />
      <Link to={'#'} className="site-button-secondry radius-sm">
        <span>
          {name} {''}
        </span>{' '}
      </Link>
    </li>
  );
};

class Listwinner extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="page-content bg-white">
          {/*  banner  */}
          <div
            className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
            style={{ backgroundImage: 'url(' + bnr1 + ')' }}
          >
            {/* h1 */}
            <PageTitle
              motherMenu="Award 2023"
              activeMenu="Award 2023"
            />
            {/* h1 */}
          </div>
          {/*  Section-1 Start  */}
          <PortfolioItem />
        </div>
        <Footer />
      </Fragment>
    );
  }
}
function PortfolioItem() {
  const [tag, setTag] = useState('All');
  const [filteredImages, setFilterdImages] = useState([]);

  useEffect(() => {
    tag === 'All'
      ? setFilterdImages(imageBlog)
      : setFilterdImages(
          imageBlog.filter((image) =>
            image.tag.find((element) => element === tag)
          )
        );
  }, [tag]);

  return (
    <>
      <div className="section-full content-inner-1 portfolio text-uppercase">
        <div className="site-filters clearfix center  m-b40">
          <ul className="filters" data-toggle="buttons">
            <TagLi
              name="All"
              handlesettag={setTag}
              tagActive={tag === 'All' ? true : false}
            />
            <TagLi
              name="Best Project"
              handlesettag={setTag}
              tagActive={tag === 'Best Project' ? true : false}
            />
            <TagLi
              name="Best Poster"
              handlesettag={setTag}
              tagActive={tag === 'Best Poster' ? true : false}
            />
            <TagLi
              name="Best Booth"
              handlesettag={setTag}
              tagActive={tag === 'Best Booth' ? true : false}
            />
            <TagLi
              name="Best Presentation"
              handlesettag={setTag}
              tagActive={tag === 'Best Presentation' ? true : false}
            />
            <TagLi
              name="IYSA Special Award"
              handlesettag={setTag}
              tagActive={tag === 'IYSA Special Award' ? true : false}
            />
            <TagLi
            name="IYSA Semi Grand Award"
            handlesettag={setTag}
            tagActive={tag === 'IYSA Semi Grand Award' ? true : false}
            />
            <TagLi
            name="IYSA Grand Award"
            handlesettag={setTag}
            tagActive={tag === 'IYSA Grand Award' ? true : false}
            />
            <TagLi
            name="MYSO Special Award"
            handlesettag={setTag}
            tagActive={tag === 'MYSO Special Award' ? true : false}
            />
            <TagLi
            name="MIICA Special Award"
            handlesettag={setTag}
            tagActive={tag === 'MIICA Special Award' ? true : false}
            />
            <TagLi
            name="FT UNDIP Special Award"
            handlesettag={setTag}
            tagActive={tag === 'FT UNDIP Special Award' ? true : false}
            />
          </ul>
        </div>
        <SimpleReactLightbox>
          <SRLWrapper>
            <div className="clearfix">
              <ul
                id="masonry"
                className="dlab-gallery-listing gallery-grid-4 gallery mfp-gallery port-style1"
              >
                <Masonry
                  className={'my-gallery-class'} // default ''
                  options={masonryOptions} // default {}
                  disableImagesLoaded={false} // default false
                  updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                  imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                  {filteredImages.map((item, index) => (
                    <li
                      className="2020 2022 card-container col-lg-3 col-md-6 col-xs-12 col-sm-6 p-a0"
                      key={index}
                    >
                      <div className="dlab-box dlab-gallery-box">
                        <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                          <img src={item.Large} alt="" />
                          <div className="overlay-bx">
                            <div className="overlay-icon align-b text-white text-left">
                              <div className="text-white text-left port-box">
                                {/* <h5>Herbal Beauty Salon</h5>
                                <p>Branding and Identity</p> */}
                                <Iconimage />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </Masonry>
              </ul>
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    </>
  );
}
export {
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  box7,
  box8,
  box9,
  box10,
  imageBlog,
};
export default Listwinner;