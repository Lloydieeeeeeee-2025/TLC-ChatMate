export default function ArrowDownModal({ open }) {
    return (
        <div className="">
            {open && (
                <div>
                    <div className="fixed bottom-4 right-4 bg-white rounded-lg p-4 flex items-center space-x-2 border border-gray-200 animate-fade-in transition-all duration-300">
                        <div className="flex flex-col items-center">
                            {/*<CheckCircle className="text-green-500 w-6 h-6" />*/}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>

                            <span className="text-sm font-medium text-gray-800">Added</span>
                        </div>
                        <div className="flex flex-col">

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}