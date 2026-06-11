import DataCard from "../Common/DataCard"
import { useSelector } from "react-redux"


const DataColumn = () => {

  const webLinks = useSelector((state) => state.home.WebLinks)
  const allUserData = useSelector((state) => state.usersList.allUserData)
  const notificationData = useSelector((state) => state.notification.notificationData)

  return (
    <div className="flex flex-wrap gap-5 w-full">
        <DataCard Title="Total User" Count={allUserData.length} />
        <DataCard Title="Websites" Count={webLinks.length} />
        <DataCard Title="Your Notification" Count={notificationData.length} />
        <DataCard Title="Users Notification" Count="68" />
    </div>
  )
}

export default DataColumn