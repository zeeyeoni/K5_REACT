import TailBlueButton from "../UI/TailBlueButton";

export default function Div3({ n, setN }) {
    const handleUp = () => {
        setN(n + 1);
    }

    const handleDown = () => {
        setN(n - 1);
    }

    return (
        <div className='w-5/6 h-5/6 rounded-xl p-10 flex justify-center items-center bg-purple-700'>
            <div className='text-xl text-gray-700'>Div3</div>
            <div>
                <TailBlueButton caption="증가" bcolor="orange" handleClick={handleUp} />
                <TailBlueButton caption="감소" bcolor="red" handleClick={handleDown} />
            </div>
        </div>
    )
}
