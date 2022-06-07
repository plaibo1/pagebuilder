import { sendImg } from "../http/userAPI";


const SET_CURRENT_HTML = 'pageBuilder/elementReducer/SET_CURRENT_HTML';
const UPDATE_CURRENT_HTML = 'pageBuilder/elementReducer/UPDATE_CURRENT_HTML';
const SET_EDITING_ITEM = 'pageBuilder/elementReducer/SET_EDITING_ITEM';
const SET_HEADERS = 'pageBuilder/elementReducer/SET_HEADERS';
const SET_FEATURES = 'pageBuilder/elementReducer/SET_FEATURES';
const SET_PARTNERS = 'pageBuilder/elementReducer/SET_PARTNERS';
const SET_FOOTERS = 'pageBuilder/elementReducer/SET_FOOTERS';
const SET_MODAL_CONFETTI = 'pageBuilder/elementReducer/SET_MODAL_CONFETTI';
const SET_SAVE_ITEM_ID = 'pageBuilder/elementReducer/SET_SAVE_ITEM_ID';


let initialState = {
  elements: {
    
    "headers": [
      {
        "id": 1,
        "name": "header7",
        "info": {
            "name": "header7",
            "headingImg": "./img/headingImg/header7.png",
            "images": {
                "header7-img": "./img/Saly-1.png"
            },
            "html": "\n                <header class=\"header-7\">\n                <div class=\"container\">\n                  <div class=\"row d-flex justify-content-center align-items-center\">\n          \n                    <!-- col-start -->\n                    <div class=\"col-lg-6\">\n          \n                      <div class=\"header-7__content appyContent\">\n          \n                        <h4>AppyKit</h4>\n          \n                        <h1>We are Startup Creative <span>Agency</span></h1>\n          \n                        <p>\n                          Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                          Sunt nostrum in, quas perferendis magnam omnis?\n                        </p>\n          \n                        <div class=\"appyContent__buttons\">\n                          <a href=\"#\" class=\"appyBtn is-purple and-large\">Read More <i class=\"fa fa-long-arrow-right\"></i></a>\n                          <a href=\"https://www.youtube.com/watch?v=A_MjCqQoLLA\" data-lity=\"\" class=\"appyBtn is-purple-border and-large\">\n                            Watch Video\n                            <i class=\"fa fa-play-circle-o\"></i>\n                          </a>\n                        </div>\n          \n                      </div>\n          \n                    </div>\n                    <!-- col-end -->\n          \n                    <div class=\"col-lg-6\">\n                      <div class=\"header-7__img\">\n                        header7-img\n                      </div>\n                    </div>\n          \n                  </div>\n                </div>\n              </header>\n                "
        },
        "createdAt": "2022-05-28T18:29:38.355Z",
        "updatedAt": "2022-05-28T18:29:38.355Z"
      },
      {
        "id": 2,
        "name": "header11",
        "info": {
          name: "header11",
          headingImg: './img/headingImg/header11.png',
          images: {
            'header11-img': './img/Saly-10.png',
          },
          html: `
                <header class="header-11">
                <div class="container">
                  <div class="row d-flex justify-content-center align-items-center">
          
                    <!-- col -->
                    <div class="col-lg-5">
          
                      <!-- header text -->
                      <div class="header-11__content appyContent">
          
                        <h1>
                          Make your landing page with AppyKit
                        </h1>
          
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Voluptatum, magnam reiciendis 
                        </p>
          
                        <div class="appyContent__buttons">
                          <a href="#" class="appyBtn is-purple and-large">
                            Lets do this <i class="fa fa-long-arrow-right"></i>
                          </a>
                        </div>
          
                      </div>
                      <!-- /header text -->
                      
                    </div>
                    <!-- /col -->
          
                    <!-- col -->
                    <div class="col-lg-6 ml-auto">
                      <!-- img -->
                      <div class="appyContent">
                        header11-img
                      </div>
                      <!-- /img -->
                    </div>
                    <!-- /col -->
          
                    <!-- cards -->
                    <div class="col-12">
                      <div class="row d-flex justify-content-center">
          
                        <!-- card -->
                        <div class="col-sm-6 col-lg-3">
                          <div class="header-11__card">
          
                            <div class="header-11__card__icon">
                              <i class="fa fa-cube"></i>
                            </div>
                            
                            <h5>Something interesting</h5>
          
                          </div>
                        </div>
                        <!-- /card -->
          
                        <!-- card -->
                        <div class="col-sm-6 col-lg-3">
                          <div class="header-11__card">
          
                            <div class="header-11__card__icon">
                              <i class="fa fa-cube"></i>
                            </div>
                            
                            <h5>Fuly responsive</h5>
          
                          </div>
                        </div>
                        <!-- /card -->
          
                        <!-- card -->
                        <div class="col-sm-6 col-lg-3">
                          <div class="header-11__card">
          
                            <div class="header-11__card__icon">
                              <i class="fa fa-cube"></i>
                            </div>
                            
                            <h5>Customizable</h5>
          
                          </div>
                        </div>
                        <!-- /card -->
          
                        <!-- card -->
                        <div class="col-sm-6 col-lg-3">
                          <div class="header-11__card">
          
                            <div class="header-11__card__icon">
                              <i class="fa fa-cube"></i>
                            </div>
                            
                            <h5>Unlimited variation</h5>
          
                          </div>
                        </div>
                        <!-- /card -->
          
                      </div>
                    </div>
                    <!-- /cards -->
          
                  </div>
                </div>
              </header>
                `
        },
        "createdAt": "2022-05-28T18:29:38.355Z",
        "updatedAt": "2022-05-28T18:29:38.355Z"
      },
    ],

    "footers": [
      {
        "id": 1,
        "name": "footer1",
        "info": {
            "name": "header7",
            "headingImg": "./img/headingImg/header7.png",
            "images": {
                "header7-img": "./img/Saly-1.png"
            },
            "html": "\n                <header class=\"header-7\">\n                <div class=\"container\">\n                  <div class=\"row d-flex justify-content-center align-items-center\">\n          \n                    <!-- col-start -->\n                    <div class=\"col-lg-6\">\n          \n                      <div class=\"header-7__content appyContent\">\n          \n                        <h4>AppyKit</h4>\n          \n                        <h1>We are Startup Creative <span>Agency</span></h1>\n          \n                        <p>\n                          Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                          Sunt nostrum in, quas perferendis magnam omnis?\n                        </p>\n          \n                        <div class=\"appyContent__buttons\">\n                          <a href=\"#\" class=\"appyBtn is-purple and-large\">Read More <i class=\"fa fa-long-arrow-right\"></i></a>\n                          <a href=\"https://www.youtube.com/watch?v=A_MjCqQoLLA\" data-lity=\"\" class=\"appyBtn is-purple-border and-large\">\n                            Watch Video\n                            <i class=\"fa fa-play-circle-o\"></i>\n                          </a>\n                        </div>\n          \n                      </div>\n          \n                    </div>\n                    <!-- col-end -->\n          \n                    <div class=\"col-lg-6\">\n                      <div class=\"header-7__img\">\n                        header7-img\n                      </div>\n                    </div>\n          \n                  </div>\n                </div>\n              </header>\n                "
        },
        "createdAt": "2022-05-28T18:29:38.355Z",
        "updatedAt": "2022-05-28T18:29:38.355Z"
      },
      {

        "id": 2,
        "name": "footer2",
        "info": {
            "name": "header7",
            "headingImg": "./img/headingImg/header7.png",
            "images": {
                "header7-img": "./img/Saly-1.png"
            },
            "html": "\n                <header class=\"header-7\">\n                <div class=\"container\">\n                  <div class=\"row d-flex justify-content-center align-items-center\">\n          \n                    <!-- col-start -->\n                    <div class=\"col-lg-6\">\n          \n                      <div class=\"header-7__content appyContent\">\n          \n                        <h4>AppyKit</h4>\n          \n                        <h1>We are Startup Creative <span>Agency</span></h1>\n          \n                        <p>\n                          Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                          Sunt nostrum in, quas perferendis magnam omnis?\n                        </p>\n          \n                        <div class=\"appyContent__buttons\">\n                          <a href=\"#\" class=\"appyBtn is-purple and-large\">Read More <i class=\"fa fa-long-arrow-right\"></i></a>\n                          <a href=\"https://www.youtube.com/watch?v=A_MjCqQoLLA\" data-lity=\"\" class=\"appyBtn is-purple-border and-large\">\n                            Watch Video\n                            <i class=\"fa fa-play-circle-o\"></i>\n                          </a>\n                        </div>\n          \n                      </div>\n          \n                    </div>\n                    <!-- col-end -->\n          \n                    <div class=\"col-lg-6\">\n                      <div class=\"header-7__img\">\n                        header7-img\n                      </div>\n                    </div>\n          \n                  </div>\n                </div>\n              </header>\n                "
        },
        "createdAt": "2022-05-28T18:29:38.355Z",
        "updatedAt": "2022-05-28T18:29:38.355Z"
      },
    ]

  },

  dwadaw: {
    "headers": {
      header7: {
        name: "header7",
        headingImg: './img/headingImg/header7.png',
        images: {
          'header7-img': './img/Saly-1.png',
        },
        html: "\n                <header class=\"header-7\">\n                <div class=\"container\">\n                  <div class=\"row d-flex justify-content-center align-items-center\">\n          \n                    <!-- col-start -->\n                    <div class=\"col-lg-6\">\n          \n                      <div class=\"header-7__content appyContent\">\n          \n                        <h4>AppyKit</h4>\n          \n                        <h1>We are Startup Creative <span>Agency</span></h1>\n          \n                        <p>\n                          Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                          Sunt nostrum in, quas perferendis magnam omnis?\n                        </p>\n          \n                        <div class=\"appyContent__buttons\">\n                          <a href=\"#\" class=\"appyBtn is-purple and-large\">Read More <i class=\"fa fa-long-arrow-right\"></i></a>\n                          <a href=\"https://www.youtube.com/watch?v=A_MjCqQoLLA\" data-lity=\"\" class=\"appyBtn is-purple-border and-large\">\n                            Watch Video\n                            <i class=\"fa fa-play-circle-o\"></i>\n                          </a>\n                        </div>\n          \n                      </div>\n          \n                    </div>\n                    <!-- col-end -->\n          \n                    <div class=\"col-lg-6\">\n                      <div class=\"header-7__img\">\n                        header7-img\n                      </div>\n                    </div>\n          \n                  </div>\n                </div>\n              </header>\n                "
      },
      header11: {
        name: "header11",
        headingImg: './img/headingImg/header11.png',
        images: {
          'header11-img': './img/Saly-10.png',
        },
        html: `
              <header class="header-11">
              <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
        
                  <!-- col -->
                  <div class="col-lg-5">
        
                    <!-- header text -->
                    <div class="header-11__content appyContent">
        
                      <h1>
                        Make your landing page with AppyKit
                      </h1>
        
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptatum, magnam reiciendis 
                      </p>
        
                      <div class="appyContent__buttons">
                        <a href="#" class="appyBtn is-purple and-large">
                          Lets do this <i class="fa fa-long-arrow-right"></i>
                        </a>
                      </div>
        
                    </div>
                    <!-- /header text -->
                    
                  </div>
                  <!-- /col -->
        
                  <!-- col -->
                  <div class="col-lg-6 ml-auto">
                    <!-- img -->
                    <div class="appyContent">
                      header11-img
                    </div>
                    <!-- /img -->
                  </div>
                  <!-- /col -->
        
                  <!-- cards -->
                  <div class="col-12">
                    <div class="row d-flex justify-content-center">
        
                      <!-- card -->
                      <div class="col-sm-6 col-lg-3">
                        <div class="header-11__card">
        
                          <div class="header-11__card__icon">
                            <i class="fa fa-cube"></i>
                          </div>
                          
                          <h5>Something interesting</h5>
        
                        </div>
                      </div>
                      <!-- /card -->
        
                      <!-- card -->
                      <div class="col-sm-6 col-lg-3">
                        <div class="header-11__card">
        
                          <div class="header-11__card__icon">
                            <i class="fa fa-cube"></i>
                          </div>
                          
                          <h5>Fuly responsive</h5>
        
                        </div>
                      </div>
                      <!-- /card -->
        
                      <!-- card -->
                      <div class="col-sm-6 col-lg-3">
                        <div class="header-11__card">
        
                          <div class="header-11__card__icon">
                            <i class="fa fa-cube"></i>
                          </div>
                          
                          <h5>Customizable</h5>
        
                        </div>
                      </div>
                      <!-- /card -->
        
                      <!-- card -->
                      <div class="col-sm-6 col-lg-3">
                        <div class="header-11__card">
        
                          <div class="header-11__card__icon">
                            <i class="fa fa-cube"></i>
                          </div>
                          
                          <h5>Unlimited variation</h5>
        
                        </div>
                      </div>
                      <!-- /card -->
        
                    </div>
                  </div>
                  <!-- /cards -->
        
                </div>
              </div>
            </header>
              `
      },
    },
    "features": {
      features5: {
        name: "features5",
        headingImg: './img/headingImg/features-5.png',
        images: {
          'features-5-img': 'https://ouch-cdn2.icons8.com/FGYR986YSK_Yu8CWTcLBaTCBNz_XGaq0mVzPfgWi2FI/rs:fit:1122:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjky/LzA0MWM2NjI0LWE5/ZjUtNDkxYy1hNTUw/LTUxNjQyYzYwMGNi/OS5wbmc.png',
        },
        html: `
              <section class="features-5">
              <div class="container">
                <div class="row d-flex align-items-center">
            
                  <!-- col -->
                  <div class="col-lg-5">
                    <div class="features-5__content appyContent">
            
                      <div class="features-5__content__text">
                        <h2>Your heading here</h2>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                          Exercitationem quo culpa animi quibusdam numquam. Enim.
                        </p>
                      </div>
            
                      <div class="appyContent__boxWrapper">
            
                        <div class="appyContent__boxWrapper__box">
                          <i class="fa fa-paint-brush"></i>
                          <h4>1M+</h4>
                          <span>Variants</span>
                        </div>
            
                        <div class="appyContent__boxWrapper__box">
                          <i class="fa fa-cloud-download"></i>
                          <h4>10K+</h4>
                          <span>Downloads</span>
                        </div>
                        
            
                      </div>
            
            
                    </div>
                  </div>
                  <!-- /col -->
            
                  <!-- col -->
                  <div class="col-lg-6 ml-auto">
                    <div class="features-5__img">
                      features-5-img
                    </div>
                  </div>
                  <!-- /col -->
            
                </div>
              </div>
            </section>
              `
      },
      features15: {
        name: "features15",
        headingImg: './img/headingImg/features-15.png',
        images: {
          'firstImg': './img/Saly-25.png',
          'secondImg': './img/Saly-27.png',
          'thirdImg': './img/Saly-20.png',
        },
        html: `
              <section class="features-15">
              <div class="container">
            
                <!-- timeline -->
                <div class="features-15-timeline">
          
                  <div class="features-15-timeline__num">
                    <span>1</span>
                  </div>
          
                  <!-- row start -->
                  <div class="row d-flex align-items-center">
            
                    <!-- col-start -->
                    <div class="col-lg-5">
            
                      <div class="features-15__card">
                        <div class="features-15__card__text appyContent">
            
                          <h3>Lorem ipsum dolor sit amet.</h3>
            
                          <p>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit.
                            Eius maxime quo culpa quibusdam ullam.
                          </p>
            
                        </div>
                      </div>
            
                    </div>
                    <!-- col-end -->
            
                    <!-- col-start -->
                    <div class="col-lg-5 ml-auto">
            
                      <div class="features-15__img">
                        firstImg
                      </div>
            
                    </div>
                    <!-- col-end -->
            
                  </div>
                  <!-- row end -->
                </div>
                <!-- /timeline -->
          
                <!-- timeline -->
                <div class="features-15-timeline">
          
                  <div class="features-15-timeline__num">
                    <span>2</span>
                  </div>
          
                  <!-- row start -->
                  <div class="row d-flex align-items-center">
            
                    <!-- col-start -->
                    <div class="col-lg-5 features-15-order-sm-2">
            
                      <div class="features-15__img">
                        secondImg
                      </div>
            
                    </div>
                    <!-- col-end -->
          
                    <!-- col-start -->
                    <div class="col-lg-5 ml-auto features-15-order-sm-1">
            
                      <div class="features-15__card">
                        <div class="features-15__card__text appyContent">
            
                          <h3>Lorem ipsum dolor sit amet.</h3>
            
                          <p>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit.
                            Eius maxime quo culpa quibusdam ullam.
                          </p>
            
                        </div>
                      </div>
            
                    </div>
                    <!-- col-end -->
            
                  </div>
                  <!-- row end -->
          
                </div>
                <!-- /timeline -->
          
                <!-- timeline -->
                <div class="features-15-timeline">
          
                  <div class="features-15-timeline__num">
                    <span>3</span>
                  </div>
          
                  <!-- row start -->
                  <div class="row d-flex align-items-center">
          
                    <!-- col-start -->
                    <div class="col-lg-5">
            
                      <div class="features-15__card">
                        <div class="features-15__card__text appyContent">
            
                          <h3>Lorem ipsum dolor sit amet.</h3>
            
                          <p>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit.
                            Eius maxime quo culpa quibusdam ullam.
                          </p>
            
                        </div>
                      </div>
            
                    </div>
                    <!-- col-end -->
          
                    <!-- col-start -->
                    <div class="col-lg-5 ml-auto">
            
                      <div class="features-15__img">
                        thirdImg
                      </div>
            
                    </div>
                    <!-- col-end -->
            
                  </div>
                  <!-- row end -->
                </div>
                <!-- /timeline -->
            
              </div>
            </section>
              `
      },
      features18: {
        name: "features18",
        headingImg: './img/headingImg/features-18.png',
        images: {
          'null': 'null',
        },
        html: `
            <section class="features-18">
            <div class="container">
              <div class="row">
        
                <!-- col-start -->
                <div class="col-lg-4">
        
                  <div class="features-18__card">
                    
                    <div class="features-18__card__icon">
                      <i class="fa fa-laptop"></i>
                    </div>
        
                    <div class="features-18__card__text">
                      <h3>Fully Responsive</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda?
                      </p>
                    </div>
        
                  </div>
        
                </div>
                <!-- col-end -->
        
                <!-- col-start -->
                <div class="col-lg-4">
        
                  <div class="features-18__card">
                    
                    <div class="features-18__card__icon">
                      <i class="fa fa-cube"></i>
                    </div>
        
                    <div class="features-18__card__text">
                      <h3>Modern design</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda?
                      </p>
                    </div>
        
                  </div>
        
                </div>
                <!-- col-end -->
        
                <!-- col-start -->
                <div class="col-lg-4">
        
                  <div class="features-18__card">
                    
                    <div class="features-18__card__icon">
                      <i class="fa fa-paint-brush"></i>
                    </div>
        
                    <div class="features-18__card__text">
                      <h3>Customizable</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda?
                      </p>
                    </div>
        
                  </div>
        
                </div>
                <!-- col-end -->
        
              </div>
            </div>
          </section>
            `
      },
      features19: {
        name: "features19",
        headingImg: './img/headingImg/features-19.png',
        images: {
          'firstImg': 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
          'secondImg': 'https://images.unsplash.com/photo-1650105312043-647cc3ac893e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
          'thirdImg': 'https://images.unsplash.com/photo-1647549831144-09d4c521c1f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80',
        },
        html: `
            <section class="features-19">
            <div class="container">
              <div class="row">
        
                <!-- col start -->
                <div class="col-lg-6">
        
                  <div class="features-19__content appyContent">
                    
                    <h2>
                      Shaping a vision, delivering software, 
                      creating world class experiences
                    </h2>
        
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                      Vero optio ut obcaecati tenetur ipsum sequi quae.
                    </p>
        
                    <div class="appyContent__buttons">
                      <a href="#" class="appyBtn is-purple and-medium">
                        Get Started 
                        <i class="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
        
                  </div>
        
                </div>
                <!-- col end -->
        
                <!-- col start -->
                <div class="col-lg-5 ml-auto">
        
                  <!-- card -->
                  <div class="features-19__card">
        
                    <div class="features-19__card__icon">
                      <i class="fa fa-cube"></i>
                    </div>
        
                    <div class="features-19__card__text">
        
                      <h3>Something interesting</h3>
        
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Minus dolorem quam vero, ut ducimus voluptas.
                      </p>
        
                    </div>
        
                  </div>
                  <!-- /card -->
        
                  <!-- card -->
                  <div class="features-19__card">
        
                    <div class="features-19__card__icon">
                      <i class="fa fa-cube"></i>
                    </div>
        
                    <div class="features-19__card__text">
        
                      <h3>Something interesting</h3>
        
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Minus dolorem quam vero, ut ducimus voluptas.
                      </p>
        
                    </div>
        
                  </div>
                  <!-- /card -->
        
                  <!-- card -->
                  <div class="features-19__card">
        
                    <div class="features-19__card__icon">
                      <i class="fa fa-cube"></i>
                    </div>
        
                    <div class="features-19__card__text">
        
                      <h3>Something interesting</h3>
        
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Minus dolorem quam vero, ut ducimus voluptas.
                      </p>
        
                    </div>
        
                  </div>
                  <!-- /card -->
        
                </div>
                <!-- col end -->
        
              </div>
            </div>
          </section>
            `
      },
      features12: {
        name: "features12",
        headingImg: './img/headingImg/features-12.png',
        images: {
          'features-12-img': './img/Saly-12.png',
        },
        html: `
            <section class="features-12 appyContent">

            <div class="features-12-wrapper">
        
              <div class="features-12__img">
                features-12-img
              </div>
          
              <div class="container">
          
                <div class="row">
          
                  <div class="col-lg-7 ml-auto rtl-no-mlAuto">
                    <div class="features-12__text">
          
                      <h2>Your heading here</h2>
          
                      <p>
                        Lorem ipsum dolor sit amet, consectetur ad
                        ipisicing elit. Cupiditate magni
                        exercitationem nesciunt culpa voluptat
                      </p>
        
                      <ul>
                        <li><i class="fa fa-check-circle"></i><span>Lorem, ipsum dolor</span></li>
                        <li><i class="fa fa-check-circle"></i><span>Lorem, ipsum dolor</span></li>
                        <li><i class="fa fa-check-circle"></i><span>Lorem, ipsum dolor</span></li>
                      </ul>
          
                      <div class="appyContent__buttons">
                        <a href="#" class="appyBtn is-purple and-medium">
                          Read more 
                          <i class="fa fa-long-arrow-right"></i>
                        </a>
                      </div>
          
                    </div>
                  </div>
          
                </div>
          
              </div>
            </div>
          
          </section>
            `
      },
    },
    "partners": {
      partners2: {
        name: "partners2",
        headingImg: './img/headingImg/partners-2.png',
        images: {
          'partner-1': 'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png',
          'partner-2': 'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png',
          'partner-3': 'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png',
          'partner-4': 'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png',
          'partner-5': 'https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png',
          'partners-5-img': './img/partners.png',
        },
        html: `
          <section class="partners-2">
          <div class="container">
            <div class="row d-flex align-items-center">
    
              <!-- content -->
              <div class="col-lg-6">
                <div class="partners-2__content appyContent">
    
                  <!-- text -->
                  <div class="partners-2__content__text">
    
                    <h2>We have <span>partnered</span> with awesome folks</h2>
    
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Alias consequatur voluptas amet quibusdam iure quaerat.
                    </p>
    
                  </div>
                  <!-- /text -->
    
                  <!-- logos -->
                  <div class="partners-2__content__logos">
    
                    <div class="partners-2__content__logos__img">
                      partner-1
                    </div>
    
                    <div class="partners-2__content__logos__img">
                      partner-2
                    </div>
    
                    <div class="partners-2__content__logos__img">
                      partner-3
                    </div>
    
                    <div class="partners-2__content__logos__img">
                      partner-4
                    </div>
    
                    <div class="partners-2__content__logos__img">
                      partner-5
                    </div>
                    
                  </div>
                  <!-- /logos -->
    
                  <!-- btn -->
                  <div class="partners-2__content__btn appyContent__buttons">
                    <a href="#" class="appyBtn is-purple and-medium">
                      Learn more 
                      <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                  <!-- /btn -->
    
                </div>
              </div>
              <!-- /content -->
    
              <!-- img -->
              <div class="col-lg-6">
                <div class="partners-2__img">
                  partners-5-img
                </div>
              </div>
              <!-- /img -->
    
            </div>
          </div>
        </section>
          `
      },
    },
    "footers": {
      footer7: {
        name: "footer7",
        headingImg: './img/headingImg/footer-7.png',
        images: {
          'footer-7-logo': 'https://cdn-icons.flaticon.com/png/512/2247/premium/2247508.png?token=exp=1651273931~hmac=6d2dc3aafc6d5fadc26165906ca570ed',
          'footer-7-img': 'https://ouch-cdn2.icons8.com/_0VYChfJPQXOxvq1ynB0tdCUxmhPU4CUfLMSMacSdds/rs:fit:1210:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzU5/Lzc5YzJmMDUyLTVk/OWQtNGUyZC04Yzdh/LTI0ODhjZTU5NDY4/MS5wbmc.png',
        },
        html: `
          <footer class="footer-7">

          <div class="container">
            <div class="row">
      
              <!-- start -->
              <div class="col-sm-12 col-lg-4">
                <div class="footer-7__options">
      
                  <div class="footer-7__options__logo">
                    footer-7-logo
                  </div>
      
                  <div class="footer-7__options__text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti?
                    </p>
                  </div>
      
                  <div class="footer-7__options__img">
                    footer-7-img
                  </div>
      
                </div>
              </div>
              <!-- end -->
      
              <!-- start -->
              <div class="col-sm-4 col-lg-3">
                <div class="footer-7__options">
      
                  <div class="footer-7__options__heading">
                    <h4>Product Help</h4>
                  </div>
      
                  <div class="footer-7__options__list">
                    <ul>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Tools & Integrations</a></li>
                      <li><a href="#">Support</a></li>
                      <li><a href="#">System</a></li>
                    </ul>
                  </div>
      
                </div>
              </div>
              <!-- end -->
      
      
              <!-- start -->
              <div class="col-sm-3 col-lg-2">
                <div class="footer-7__options">
      
                  <div class="footer-7__options__heading">
                    <h4>Download</h4>
                  </div>
      
                  <div class="footer-7__options__list">
                    <ul>
                      <li><a href="#">Company</a></li>
                      <li><a href="#">Web App</a></li>
                      <li><a href="#">Windows App</a></li>
                      <li><a href="#">MAC OS App</a></li>
                      <li><a href="#">API</a></li>
                      <li><a href="#">Partners</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Blog</a></li>
                    </ul>
                  </div>
      
                </div>
              </div>
              <!-- end -->
              
      
      
              <!-- start -->
              <div class="col-sm-4 col-lg-3">
                <div class="footer-7__options">
      
                  <div class="footer-7__options__heading">
                    <h4>Contact</h4>
                  </div>
      
      
                  <div class="footer-7__options__socialmedia">
                    <ul>
                      <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
                      <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                    </ul>
                  </div>
      
                  <div class="footer-7__options__form">
                    <form action="#">
                      <input type="text" placeholder="Your Email">
                      <button type="submit" class="appyBtn is-purple and-small no-mr">
                        subscribe
                        <i class="fa fa-long-arrow-right"></i>
                      </button>
                    </form>
                  </div>
      
                </div>
              </div>
              <!-- end -->
      
      
              <!-- start -->
              <div class="col-lg-12">
                <div class="footer-7__footer">
                  <p>© 2020 AppyKit with love</p><i class="fa fa-heart"></i>
                </div>
              </div>
              <!-- end -->
      
      
            </div>
          </div>
        </footer>
          `
      },
      footer8: {
        name: "footer8",
        headingImg: './img/headingImg/footer-8.png',
        images: {
          'footer-8-logo': 'https://cdn-icons.flaticon.com/png/512/2247/premium/2247508.png?token=exp=1651273931~hmac=6d2dc3aafc6d5fadc26165906ca570ed',
          'footer-8-img': `./img/Saly-10.png`,
          // 'footer-8-img': 'https://ouch-cdn2.icons8.com/_0VYChfJPQXOxvq1ynB0tdCUxmhPU4CUfLMSMacSdds/rs:fit:1210:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzU5/Lzc5YzJmMDUyLTVk/OWQtNGUyZC04Yzdh/LTI0ODhjZTU5NDY4/MS5wbmc.png',
        },
        html: `
          <footer class="footer-8">

          <div class="container">
            <div class="row">
      
              <!-- start -->
              <div class="col-sm-12 col-lg-4">
                <div class="footer-8__options">
      
                  <div class="footer-8__options__logo">
                    footer-8-logo
                  </div>
      
                  <div class="footer-8__options__text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti?
                    </p>
                  </div>
      
                  <div class="footer-8__options__img">
                    footer-8-img
                  </div>
      
                </div>
              </div>
              <!-- end -->
      
              <!-- start -->
              <div class="col-sm-4 col-lg-3">
                <div class="footer-8__options">
      
                  <div class="footer-8__options__heading">
                    <h4>Product Help</h4>
                  </div>
      
                  <div class="footer-8__options__list">
                    <ul>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Tools & Integrations</a></li>
                      <li><a href="#">Support</a></li>
                      <li><a href="#">System</a></li>
                    </ul>
                  </div>
      
                </div>
              </div>
              <!-- end -->
      
      
              <!-- start -->
              <div class="col-sm-3 col-lg-2">
                <div class="footer-8__options">
      
                  <div class="footer-8__options__heading">
                    <h4>Download</h4>
                  </div>
      
                  <div class="footer-8__options__list">
                    <ul>
                      <li><a href="#">Company</a></li>
                      <li><a href="#">Web App</a></li>
                      <li><a href="#">Windows App</a></li>
                      <li><a href="#">MAC OS App</a></li>
                      <li><a href="#">API</a></li>
                      <li><a href="#">Partners</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Blog</a></li>
                    </ul>
                  </div>
      
                </div>
              </div>
              <!-- end -->
              
      
      
              <!-- start -->
              <div class="col-sm-4 col-lg-3">
                <div class="footer-8__options">
      
                  <div class="footer-8__options__heading">
                    <h4>Contact</h4>
                  </div>
      
      
                  <div class="footer-8__options__socialmedia">
                    <ul>
                      <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
                      <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                    </ul>
                  </div>
      
                  <div class="footer-8__options__form">
                    <form action="#">
                      <input type="text" placeholder="Your Email">
                      <button type="submit" class="appyBtn is-purple and-small no-mr">
                        subscribe
                        <i class="fa fa-long-arrow-right"></i>
                      </button>
                    </form>
                  </div>
      
                </div>
              </div>
              <!-- end -->
      
      
              <!-- start -->
              <div class="col-lg-12">
                <div class="footer-8__footer">
                  <p>© 2020 AppyKit with love</p><i class="fa fa-heart"></i>
                </div>
              </div>
              <!-- end -->
      
      
            </div>
          </div>
        </footer>
          `
      },
    },
  },

  currentHtml: [],
  editingItem: [],

  saveItemId: 0,

  showConfetti: false
}

const elementsListReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_SAVE_ITEM_ID:
      return {
        ...state,
        saveItemId: action.itemId
      }

    case SET_MODAL_CONFETTI:
      return {
        ...state,
        showConfetti: action.confetti
      }

    case SET_HEADERS:
      return {
        ...state,
        elements: { ...state.elements, "headers": action.element }
      }

    case SET_FEATURES:
      return {
        ...state,
        elements: { ...state.elements, "features": action.element }
      }

    case SET_PARTNERS:
      return {
        ...state,
        elements: { ...state.elements, "partners": action.element }
      }

    case SET_FOOTERS:
      return {
        ...state,
        elements: { ...state.elements, "footers": action.element }
      }

    case SET_CURRENT_HTML:
      return {
        ...state,
        currentHtml: [...state.currentHtml, action.html],
      }

    case UPDATE_CURRENT_HTML:
      return {
        ...state,
        currentHtml: action.html
      }

    case SET_EDITING_ITEM:
      return {
        ...state,
        editingItem: action.item
      }

    default:
      return state;
  }

}

export const setCurrentHtml = (html) => ({type: SET_CURRENT_HTML, html})
export const updateCurrentHtml = (html) => ({type: UPDATE_CURRENT_HTML, html})
export const setEditingItem = (item) => ({type: SET_EDITING_ITEM, item})
export const setSaveItemId = (itemId) => ({type: SET_SAVE_ITEM_ID, itemId})

export const setHeaders = (element) => ({type: SET_HEADERS, element})
export const setFeatures = (element) => ({type: SET_FEATURES, element})
export const setPartners = (element) => ({type: SET_PARTNERS, element})
export const setFooters = (element) => ({type: SET_FOOTERS, element})

export const setModalConfetti = (confetti) => ({type: SET_MODAL_CONFETTI, confetti})



export const getElements = () => {
  return async (dispatch) => {

    const queryConstructor = (bdName, setter) => {
      fetch('http://localhost:5000/api/elements/' + bdName)
        .then(response => response.json())
        .then(json => dispatch(setter(json)))
    }

      await queryConstructor('headers', setHeaders)
      await queryConstructor('features', setFeatures)
      await queryConstructor('partners', setPartners)
      await queryConstructor('footers', setFooters)

  }
}

export const sendImgToServer = (img) => {
  return async dispatch => {

    sendImg(img).then(data => console.log(data))

  }
}

export default elementsListReducer