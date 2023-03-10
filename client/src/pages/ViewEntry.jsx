import React, {useState, useEffect} from "react";
import { Outlet } from "react-router";
import axios from "axios";
import { useParams } from "react-router";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import parse, { attributesToProps } from 'html-react-parser';

function ViewEntry(props) {
  // console.log("View Entry Page")
  const [entriesData, setEntryData] = useState({});
console.log(entriesData.entry);
  // Pull id
  const { id } = useParams();
  const entriesUrl = "/api/viewentry/"+ id ;
  
  useEffect(() => {
    getEntriesDataWithAxios();
  }, []);
  // Request specific row of data from db
  const getEntriesDataWithAxios = async () => {
    const response = await axios.get(entriesUrl);
    setEntryData(response.data);
  };

  const viewEntry = {
    title: entriesData.title,
    date: entriesData.date,
    entry: entriesData.entry ? entriesData.entry : "",
    hours: entriesData.hours,
    language: entriesData.language_name,
    framework: entriesData.framework_name,
    notes:entriesData.notes
  }; 

  // console.log("viewEntry", parse(viewEntry.entry));
  return (
    <div className="my-6 mx-20">
      <main class="flex h-full w-full flex-col ">
        <div class="flex h-auto">
          <article className="prose xl:prose-xl">
            <div className="flex">
               <div className="flex w-1/2 justify-start pb-4">
						      <Link to="/entries"><span className="btn btn-sm rounded-full cursor-pointer hover:scale-105 hover:bg-primary transition-all"> <IoIcons.IoMdArrowRoundBack size={20} />
					        </span></Link>
				        </div>
              {/* <div className="flex w-1/2 justify-end">
              <span className="flex font-medium">{viewEntry.date}</span>
          </div> */}
          </div>


            <h1>{viewEntry.title}</h1>
              <p>{parse(viewEntry.entry)}</p>
            <h2>Additional Notes: </h2>
              <p>{viewEntry.notes}</p>
            <Outlet />
          </article>

          <section class="flex h-96 w-24 items-center justify-center"></section>

    <div className="overflow-none max-w-screen">
      <table className="table w-3/4">
        {/* <!-- head --> */}
        <tbody>
           {/* <!-- row 1 --> */}

           <tr>
              <th className="bg-base-200">Date</th>
              <td className="border-t border-r">{viewEntry.date}</td>
            </tr>

            <tr>
              <th className="bg-base-200">Hours</th>
              <td className="border-b border-r">{viewEntry.hours}</td>
            </tr>

              <tr>
                <th className="bg-base-200">Language</th>
                <td className="border-b border-r">{viewEntry.language}</td>
              </tr>

              <tr>
                <th className="bg-base-200">Framework</th>
                <td className="border-b border-r">{viewEntry.framework}</td>
              </tr>
    
        </tbody>
      </table>
    </div>
  </div>
</main>
</div>

  )
}

export default ViewEntry;