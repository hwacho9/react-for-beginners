import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
    const { id } = useParams(); //url의 상세정보를 알려준다
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json(); //json 을 받아옴
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);
    console.log(id);
    return <h1>Detail</h1>;
}
export default Detail;
