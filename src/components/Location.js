import Province from "./Province";

export default function Location ({ city, children }) {
     return (
        <div>
            { children }
            <div>{ city }, <Province name='Santa Fe' />, Argentina</div>
        </div>
     )
}