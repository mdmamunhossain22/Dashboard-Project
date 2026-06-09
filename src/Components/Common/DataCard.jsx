

const DataCard = ({Title="Title", Count="0" }) => {
    return (
        <div className="flex flex-col gap-3 min-w-60 max-md:w-full p-5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl">
            <div className="">
                <h2 className="text-sm text-gray-600 dark:text-gray-400 font-medium">{Title}</h2>
            </div>
            <div className="flex gap-10 justify-between">
                <div className="">
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">{Count}</h4>
                </div>
                <div className="flex items-end">
                    <span className="px-2 py-0.5 rounded-full font-medium text-xs bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-600">+20%</span>
                </div>
            </div>
        </div>
    )
}

export default DataCard