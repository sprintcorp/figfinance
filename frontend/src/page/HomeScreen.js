import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getEventsAction, getEventsByCategory} from "../redux/actions/EventAction";
import SliderComponent from "../components/SliderComponent";
import {getCategoriesAction} from "../redux/actions/CategoryAction";

function HomeScreen() {
  const dispatch = useDispatch();

  const [event, setEvent] = useState({});

  const events = useSelector((state) => state.eventList);
  const categories  = useSelector((state) => state.categoryList);
  console.log(categories);



  // console.log(categories);

  useEffect(() => {
    dispatch(getEventsAction());
    dispatch(getCategoriesAction())
  },[dispatch]);

  const Click = (data) => {
    setEvent(data)
  }

  const filterEventByCategory = (data) =>{
    dispatch(getEventsByCategory(data));
  }

  const getAllEvent = () =>{
    dispatch(getEventsAction());
  }
  return (

    <>
      <div className="container">
        <SliderComponent/>
        <div className="h5">Categories(Filter event by categories*)</div>
        <div className="row mt-3 text-center">
          {categories.categories && categories.categories.length > 1 ? (
            <div className="col-sm-3 mb-3" onClick={()=>getAllEvent()}>
              <div className="card category-card">
                <h5 className="card-title">All</h5>
              </div>
            </div>
          ) : ''}
          {categories.categories && categories.categories.map((category) => (
          <div key={category._id} className="col-sm-3 mb-3" onClick={()=>filterEventByCategory(category._id)}>
            <div className="card category-card">
              <h5 className="card-title">{category.name}</h5>
            </div>
          </div>
            ))}

        </div>
        <div className="h5 mt-5">Events</div>

        <div className="event-body mt-3">
          <div className="row d-flex">
            {events.loading ? (
              <div className="col-md-12 text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : events.error ? (
              <div className="col-md-12 text-center card p-5">
                Error Loading Event... Pls be patient as we resolve this error
              </div>
            ) : events.events.length === 0 && !events.loading ? (
              <div className="col-md-12 text-center">
                No event available at the moment
              </div>
            ) : (
              <>
                {events.events.map((event) => (
                  <div className="col-md-4 mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={ () => Click(event)} key={event._id}>
                    <div className="card">
                      <div className="card-header">
                        {event.category && event.category.name}
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{event.title}</h5>
                        <p className="card-text">{event.description.length > 70
                          ? event.description.substring(0, 70)+'...' : event.description}</p>
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
              <h5 className="modal-title" id="exampleModalLabel">{event.category && event.category.name}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Topic: {event && event.title}</p>
              <p>Virtual: {event && String(event.isVirtual).toUpperCase()}</p>
              <p>Date: {event && event.date}</p>
              <p>Address: {event && event.address}</p>
              <p>Description: {event && event.description}</p>
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
