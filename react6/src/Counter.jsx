export default function Counter() {
    let [count,setcount] = useState(0);

    return (
        <div>
            <h3>count= {count} </h3>
        </div>
    );
}