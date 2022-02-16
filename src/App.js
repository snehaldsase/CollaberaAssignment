import data from "./data/data"
import {useEffect, useState} from "react";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(data);
  }, []);
  
  return (
    <div>
<section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
    <div className="flex flex-col justify-center h-full">
  
        <div className="w-1/2  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Rewards Points</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                            <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">S.No</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Item Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Amount Spent</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Rewards Point</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                        {items.length>0 && items.map((item, index) => {
                          return (
                             <tr>
                             <td className="p-2 pl-8 whitespace-nowrap">
                             <div className="text-left">{index+1}</div>
                             </td>
                             <td className="p-2 pl-8 whitespace-nowrap">
                                 <div className="text-left">{item.item_name}</div>
                             </td>
                             <td className="p-2 pl-8 whitespace-nowrap">
                                 <div className="text-left font-medium text-red-500">${item.amount_spent}</div>
                             </td>
                             <td className="p-2 pl-8 whitespace-nowrap">
                                 <div className="text-lg text-left text-green-500">{item.reaward_point}</div>
                             </td>
                         </tr>);
                          })}
                          <tr>
                             <td className="p-2 pl-4 whitespace-nowrap">
                             </td>
                             <td className="p-2 pl-4 whitespace-nowrap">
                             </td>
                             <td className="p-2 pl-4 whitespace-nowrap">
                             </td>
                             <td className="pt-8 -pl-4 whitespace-nowrap">
                                 <div className="text-lg text-left font-bold ">Total 
                                 <span className="pl-2 text-green-500">{items.reduce((partialSum, a) => partialSum + a.reaward_point, 0)}</span></div>
                             </td>
                         </tr>
                        </tbody>
                    </table>
                    {/* <div className="grid justify-items-end">
                      <div>Total</div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  );
}

export default App;
