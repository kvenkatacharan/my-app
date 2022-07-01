import CourseCard from "../components/CourseCard";
import EventsCard from "../components/EventsCard";
function Home() {
  return (
    <div className="container mx-auto flex flex-col ">
      <EventsCard />
      <CourseCard />
    </div>
  );
}

export default Home;
