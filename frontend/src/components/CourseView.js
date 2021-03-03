import '../styles/CourseViewStyles.scss';
import devImg from '../assets/courseView/img.jpg'
import starImg from '../assets/courseView/star.png'
import checkImg from '../assets/courseView/check.png'
import jsImg from '../assets/courseView/js.png'
import playImg from '../assets/courseView/play.png'


const CourseView = ()=> 
{
    return 
    (
        <div>
            <section className = "mainSection">
                <div className = "leftCol avatarCont">
                    <img className="image" src={devImg} alt="AVATAR"/>
                    <h3>Elizabeth Lail</h3>
                </div>
                <div className = "rightCol">
                    <h2>Complete Python Course for Beginners</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore, maiores a, architecto id eligendi ut culpa reprehenderit blanditiis incidunt at ab fugiat alias consectetur perferendis accusamus iure voluptas! Officia!
                    </p>
                    <div className = "Rating">
                        <h3>Rating :</h3>
                        <ul>
                            <img src={starImg} alt="Star Image" />
                            <img src={starImg} alt="Star Image" />
                            <img src={starImg} alt="Star Image" />
                            <img src={starImg} alt="Star Image" />
                            <img src={starImg} alt="Star Image" />
                            
                        </ul>
                    </div>
                    <div >
                        <ul className = "button">
                            <a className = "enroll" href="#">Enroll</a>
                            <a className = "chat" href=""><img src="chat.png" alt="Chat Box Image"/>
                            </a>
                        </ul>
                    </div>
                </div>
            </section>

            <section className = "bottomSec">
                <div className = "courseInfo">
                    <div className = "coursePlan">
                        <h2>What you will get by taking this course</h2>
                        <div className = "content">
                            <div>
                                <img src={checkImg} alt="Star Image"/>
                                <p>Lorem ipsum dolor sit amet consectetur and go fuck yourself with my dick.</p>
                            </div>
                            <div>
                                <img src={checkImg} alt="Star Image"/>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div>
                                <img src={checkImg} alt="Star Image"/>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div>
                                <img src={checkImg} alt="Star Image"/>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div>
                                <img src={checkImg} alt="Star Image"/>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div>
                                <img src={checkImg} alt="Star Image"/>
                                <p>Lorem ipsum dolor sit amet and consectetur.</p>
                            </div>
                            <div>
                                <img src={checkImg} alt="Star Image"/>
                                <p>Lorem ipsum dolor sit amet and consectetur.</p>
                            </div>
                            <div>
                                <img src={checkImg} alt="Star Image"/>
                                <p>Lorem ipsum dolor sit amet and consectetur.</p>
                            </div>
                            <div>
                                <img src={checkImg} alt="Star Image"/>
                                <p>Lorem ipsum dolor sit amet and consectetur.</p>
                            </div>

                        </div>

                    </div>
                    <div className = "courseContent"/>
                        <h2>Course Content</h2>
                        <div className = "videoLecture">
                            <div>
                                <img src={playImg} alt="Star Image"/>
                                <p>Lecture 1: Introduction (2:00)</p>
                            </div>
                            <div>
                                <img src={playImg} alt="Star Image"/>
                                <p>Lecture 1: Introduction (2:00)</p>
                            </div>
                            <div>
                                <img src={playImg} alt="Star Image"/>
                                <p>Lecture 1: Introduction (2:00)</p>
                            </div>
                            <div>
                                <img src={playImg} alt="Star Image"/>
                                <p>Lecture 1: Introduction (2:00)</p>
                            </div>
                            <div>
                                <img src={playImg} alt="Star Image"/>
                                <p>Lecture 1: Introduction (2:00)</p>
                            </div>
                            <div>
                                <img src={playImg} alt="Star Image"/>
                                <p>Lecture 1: Introduction (2:00)</p>
                            </div>
                            <div>
                                <img src={playImg} alt="Star Image"/>
                                <p>Lecture 1: Introduction (2:00)</p>
                            </div>
                            <div>
                                <img src={playImg} alt="Star Image"/>
                                <p>Lecture 1: Introduction (2:00)</p>
                            </div>
                        </div>
                    </div>

                <div className = "videoRecom">
                    <h4>Other Courses by the Author</h4>
                    <div className = "video">
                    <a>
                        <div>
                                <img src={jsImg} alt="Course Image"/>
                                <ul className = "star">
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                </ul>
                        </div>
                            <div>
                                <h4>Complete JavaScript Course</h4>
                                <p>This JavaScript will be your next course for proper learning on ignioSkills which has been cosidered as top seller on this site by hundreds of users.</p>
                            </div>
                        </a>
                        <a>
                            <div>
                                <img src={jsImg} alt="Course Image"/>
                                <ul className = "star">
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                </ul>
                            </div>
                            <div>
                                <h4>Complete JavaScript Course</h4>
                                <p>This JavaScript will be your next course for proper learning on ignioSkills which has been cosidered as top seller on this site by hundreds of users.</p>
                            </div>
                        </a>
                        <a>
                            <div>
                                <img src={jsImg} alt="Course Image"/>
                                <ul className = "star">
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                </ul>
                            </div>
                            <div>
                                <h4>Complete JavaScript Course</h4>
                                <p>This JavaScript will be your next course for proper learning on ignioSkills which has been cosidered as top seller on this site by hundreds of users.</p>
                            </div>
                        </a>
                        <a>
                            <div>
                                <img src={jsImg} alt="Course Image"/>
                                <ul className = "star">
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                </ul>
                            </div>
                            <div>
                                <h4>Complete JavaScript Course</h4>
                                <p>This JavaScript will be your next course for proper learning on ignioSkills which has been cosidered as top seller on this site by hundreds of users.</p>
                            </div>
                        </a>
                        <a>
                            <div>
                                <img src={jsImg} alt="Course Image"/>
                                <ul className = "star">
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                </ul>
                            </div>
                            <div>
                                <h4>Complete JavaScript Course</h4>
                                <p>This JavaScript will be your next course for proper learning on ignioSkills which has been cosidered as top seller on this site by hundreds of users.</p>
                            </div>
                        </a>
                        <a>
                            <div>
                                <img src={jsImg} alt="Course Image"/>
                                <ul className = "star">
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                    <img src={starImg} alt="Star Image"/>
                                </ul>
                            </div>
                            <div>
                                <h4>Complete JavaScript Course</h4>
                                <p>This JavaScript will be your next course for proper learning on ignioSkills which has been cosidered as top seller on this site by hundreds of users.</p>
                            </div>
                        </a>
                
                    </div>
                    

                </div>
                

            </section>

        </div>
    )


}

export default CourseView;
