import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa";

const API_KEY = import.meta.env.VITE_API_KEY as string;
// console.log(API_KEY);
const MapModel = () => {
    const [show, setShow] = useState(false);
  return (
    <div className="w-[80vw] h-[90vh]">
      <APIProvider apiKey={API_KEY}>
        <Map
          zoom={18}
          center={{ lat: 23.2313, lng: 87.0784 }}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <Marker
            position={{ lat: 23.2289174, lng: 87.0801661 }}
            onClick={() => setShow(true)}
            title={"clickable google.maps.Marker"}
            icon={FaCanadianMapleLeaf}
          />

          {show && (
            <InfoWindow
              position={{ lat: 23.229, lng: 87.0801661 }}
              maxWidth={200}
              onCloseClick={()=>setShow(false)}
            >
              <p>
                This is the content for another infowindow with <em>HTML</em>
                -elements.
              </p>
            </InfoWindow>
          )}
        </Map>
      </APIProvider>
    </div>
  );
};
export default MapModel;
