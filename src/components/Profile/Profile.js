import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import './Profile.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom';
import Data from '../data/Data';
import Chat from '../Chat/Chat';
function Profile() {
    const selectedUser = useSelector(state => state.user.selectedUser);
    const [showPopUP, setShowPopUp] = useState(false);
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
     
    useEffect(() => {
      
          setLocation({
            latitude: selectedUser.address.geo.lat,
            longitude: selectedUser.address.geo.lng,
          });
        }, []);

    return (
      <>
      <div className='profile' >
        {selectedUser && (
          <>
          <div className='header'>
            <h1 onClick={()=>setShowPopUp(false)}>Profile</h1>
            <div className='info-1' onClick={()=>setShowPopUp(true)}>
            <img src={selectedUser.profilepicture} alt="profile pic and name of the user"  />
            <p>{selectedUser.name}</p>

            { showPopUP && <div className='pop-div'>
              <img src={selectedUser.profilepicture} alt=""/>
              <h4>{selectedUser.name}</h4>
              <p>{selectedUser.email}</p>
              <div><Data/></div>
              <button><Link to="/" className="link">Sign Out</Link></button>
              </div>}
            </div>
            </div>
            <div className='section-contain' onClick={()=>setShowPopUp(false)}>
            <div className='section-1'>
              <div className='info-2'>
              <img src={selectedUser.profilepicture} alt="profile pic and name of the user" className='profile-img' />
              <h1 >{selectedUser.name}</h1>
              </div>
              <div className='info-3'>
           <h2><span>Username :</span> {selectedUser.username}</h2>
            <h2><span>e-mail : </span>{selectedUser.email}</h2>
            <h2><span> Phone : </span>{selectedUser.phone}</h2>
            <h2><span>Website :</span> {selectedUser.website}</h2>
            </div>
            <div className='info-4'>
              <h1 className='name'>Company</h1>
              <h2><span>Name :</span>{selectedUser.company.name}</h2>
              <h3><span>catchphrase:</span> {selectedUser.company.catchPhrase}</h3>
              <h3><span>bs :</span> {selectedUser.company.bs}</h3>
            </div>
            </div>
            <div className='section-2'>
                    <h1 className='name'>Address :</h1>
                    <h2><span>Street : </span>{selectedUser.address.street}</h2>
                    <h2><span>suite : </span>{selectedUser.address.suite}</h2>
                    <h2><span>City : </span>{selectedUser.address.city}</h2>
                    <h2><span>Zipcode : </span>{selectedUser.address.zipcode}</h2>
                    <div className='map-wrap'>
                    <MapContainer className='map-contain' center={[location.latitude, location.longitude]} zoom={13} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={900} />
      <Marker position={[location.latitude, location.longitude]}>
        <Popup>
          Pavan lives here, meet him & strive for <strong>Greater Collective Enlightment </strong> :)
        </Popup>
      </Marker>
    </MapContainer>
                    </div>
                    <div className='latlng'>
                      <h3><span>Lat : </span>{selectedUser.address.geo.lat}</h3>
                      <h3><span>Long : </span>{selectedUser.address.geo.lng}</h3>
                    </div>
            </div>
            </div>
           
          </>
        )}
      
      </div>
      <div className='chat-div'><Chat/></div>
      </>
    );
}

export default Profile