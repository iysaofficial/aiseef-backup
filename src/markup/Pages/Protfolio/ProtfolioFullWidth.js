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

//images
import bnr1 from './../../../images/main/img2.jpg';
import box1 from './../../../images/main/aisef1.jpg';
import box2 from './../../../images/main/aisef2.jpg';
import box3 from './../../../images/main/aisef3.jpg';
import box4 from './../../../images/main/aisef4.jpg';
import box5 from './../../../images/main/aisef5.jpg';
import box6 from './../../../images/main/aisef6.jpg';
import box7 from './../../../images/main/aisef7.jpg';
import box8 from './../../../images/main/aisef8.jpg';
import box9 from './../../../images/main/aisef9.JPG';
import box10 from './../../../images/main/aisef10.JPG';
import box11 from './../../../images/main/aisef11.JPG';
import box12 from './../../../images/main/aisef12.jpg';
import box13 from './../../../images/main/aisef13.jpg';
import box14 from './../../../images/main/aisef14.JPG';
import box15 from './../../../images/main/aisef15.JPG';
import box16 from './../../../images/main/aisef16.JPG';
import box17 from './../../../images/main/aisef17.JPG';
import box18 from './../../../images/main/aisef18.JPG';
import box19 from './../../../images/main/aisef19.JPG';
import box20 from './../../../images/main/aisef20.JPG';

const imageBlog = [
  { Large: box1, tag: ['2020'] },
  { Large: box2, tag: ['2020'] },
  { Large: box3, tag: ['2020'] },
  { Large: box4, tag: ['2020'] },
  { Large: box5, tag: ['2021'] },
  { Large: box6, tag: ['2021'] },
  { Large: box7, tag: ['2021'] },
  { Large: box8, tag: ['2021'] },
  { Large: box9, tag: ['2022'] },
  { Large: box11, tag: ['2022'] },
  { Large: box10, tag: ['2022'] },
  {
    Large: box12,
    tag: ['2022'],
  },
  { Large: box17, tag: ['2022'] },
  { Large: box18, tag: ['2022'] },
  { Large: box19, tag: ['2022'] },
  { Large: box20, tag: ['2022'] },
  { Large: box13, tag: ['2023'] },
  { Large: box14, tag: ['2023'] },
  { Large: box15, tag: ['2023'] },
  { Large: box16, tag: ['2023'] },
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

class ProtfolioFullWidth extends Component {
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
            <PageTitle
              motherMenu="Gallery Event"
              activeMenu="Gallery Event"
            />
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
              name="2020"
              handlesettag={setTag}
              tagActive={tag === '2020' ? true : false}
            />
            <TagLi
              name="2021"
              handlesettag={setTag}
              tagActive={tag === '2021' ? true : false}
            />
            <TagLi
              name="2022"
              handlesettag={setTag}
              tagActive={tag === '2022' ? true : false}
            />
            <TagLi
              name="2023"
              handlesettag={setTag}
              tagActive={tag === '2023' ? true : false}
            />
            {/* <TagLi
              name="Photography"
              handlesettag={setTag}
              tagActive={tag === 'Photography' ? true : false}
            /> */}
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
  box11,
  box12,
  box13,
  box14,
  imageBlog,
};
export default ProtfolioFullWidth;
