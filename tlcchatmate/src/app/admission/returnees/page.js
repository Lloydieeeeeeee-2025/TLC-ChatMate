"use client"
import { useState } from "react"
import Navigation from "../../navigation"
import Link from "next/link"
import Dropdown from "../dropdown"
import SuccessModal from "../successmodal"

export default function Returnees() {
    const [selectedItem, setSelectedItem] = useState(null)

    const [requirementField, setRquirementField] = useState("")
    const [requirementList, setRequirementList] = useState([])
    const [requirementFieldError, setRquirementFieldError] = useState("")

    const makeRequirement = () => {
        if (requirementField.length <= 1) {
            setRquirementFieldError("Set a requirement")
        }
        else {
            setRquirementFieldError("")
            setRequirementList([...requirementList, requirementField.trim()])
            setRquirementField("")
        }
    }

    const removeRequirement = (index) => {
        setRequirementList(requirementList.filter((_, i) => i !== index))
        if (selectedItem === index) {
            setSelectedItem(null)
        }
        else if (selectedItem > index) {
            setSelectedItem(selectedItem - 1)
        }
    }

    const [processField, setProcessField] = useState("")
    const [processList, setProcessList] = useState([])
    const [processFieldError, setProcessFieldError] = useState("")

    const makeProcess = () => {
        if (processField.length <= 1) {
            setProcessFieldError("Set a process")
        }
        else {
            setProcessField("")
            setProcessList([...processList, processField.trim()])
            setProcessField("")
        }
    }

    const removeProcess = (index) => {
        setProcessList(processList.filter((_, i) => i != index))
    }

    const select = (index) => {
        setSelectedItem(index)
    }

    return (
        <main className="text-gray-600 ">
            <Navigation />
            <div className="pt-11 pl-0 sm:pl-64">
                <div className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row sm:justify-between sm:items-center gap-3 mt-4 border-b border-gray-200 pb-4">
                        <h1 className="font-bold text-lg sm:text-lg md:text-xl tracking-tight">
                            HED Returnees
                        </h1>
                        <div className="flex justify-center md:justify-end">
                            <Dropdown />
                        </div>
                    </div>

                    <div className="flex justify-center bg-white border border-gray-200 rounded-lg p-4 md:p-6 mt-5">
                        <div className="w-full md:w-[85%] lg:w-3/5">
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/*left column*/}
                                <div className="border border-gray-200 w-full p-4 rounded-md  hover:shadow-md transition-shadow duration-300">
                                    <h3 className="font-bold mb-3 ">Admission Requirements</h3>

                                    <div className="mb-4 w-full">
                                        <div className="flex items-stretch">
                                            <input
                                                className="w-full border border-gray-200 rounded-l-md p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition duration-200"
                                                value={requirementField}
                                                onChange={(e) => setRquirementField(e.target.value)}
                                                placeholder="Enter a requirement"
                                            />
                                            <button className="bg-gray-200 hover:bg-gray-300 rounded-r-md p-2 transition duration-200" onClick={makeRequirement}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                            </button>
                                        </div>
                                        {requirementFieldError && <span className="text-sm mt-1 block text-red-600">{requirementFieldError}</span>}
                                    </div>

                                    <div className="w-full flex-1 overflow-y-auto max-h-[350px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                        <div className="space-y-2">
                                            <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-50 transition">
                                                <span className="">Qualifying Rating in Entrance Examination</span>

                                                <button className="rounded-md p-1 transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-50 transition">
                                                <span className="">Transcript of Records</span>

                                                <button className="rounded-md p-1 transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-50 transition">
                                                <span className="">Transfer Credential & Honorable Dismissal</span>

                                                <button className=" rounded-md p-1 transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-50 transition">
                                                <span className="">Certificate of Good Moral</span>

                                                <button className=" rounded-md p-1 transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-50 transition">
                                                <span className="">2 pcs. 2x2 pictures</span>

                                                <button className=" rounded-md p-1 transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-50 transition">
                                                <span className="">2 pcs. Long size orange folder</span>

                                                <button className=" rounded-md p-1 transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {requirementList.map((item, index) => (
                                                <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-100 transition" key={index} onClick={() => select(index)}>
                                                    <span className="">{item}</span>
                                                    <button className=" rounded-md p-1 transition duration-200" onClick={() => removeRequirement(index)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/*right column*/}
                                <div className="border border-gray-200 w-full p-4 rounded-md  hover:shadow-md transition-shadow duration-300 mt-4 sm:mt-0">
                                    <h3 className="font-bold mb-3 ">Admission Process</h3>

                                    <div className="mb-4 w-full">
                                        <div className="flex items-stretch">
                                            <input
                                                className="w-full border border-gray-200 rounded-l-md p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition duration-200"
                                                value={processField}
                                                onChange={(e) => setProcessField(e.target.value)}
                                                placeholder="Enter a process"
                                            />
                                            <button className="bg-gray-200 hover:bg-gray-300 rounded-r-md p-2 transition duration-200" onClick={makeProcess}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                            </button>
                                        </div>
                                        {processFieldError && <span className="text-red-600 text-sm mt-1 block">{processFieldError}</span>}
                                    </div>

                                    <div className="w-full flex-1 overflow-y-auto max-h-[350px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                        <div className="space-y-2">
                                            <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-50 transition">
                                                <span className="text-gray-700">Go to the Information Desk</span>

                                                <button className="text-gray-500 hover:text-red-500 rounded-md p-1 transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-50 transition">
                                                <span className="text-gray-700">Go to the HED Registrar</span>

                                                <button className="text-gray-500 hover:text-red-500 rounded-md p-1 transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-50 transition">
                                                <span className="text-gray-700">Pay Entrance Exam Fee</span>

                                                <button className="text-gray-500 hover:text-red-500 rounded-md p-1 transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-50 transition">
                                                <span className="text-gray-700">Take Entrance Exam</span>

                                                <button className="text-gray-500 hover:text-red-500 rounded-md p-1 transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-50 transition">
                                                <span className="text-gray-700">Go to HED Registrar</span>

                                                <button className="text-gray-500 hover:text-red-500 rounded-md p-1 transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-50 transition">
                                                <span className="text-gray-700">Proceed to CCS Faculty Room</span>

                                                <button className="text-gray-500 hover:text-red-500 rounded-md p-1 transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-50 transition">
                                                <span className="text-gray-700">Pay Tuition Fee</span>

                                                <button className="text-gray-500 hover:text-red-500 rounded-md p-1 transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-50 transition">
                                                <span className="text-gray-700">Proceed to the HED Registrar</span>

                                                <button className="text-gray-500 hover:text-red-500 rounded-md p-1 transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* Dynamic processes */}
                                            {processList.map((item, index) => (
                                                <div className="flex w-full items-center justify-between border border-gray-200 p-3 rounded hover:bg-gray-100 transition" key={index} onClick={() => select(index)}>
                                                    <span className="text-gray-700">{item}</span>
                                                    <button className="text-gray-500 hover:text-red-500 rounded-md p-1 transition duration-200" onClick={() => removeProcess(index)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <SuccessModal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

