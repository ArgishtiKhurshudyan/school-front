import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel slide={true}>
      <Carousel.Item interval={1500}>
        <img style={{height: "1000px"}}
             className="d-block w-100"
             src="https://i.ytimg.com/vi/jrkCFn2m57s/maxresdefault.jpg"
             alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          style={{height: "1000px"}}
          className="d-block w-100"
          src="http://oupeltglobalblog.com/wp-content/uploads/2013/12/kids-in-classroom.jpg?w=400"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height: "1000px"}}
          className="d-block w-100"
          src="https://www.friendshipcircle.org/blog/wp-content/uploads/2015/04/How-Parents-Can-Keep-Their-Child-With-Special-Needs-Focused-in-the-Classroom.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;