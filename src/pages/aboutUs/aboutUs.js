import React from 'react';
import './about.scss'
import Button from 'react-bootstrap/Button';

const AboutUs = () => {
  return (
    <div className="about-container" id="about">
     <br/>
     <br/>
     <br/>
     <br/>
      <div className="title-about">
        <h2>About Us</h2>
        <h1>Best Pre School Education</h1>
        <div className="items">
          <div className="item-img">
            <img src="https://www.kindpng.com/picc/m/111-1117487_play-school-kids-png-images-kids-play-school.png"/>
          </div>
          <div className="item-infos">
            <div className="top-item">
              <div className="item blue">
                <div className="logo">
                  <img style={{width: "60px"}}
                       src="https://thumbs.dreamstime.com/b/education-logo-people-group-symbol-icon-vector-design-concept-student-167487862.jpg"/>
                </div>
                <h2>TEACHERS</h2>
                <span>Sample text. Lorem ipsum dolor sit amet, consecrated advising elite nulls nun justo sagittal subscript Matrices.</span>
                {/*<button>READ MORE</button>*/}
                <Button variant="outline-secondary">READ MORE</Button>
              </div>
              <div className="item pink">
                <div className="logo">
                  <img style={{width: "60px"}}
                       src="https://seeklogo.com/images/D/diamond-logo-F63B9853E3-seeklogo.com.png"/>
                </div>
                <h2>OUR MISSION</h2>
                <span>Sample text. Lorem ipsum dolor sit amet, consecrated advising elite nulls nun justo sagittal subscript Matrices.</span>
                <Button className="btn" variant="outline-secondary">READ MORE</Button>
              </div>
            </div>
            <div className="bottom-item">
              <div className="img-itm">
                <img
                  src="https://media.istockphoto.com/id/1330890956/photo/funny-smiling-black-child-school-girl-with-glasses-hold-books-on-her-head.jpg?b=1&s=170667a&w=0&k=20&c=ITF0YozLBsROafybw06gpGQoLBx0KOzhz2s0LTgOP0c="/>
              </div>
              <div className="img-itm">
                <img src="https://www.pngitem.com/pimgs/m/4-49738_transparent-school-boy-png-school-boy-photo-png.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-container-">
        <h3>KEY FEATURES</h3>
        <h1>Service We Provide</h1>
        <div className="service-item">
          <div className="item-srv">
            <img
              src="https://st.depositphotos.com/1969499/1893/i/450/depositphotos_18939965-stock-photo-children-portrait-near-desk.jpg"/>
            <h1>ENVIRONMENT</h1>
            <span>
              Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus
            </span>
          </div>
          <div className="item-srv">
            <img
              src="https://thumbs.dreamstime.com/b/little-girl-boy-learn-home-happy-kids-table-school-supplies-smiling-funny-learning-alphabet-playful-way-155342342.jpg"/>
            <h1>ACTIVE LEARNING</h1>
            <span>
              Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus
            </span>
          </div>
          <div className="item-srv">
            <img src="https://www.freepnglogos.com/uploads/kids-png/img-kids-14.png"/>
            <h1>CREATIVE LESSONS</h1>
            <span>
              Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus
            </span>
          </div>
          <div className="item-srv">
            <img
              src="https://c8.alamy.com/comp/2EE607G/pupil-kids-and-teacher-in-classroom-woman-teaching-children-with-pointer-school-lesson-2EE607G.jpg"/>
            <h1>QUALIFIED TEACHER</h1>
            <span>
              Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus
            </span>
          </div>
        </div>
      </div>
      <div className="enroll-child-container">
        <div className="title">
          <h1>How To Enroll Your Child To a Class</h1>
        </div>
        <div className="text-item">

          <div className="item">
            <p>
              Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse
              rhoncus laoreet purus quis praesentium voluptatum
              deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa.
            </p>
          </div>
          <div className="item">
            <p>
              At kidzcare comes with powerful theme options, which empowers you to quickly and easily build incredible
              store.You can handle it easily and quickly. Lots of option availavle with this.
              Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            </p>
          </div>
        </div>
      </div>
      <div className="innovative-info-container">
<div className="items">
  <div className="item">
    <img
      src="https://media.istockphoto.com/id/1128020105/photo/portrait-of-her-she-nice-looking-cute-attractive-lovely-pretty-cheerful-cheery-positive-pre.jpg?s=612x612&w=0&k=20&c=ec8CJqeCARDt6YHylMwYIYIoh9htBIpCn_7uTjyv7ig="/>
  </div>
  <div className="item">
    <h1>Innovative Methods
      of Teaching</h1>
    <p>
      Small and mid-size companies often have trouble finding suitable office space in Amsterdam. The creative industry has seemingly unrealistic demands when it comes to office locations: an incubator of ideas, which is spacious and inspiring, with a unique design at a great location with car access.
      Photography
    </p>
  </div>
  <div className="item">
    <img
      src="https://thumbs.dreamstime.com/b/happy-smiling-boy-painted-hands-face-orange-t-shirt-white-background-45574922.jpg"/>
  </div>
</div>


      </div>
    </div>
  );
};

export default AboutUs;