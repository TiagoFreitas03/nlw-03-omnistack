import React from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import L from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/components/sidebar.css';


const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
});

export default function Sidebar() {
	const { goBack } = useHistory();

	return (
		<aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
         </button>
      </footer>
    </aside>
	);
}