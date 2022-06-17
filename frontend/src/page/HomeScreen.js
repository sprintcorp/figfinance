import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getEventsAction} from "../redux/actions/EventAction";
import SliderComponent from "../components/SliderComponent";

function HomeScreen() {
  const dispatch = useDispatch();
  let modalData = '';
  const setModalContent = (data) =>{
    modalData = data;
    console.log(modalData);
  }

  const eventsList = useSelector((state) => state.eventList);

  const { loading, error, events } = eventsList;

  useEffect(() => {
    dispatch(getEventsAction());
  },[dispatch]);

  return (
    <>
      <div className="container">
        <SliderComponent/>
        <div className="row mt-2 text-center">
          <div className="col-sm-3">
            <div className="card category-card">
              <h5 className="card-title">Special title treatment</h5>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card category-card">
              <h5 className="card-title">Special title treatment</h5>
            </div>
          </div>
        </div>
        <div className="h3 mt-5">Events</div>
        {modalData}
        <div className="event-body mt-3">
          <div className="row d-flex">
            {loading ? (
              <div className="col-md-12 text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : error ? (
              <div className="col-md-12 text-center card p-5">
                Error Loading Event... Pls be patient as we resolve this error
              </div>
            ) : events.length === 0 && !loading ? (
              <div className="col-md-12 text-center">
                No event available at the moment
              </div>
            ) : (
              <>
                {events.map((event) => (
                  <div className="col-md-4 mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={ () => setModalContent(event)} key={event._id}>
                    <div className="card">
                      <div className="card-header">
                        {event.category}
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{event.title}</h5>
                        <p className="card-text">{event.description}</p>
                        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                      </div>
                    </div>
                  </div>
                ))}
              </>

            )}
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{modalData.title}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default HomeScreen;
