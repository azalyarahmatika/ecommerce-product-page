function PriceTag() {
  return(
    <div className=" flex w-full justify-between font-bold items-center mb-5">
      <div className="flex items-center gap-3">
        <p className="text-2xl">$125.00</p>
        <p className="bg-black text-white px-2 py-[2px] rounded-md text-xs mt-1">50%</p>
      </div>
      <div>
        <p className="text-dark_grayish_blue line-through">$250.00</p>
      </div>
    </div>
  )
}

export default PriceTag