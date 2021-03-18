import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
	const [orphanages, setOrphanages] = useState([]);

	useEffect(() => {
		api.get('orphanages').then(response => {
			setOrphanages(response.data);
		});
	}, []);

	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={mapMarkerImg} alt="Happy" />

					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita :)</p>
				</header>

				<footer>
					<strong>Jacareí</strong>
					<span>São Paulo</span>
				</footer>
			</aside>

			<MapContainer
				center={[-23.3072715,-45.9705731]}
				zoom={15}
				style={{ width: '100%', height: '100%' }}
			>
				<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

				{orphanages.map(orphanage => {
					return (
						<Marker
							icon={mapIcon}
							position={[-23.3072715,-45.9705731]}
						>
							<Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
								Teste		
								<Link to="/orphanages/1">			
									<FiArrowRight size={20} color="#FFF" />
								</Link>			
							</Popup>
						</Marker>
					)
				})}

			</MapContainer>

			<Link to="/orphanages/create" className="create-orphanage">
				<FiPlus size={32} color="#fff" />
			</Link>
		</div>
	)
}

export default OrphanagesMap;