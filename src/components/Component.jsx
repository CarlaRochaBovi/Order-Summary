import Icon from '../assets/icon-music.svg'
export function Component() {
    return (
      <div className="flex self-center justify-items-center w-max bg-[#f5f2ff] p-4 rounded-xl mb-4">
        <div className="">
          <img
            src={Icon}
            alt="Music icon"
            className=" mr-7 w-[48px] h-[48px] "
          />
        </div>
        <div className="mr-10">
          <h2 className=" text-dark-blue text-base font-black">Annual Plan</h2>
          <p className="text-base text-desatured-blue-1">$59.99/year</p>
        </div>
        <p className="cursor text-primary-blue text-base underline font-bold self-center">
          Change
        </p>
      </div>
    );
}