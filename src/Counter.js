import initialRenders from "./core/initialrenders";
import listeners from "./core/listeners";

class Course {
    init(){
        console.log("App start");
        initialRenders();
        listeners();
    }
}

export default Course;