import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserEventsAction} from "../redux/actions/EventAction";
import {getCategoriesAction} from "../redux/actions/CategoryAction";

function DashboardScreen() {
  const dispatch = useDispatch();

  const [event, setEvent] = useState({});

  const events = useSelector((state) => state.eventList);
  const categories  = useSelector((state) => state.categoryList);

  useEffect(() => {
    dispatch(getUserEventsAction());
    dispatch(getCategoriesAction())
  },[dispatch]);
  return (
    <>
      <div className="container">
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-md-9">
            <table className="table table-borderless">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Event</th>
                <th scope="col">Category</th>
                <th scope="col">Virtual</th>
                <th scope="col">Action</th>
              </tr>
              </thead>
              <tbody>
              {events.loading ? (

                <div className="col-md-12 mt-3 text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : events.error ? (
                  <div className="col-md-12 text-center card p-5">
                    Error Loading Event... Pls be patient as we resolve this error
                  </div>
                ): events.events.length === 0 && !events.loading ? (
                <div className="col-md-12 text-center">
                  No event available at the moment
                </div>
              ) : (
                <>
                  {events.events.map((event,index) => (
                    <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <td>{event.title}</td>
                      <td>{event.category && event.category.name}</td>
                      <td>{event && String(event.isVirtual).toUpperCase()}</td>
                      <td><button className="btn btn-sm btn-info text-white">View</button> </td>
                    </tr>
                  ))}
                </>

              )}

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}

export default DashboardScreen;
