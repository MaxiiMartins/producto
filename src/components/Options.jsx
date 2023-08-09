
function Options({ opciones }) {
    const { talle, color } = opciones
    return (
        <div className="flex p-4 flex-row gap-8">
            {talle.status ? (
                <div className="flex w-full flex-col gap-4">
                    <p className="text-lg font-medium">Talle</p>
                    <div className="grid gap-2">
                        {/* opciones */}
                        <div className="flex flex-col gap-4">
                            {/* item 1 */}
                            {
                                talle.items.map(({valor}, i) => (
                                    <div key={i} className="flex items-center gap-x-3">
                                        <button type="button" role="radio" aria-checked="true" value="Provolone" className="h-6 w-6 rounded-full border border-input ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="Provolone" data-radix-collection-item="">
                                            <span className="flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 fill-primary text-primary"><circle cx="12" cy="12" r="10"></circle></svg>
                                            </span>
                                        </button>
                                        <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-full text-md">
                                            <p className="uppercase">{valor}</p> 
                                        </label>
                                    </div>
                                ))
                            }
                            {/* <div className="flex items-center gap-x-3">
                                <button type="button" role="radio" aria-checked="true" value="Provolone" className="h-6 w-6 rounded-full border border-input ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="Provolone" data-radix-collection-item="">
                                    <span className="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 fill-primary text-primary"><circle cx="12" cy="12" r="10"></circle></svg>
                                    </span>
                                </button>
                                <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-full text-md">
                                    <div className="flex w-full justify-between">
                                        <p>item</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg leading-tight text-muted-foreground">+</span>
                                            <p className="font-medium">$&nbsp;50,00</p>
                                        </div>
                                    </div>
                                </label>
                            </div> */}
                           
                        </div>
                    </div>
                </div>
            ) : null}
            {
                color.status ? (
                    <div className="flex w-full flex-col gap-4">
                        <p className="text-lg font-medium">Color</p>
                        <div className="grid gap-2">
                            {/* opciones */}
                            <div className="flex flex-col gap-4">
                                {/* item 1 */}
                                {
                                color.items.map(({valor}, i) => (
                                    <div key={i} className="flex items-center gap-x-3">
                                        <button type="button" role="radio" aria-checked="true" value="Provolone" className="h-6 w-6 rounded-full border border-input ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="Provolone" data-radix-collection-item="">
                                            <span className="flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 fill-primary text-primary"><circle cx="12" cy="12" r="10"></circle></svg>
                                            </span>
                                        </button>
                                        <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-full text-md">
                                            <p className="capitalize">{valor}</p> 
                                        </label>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default Options