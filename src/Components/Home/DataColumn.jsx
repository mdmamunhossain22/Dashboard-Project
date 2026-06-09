import DataCard from "../Common/DataCard"


const DataColumn = () => {
  return (
    <div className="flex flex-wrap gap-5 w-full">
        <DataCard Title="Total User" Count="39" />
        <DataCard Title="Websites" Count="7" />
        <DataCard Title="Your Notification" Count="12" />
        <DataCard Title="Users Notification" Count="68" />
    </div>
  )
}

export default DataColumn