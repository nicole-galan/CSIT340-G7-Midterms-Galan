import { useState } from "react";

function Hire({ hours }) {
    const [totalHours, setTotalHours] = useState(hours);
    const [totalCost, setTotalCost] = useState(totalHours * 500);

    function handleAddHour() {
        setTotalHours(totalHours + 1);
        setTotalCost((totalHours + 1) * 500);
    }

    function handleClear() {
        setTotalHours(0);
        setTotalCost(0);
    }

    return (
        <div className="mx-20 mt-8 flex items-center rounded-xl justify-between bg-[#222222] p-6 text-[#FAF3E1]">
            <div>
                <h3 className="text-2xl font-bold">"Hire me for ", {totalHours}, " hours"</h3>
                <p className="mt-1 text-xl">
                    "Total: ", <span className="font-bold text-[#FAF3E1]">"PHP ", {totalCost}</span>
                </p>
            </div>

            <div className="flex gap-4">
                <button className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
                onClick={handleAddHour}">
                    "Add hour"
                </button>

                <button className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
                onClick={handleClear}>
                    "Clear"
                </button>
            </div>

        </div>
    );
}

export default Hire;


