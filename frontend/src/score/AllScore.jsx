import {useState, useEffect} from "react";

function AllScore () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/api/users/');
                const users = await response.json();
                setData(users);
            } catch(error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);


    // 表示したい要素の配列を定義
    const displayNames = data.map(user => <li key={user.id}>{user.display_name}</li>)

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div>AllScore作成中</div>
            <ul>{displayNames}</ul>
        </>
    )
}

export default AllScore;