
function SkeletonListProducts() {
    return (
        <div className="flex flex-col gap-4 border-t py-4 sm:gap-8 sm:py-8">
            <div className="flex items-center justify-between gap-4">
                <div className="w-28 h-1 sm:h-4 py-2 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    [1, 2, 3].map((element) => (
                        <div key={element} className="border-gray-200 flex cursor-pointer items-center justify-between gap-3 rounded-md border animate-pulse">
                            <div className="flex h-full w-full gap-4 p-4">
                                <div className="flex w-full flex-col justify-between gap-1">
                                    <div className="flex flex-col gap-3">
                                        <div className="w-40 h-2 sm:h-3 bg-gray-200 rounded-lg"></div>
                                        <div className="w-44 h-2 sm:h-3 bg-gray-200 rounded-lg "></div>
                                        <div className="w-44 h-2 sm:h-3 bg-gray-200 rounded-lg "></div>
                                        <div className="w-44 h-2 sm:h-3 bg-gray-200 rounded-lg "></div>
                                        <div className="w-44 h-2 sm:h-3 bg-gray-200 rounded-lg "></div>
                                    </div>
                                    <div className="flex items-end">
                                        <div className="w-14 h-2 sm:h-3 bg-gray-200 rounded-lg text-sm font-medium"></div>
                                    </div>
                                </div>
                                <div className="min-w-44 sm:min-w-36 bg-gray-200 h-28 w-40 rounded-md object-cover object-center sm:h-28 sm:w-44"></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SkeletonListProducts