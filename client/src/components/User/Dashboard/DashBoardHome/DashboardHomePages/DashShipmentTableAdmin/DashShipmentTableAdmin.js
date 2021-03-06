import React from 'react'
import DashShipmentTableAdminBanner from './DashShipmentTableAdminBanner/DashShipmentTableAdminBanner'
import DashShipmentTableAdminContent from './DashShipmentTableAdminContent/DashShipmentTableAdminContent'
import "./DashShipmentTableAdmin.css"

const DashShipmentTableAdmin = () => {
	return (
		<div className="dash-general">
			<DashShipmentTableAdminBanner/>
			<DashShipmentTableAdminContent/>
		</div>
	)
}

export default DashShipmentTableAdmin
