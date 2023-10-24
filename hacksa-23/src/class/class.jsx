import "./class.css";
import Accordion from 'react-bootstrap/Accordion';

import { supabase } from "../client";
import { useState, useEffect } from "react";
function Class() {
  const [courseData, setCourseData] = useState([]);
  const [activeAccordionItem, setActiveAccordionItem] = useState(null);


  const fetchCourseData = async () => {
    const courseData = await supabase.from("CourseT").select();
    setCourseData(courseData.data);

  };
  useEffect(() => {
    fetchCourseData();
  }, []);
  const handleAccordionSelect = (selectedItem) => {
    setActiveAccordionItem(selectedItem);
  };

  console.log(courseData)

  return (
    <div className="class">
      {courseData.map((item, index) => (
        <div className="item" key={index}>
          <Accordion activeKey={activeAccordionItem} onSelect={handleAccordionSelect}>

            <Accordion.Item eventKey={courseData[index].id}>
              {activeAccordionItem === courseData[index].id ? (<Accordion.Header>{courseData[index].courseName}&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<a href={`mailto:${courseData[index].profEmail}`}>{courseData[index].profName}</a></Accordion.Header>
              ) : (<Accordion.Header>{courseData[index].courseName}</Accordion.Header> )}

              <Accordion.Body>
                <p>Class Location: {courseData[index].classroom}</p>
                <p>Class Time: {courseData[index].meetingTime} - {courseData[index].endTime}</p>
                <p>Class Day: {courseData[index].meetingDays}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}

    </div>

  );
}

export default Class;
