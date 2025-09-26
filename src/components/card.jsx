import calender from "../assets/images/calender.png"
const Card = ({ ticket }) => {
    const {title,description,priority,status,assignee,date } = ticket;
    return (
        <div className="max-w-md p-4 rounded-lg shadow-sm bg-white flex flex-col space-y-3 m-2">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">
                    {title}
                </h2>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                    {status}
                </span>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">
               {description}
            </p>

            <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="text-red-600 font-semibold">{priority}</span>
                    <span>#1001</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>{assignee}</span>
                    <img src={calender} alt="" />
                    <span>{date}</span>
                </div>
            </div>
        </div>

    )
}
export default Card;