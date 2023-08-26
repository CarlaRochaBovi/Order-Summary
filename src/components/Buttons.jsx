export function Buttons() {
  return (
    <div className="flex flex-col gap-2">
      <button className="w-full hover:shadow-bg-primary-blue hover:shadow-[0px_0px_10px_5px_rgba(144,128,167,0.5)] cursor text-desatured-blue-2 bg-primary-blue font-black p-4 rounded-xl transition-all hover:bg-desatured-blue-1">
        Proceed to Payment
      </button>
      <button className="w-full font-black cursor p-4 rounded-xl text-desatured-blue-1">
        Cancel Order
      </button>
    </div>
  );
}
