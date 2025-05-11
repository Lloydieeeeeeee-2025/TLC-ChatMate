"use client"
import { useState } from "react"
import Navigation from "../../navigation"
import Link from "next/link"

export default function Newscholarship() {
    const [activateModal, isActivateModal] = useState(false)

    const [scholarshipAttr, setScholarshipAttr] = useState("")
    const [scholarshipsAttrList, setScholarshipsAttrList] = useState([])
    const [selectedAttr, setSelectedAttr] = useState(null)
    const [addedRequirement, setAddedRequirement] = useState("")
    const [requirementError, setRequirementError] = useState("")
    const [storeRequirements, setStoreRquirements] = useState({})

    const [attrEmpty, setAttrEmpty] = useState()
    const scholarshipsAttrStack = () => {
        if (scholarshipAttr.length <= 1) {
            setAttrEmpty("Input cannot be empty.")
        }
        else {
            setAttrEmpty("")
            setScholarshipsAttrList([...scholarshipsAttrList, scholarshipAttr.trim()])
            setScholarshipAttr("")
        }
    }

    const removeScholarshipAttrStack = (index) => {
        const createSchoReqr = {}

        Object.keys(storeRequirements).forEach(key => {
            const num = parseInt(key)
            if (num < index) {
                createSchoReqr[num] = createSchoReqr[num]
            }
            else if (num > index) {
                createSchoReqr[num - 1] = storeRequirements[num]
            }
        })

        setStoreRquirements(createSchoReqr)
        setScholarshipsAttrList(scholarshipsAttrList.filter((_, i) => i !== index))

        if (selectedAttr === index) {
            setSelectedAttr(null)
        }
        else if (selectedAttr > index) {
            setSelectedAttr(selectedAttr - 1)
        }
    }

    const selectedScholarshipAttr = (index) => {
        setSelectedAttr(index)
    }

    const openAttrReqrModal = () => {
        if (selectedAttr !== null) {
            isActivateModal(true)
            setAddedRequirement("")
            setRequirementError("")
        }
    }

    const addreqr = () => {
        if (addedRequirement.length <= 1) {
            setRequirementError("Provide an input.")
            return
        }

        setRequirementError("")
        const currentReqr = storeRequirements[selectedAttr] || []
        const newReqr = { ...storeRequirements, [selectedAttr]: [...currentReqr, addedRequirement.trim()] }

        setStoreRquirements(newReqr)
        setAddedRequirement("")
    }

    const removereqr = (index) => {
        const currentReqr = storeRequirements[selectedAttr] || []
        const newReqr = { ...storeRequirements, [selectedAttr]: currentReqr.filter((_, i) => i !== index) }

        setStoreRquirements(newReqr)
    }

    const displayReqr = selectedAttr !== null ? (storeRequirements[selectedAttr] || []) : []

    {/*
    const resistLoading = (e) => {
        e.preventDefault()
        scholarshipsAttrStack()
    }
    */}

    return (
        <main className="text-gray-600">
            <Navigation />
            <div className="pt-11 pl-0 sm:pl-64">
                <div className="p-5">
                    <div className="flex flex-col md:flex-row  sm:justify-between sm:items-center gap-2 mt-5 border-b border-gray-200">
                        <h1 className="font-bold text-lg sm:text-2xl text-gray-600">Scholarships</h1>
                        <div className="flex justify-center md:justify-end">
                            <Link className="text-gray-600 font-semibold sm:text-base border-transparent hover:bg-gray-100 py-2 px-3" href="/scholarship/scholarships">Management</Link>
                            <Link className="text-blue-700 font-semibold sm:text-base border-b-3 border-blue-700 hover:bg-gray-100 py-2 px-3" href="/scholarship/createscholarship">Create Scholarship</Link>
                        </div>
                    </div>

                    <div className="flex justify-center bg-white shadow-lg rounded-lg p-5">
                        <div className="w-full md:w-[80%] lg:w-1/2">
                            <div className="">
                                <h3 className="font-semibold">Scholarship Title</h3>
                                <input className="border border-gray-200 rounded-lg w-full p-2" placeholder="title" />
                            </div>
                            <div className="">
                                <h3 className="font-semibold">Description</h3>
                                <textarea className="border border-gray-200 rounded-lg w-full p-2 resize-none" rows={3} placeholder="I honor this scholarship to those..." />
                            </div>

                            <div className="flex flex-col sm:flex-row">
                                {/*left side*/}
                                <div className="border border-gray-200 w-full p-3">
                                    <h3 className="font-semibold mb-2">Guidelines</h3>

                                    {/*
                                        <div className="border border-gray-200 w-full p-3 flex">
                                            <button className="bg-gray-200 hover:bg-gray-300 transition duration-400 p-2 rounded-lg" onClick={() => isActivateModal(true)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                                Add attribute
                                            </button>
                                        </div>
                                    */}

                                    <div className="mb-3 w-full">
                                        <div className="flex items-stretch">
                                            <input className="w-full border border-gray-200 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" value={scholarshipAttr} onChange={(e) => setScholarshipAttr(e.target.value)} placeholder="Honorable Scholarship" />
                                            <button className="bg-gray-200 hover:bg-gray-300 rounded-r-md p-1" onClick={scholarshipsAttrStack}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>

                                            </button>
                                        </div>
                                        {attrEmpty && <span className="text-red-600">{attrEmpty}</span>}
                                    </div>
                                    <div className="w-full flex-1 overflow-y-auto">
                                        {scholarshipsAttrList.map((item, index) => (
                                            <div className="flex w-full items-center justify-between border border-gray-200 hover:bg-gray-200 transition duration-4 p-2 " key={index} onClick={() => selectedScholarshipAttr(index)}>
                                                <span>{item}</span>
                                                <button className="hover:bg-gray-200 rounded-md" onClick={() => removeScholarshipAttrStack(index)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/*modal begining*/}
                                <div className={`fixed inset-0 bg-opacity-20 backdrop-blur-sm transition-opacity duration-300 ${activateModal ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => isActivateModal(false)}></div>

                                <div className={`fixed top-0 right-0 h-full w-full z-100 md:w-[30%] md:z-40 bg-white border-l border-gray-200 transform transition-transform duration-300 ${activateModal ? "translate-x-0" : "translate-x-full"}`}>
                                    <div className="flex flex-col h-full p-5 space-y-4">

                                        <div className="">
                                            <button onClick={() => isActivateModal(false)} className="text-gray-600 hover:text-black">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="flex flex-col h-full">
                                            <h3 className="font-semibold mb-2">{selectedAttr !== null ? scholarshipsAttrList[selectedAttr] : ""}</h3>

                                            <div className="mb-2 w-full">
                                                <div className="flex items-stretch">
                                                    <input className="w-full border border-gray-200 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" value={addedRequirement} onChange={(e) => setAddedRequirement(e.target.value)} />
                                                    <button className="bg-gray-200 hover:bg-gray-300 rounded-r-md p-1" onClick={addreqr}>add</button>
                                                </div>
                                                {requirementError && <span className="text-red-600 text-sm">{requirementError}</span>}
                                            </div>

                                            <div className="w-full flex-1 overflow-y-auto">
                                                {displayReqr.map((value, index) => (
                                                    <div className="flex w-full items-center justify-between border border-gray-200 p-2" key={index}>
                                                        <p >{value}</p>
                                                        <button className="hover:bg-gray-200 rounded-md" onClick={() => removereqr(index)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <button className="w-full bg-gray-200 hover:bg-gray-300 transition duration-400 p-2 rounded-lg" onClick={() => isActivateModal(false)}>
                                            Okay
                                        </button>
                                        {/*
                                        <div className="mb-3 w-full">
                                            <div className="flex items-stretch">
                                                <input className="w-full border border-gray-200 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent" value={scholarshipAttr} onChange={(e) => setScholarshipAttr(e.target.value)} placeholder="Honorable Scholarship" />
                                                <button className="bg-gray-200 hover:bg-gray-300 rounded-r-md p-1" onClick={scholarshipsAttrStack}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                    </svg>

                                                </button>
                                            </div>
                                            {attrEmpty && <span className="text-red-600">{attrEmpty}</span>}
                                        </div>

                                        <div className="w-full flex-1 overflow-y-auto">
                                            {scholarshipsAttrList.map((item, index) => (
                                                <div className="flex w-full items-center justify-between border border-gray-200 p-2" key={index}>
                                                    <span>{item}</span>
                                                    <button className="hover:bg-gray-200 rounded-md" onClick={() => removeScholarshipAttrStack(index)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                        </svg>

                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        */}
                                    </div>
                                </div>
                                {/*modal end*/}

                                {/*right side*/}
                                <div className="border border-gray-200 w-full p-3">
                                    {selectedAttr !== null ? (
                                        <div>
                                            <h3 className="font-semibold mb-2">{scholarshipsAttrList[selectedAttr]}</h3>

                                            {displayReqr.length > 0 ? (
                                                <div className="mb-2 ">
                                                    {displayReqr.map((req, index) => (
                                                        <div key={index}>{req}</div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <i className="mb-2"></i>
                                            )}
                                            {scholarshipsAttrList.length > 0 && (
                                                <button className="bg-gray-200 rounded-lg p-2 flex justify-center w-full p-2 items-center hover:bg-gray-300 transition duration-400" onClick={openAttrReqrModal}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                    </svg>

                                                    Add Requirements
                                                </button>
                                            )}
                                        </div>
                                    ) : (
                                        <p>Select a guidelines to add requirements.</p>
                                    )}


                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Link className="bg-gray-200 p-2 rounded-md mt-2 transition duration-400 hover:bg-gray-300" href="/scholarship/scholarships">Save</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
